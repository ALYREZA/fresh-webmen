import { FreshContext } from "$fresh/server.ts";

// Define supported languages and default language
const SUPPORTED_LANGUAGES = ["en", "fa"];
const DEFAULT_LANGUAGE = "en";

// Simple type for translations (can be more complex)
type Translations = Record<string, string>;

// Function to load translations (replace with actual file loading)
async function loadTranslations(lang: string): Promise<Translations> {
  try {
    const url = new URL(`../locales/${lang}.json`, import.meta.url);
    const content = await Deno.readTextFile(url);
    return JSON.parse(content);
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    // Fallback to default language if loading fails
    if (lang !== DEFAULT_LANGUAGE) {
      return loadTranslations(DEFAULT_LANGUAGE);
    }
    return {}; // Return empty if default also fails
  }
}

export async function handler(
  req: Request,
  ctx: FreshContext<Record<string, unknown>, { lang: string; t: (key: string, params?: Record<string, string | number>) => string }>,
) {
  const url = new URL(req.url);
  let lang = url.searchParams.get("lang") || DEFAULT_LANGUAGE; // Simple detection via query param

  // Basic validation/fallback
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    lang = DEFAULT_LANGUAGE;
  }

  const translations = await loadTranslations(lang);

  // Simple translation function
  ctx.state.t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[key] || key; // Return key if translation missing
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(`{${paramKey}}`, String(value));
      });
    }
    return text;
  };
  ctx.state.lang = lang; // Make language available

  const resp = await ctx.next();
  // Set Content-Language header
  resp.headers.set("Content-Language", lang);
  return resp;
}