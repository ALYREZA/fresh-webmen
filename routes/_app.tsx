import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Navigation from "../islands/my-navigation.tsx"; // Import the new component
import Footer from "../components/Footer.tsx"; // Assuming you have or will create a Footer component
import MenuItems from "../components/MenuItems.tsx";

// Define the state shape expected from middleware
interface AppState {
  lang: string;
  t: (key: string) => string;
}

export default function App({ Component, state }: PageProps<undefined, AppState>) {
  const { lang, t } = state; // Destructure lang and t from state
  
  return (
    // Add lang and dir attributes to html tag
    <html lang={lang} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                {/* Use translation function for title and description */}
        <title>{t('siteTitle')}</title>
        <meta name="description" content={t('siteDescription')} />
        <link rel="stylesheet" href="/styles.css" />
        {/* Add favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Include anime.js library */}
        <script src="https://cdn.jsdelivr.net/npm/animejs/lib/anime.min.js"></script>
      </Head>
      {/* Apply base text/bg colors and font based on lang */}
      <body class={`bg-background text-foreground ${lang === 'fa' ? 'font-farsi' : ''}`}>
        {/* Use semantic background for header */}
        <header class="fixed top-0 left-0 right-0 bg-background bg-opacity-90 shadow-md z-50 backdrop-blur-sm">
          {/* Use the Navigation component, passing lang and t */}
          <Navigation lang={lang}>
            <MenuItems lang={lang} t={t} />
          </Navigation>
        </header>
        {/* Add padding-top to main to account for fixed header height */}
        <main class="pt-20"> {/* Adjust pt value based on your header's actual height */}
          <Component />
        </main>
        {/* Assuming you have a Footer component */}
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
