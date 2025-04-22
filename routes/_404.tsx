import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts"; // Import PageProps

// Define the state shape expected from middleware
// Note: 404 might not always have state if middleware fails, handle potential undefined state
interface ErrorState {
  lang?: string; // Make lang optional
  t?: (key: string) => string; // Make t optional
}

// Update component signature
export default function Error404({ state }: PageProps<undefined, ErrorState>) {
  // Provide default values or fallbacks if state or t is missing
  const lang = state?.lang || 'en'; // Default to 'en' if lang is missing
  const t = state?.t || ((key: string) => key); // Default to returning the key if t is missing

  return (
    <>
      <Head>
        {/* Use translation function */}
        <title>{t('notFoundTitle')}</title>
      </Head>
      {/* Add lang and dir attributes */}
      <html lang={lang} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        {/* Apply base text/bg colors via body tag in styles.css */}
        <body class={lang === 'fa' ? 'font-farsi' : ''}>
          {/* Use semantic background */}
          <div class="px-4 py-8 mx-auto bg-brand-accent-bg min-h-screen flex flex-col items-center justify-center">
            <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center text-center">
              <img
                class="my-6"
                src="/logo.svg" // Assuming logo doesn't need translation
                width="128"
                height="128"
                alt={t('logoAlt')} // Translate alt text
              />
              {/* Use translation function */}
              <h1 class="text-4xl font-bold">{t('notFoundHeading')}</h1>
              <p class="my-4">
                {/* Use translation function */}
                {t('notFoundMessage')}
              </p>
              {/* Use translation function and add lang param */}
              {/* Use semantic link color */}
              <a href={`/?lang=${lang}`} class="underline text-link hover:text-link-hover">{t('notFoundGoHome')}</a>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
