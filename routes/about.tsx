import { PageProps } from "$fresh/server.ts";

// Define the state shape expected from middleware
interface AboutState {
  t: (key: string) => string;
}

export default function AboutPage({ state }: PageProps<undefined, AboutState>) {
  const { t } = state; // Get t from state

  return (
    <>
      <section id="about" class="py-20 bg-white min-h-screen">
        <div class="container mx-auto px-4">
          {/* Use translation function */}
          <h2 class="text-4xl font-bold mb-10 text-center">{t('aboutTitle')}</h2>
          <div class="max-w-4xl mx-auto">
            {/* Use translation function */}
            <p class="text-lg mb-6">{t('aboutText1')}</p>
            <p class="text-lg mb-6">{t('aboutText2')}</p>
          </div>
        </div>
      </section>
    </>
  );
}