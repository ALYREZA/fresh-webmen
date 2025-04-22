import { type PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { cn } from "../util/cn.ts";

// Define the state shape expected from middleware
interface AppState {
  lang: string;
  t: (key: string, params?: Record<string, string | number>) => string;
}

export default function App({ Component, state }: PageProps<undefined, AppState>) {
  const { lang, t } = state; // Get lang and t from state
  const isRTL = lang === 'fa'; // Check if language is Persian

  return (
    <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Use translation function for title and description */}
        <title>{t('siteTitle')}</title>
        <meta name="description" content={t('siteDescription')} />
        <link rel="stylesheet" href="/styles.css" />
        {/* Add specific styles for RTL if needed */}
      </Head>
      {/* Conditionally add 'font-farsi' class to the body */}
      <body class={cn(isRTL && 'font-farsi')} data-theme="colorful">
        <header class="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-50">
          <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href={`/?lang=${lang}`} class="text-2xl font-bold text-green-500">Webmen</a>
            {/* Update nav links to use translations and include lang param */}
            <ul class="hidden md:flex gap-x-8">
              <li><a href={`/?lang=${lang}`} class="hover:text-green-500 transition-colors">{t('navHome')}</a></li>
              <li><a href={`/about?lang=${lang}`} class="hover:text-green-500 transition-colors">{t('navAbout')}</a></li>
              <li><a href={`/services?lang=${lang}`} class="hover:text-green-500 transition-colors">{t('navServices')}</a></li>
              <li><a href={`/portfolio?lang=${lang}`} class="hover:text-green-500 transition-colors">{t('navPortfolio')}</a></li>
              <li><a href={`/team?lang=${lang}`} class="hover:text-green-500 transition-colors">{t('navTeam')}</a></li>
              <li><a href={`/contact?lang=${lang}`} class="hover:text-green-500 transition-colors">{t('navContact')}</a></li>
            </ul>
            {/* TODO: Implement mobile menu & Language switcher */}
            <button class="md:hidden">Menu</button>
          </nav>
        </header>
        <main class="pt-16">
          <Component />
        </main>
        <footer class="py-8 bg-gray-800 text-white text-center">
          <div class="container mx-auto px-4">
            {/* Use translation function for footer */}
            <p>{t('footerRights', { year: new Date().getFullYear() })}</p>
          </div>
        </footer>
        {/* Script moved to island where needed */}
      </body>
    </html>
  );
}
