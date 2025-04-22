import { PageProps } from "$fresh/server.ts"; // Import PageProps

// Define the state shape expected from middleware
interface ServicesState {
  t: (key: string) => string;
}

// Update component signature
export default function ServicesPage({ state }: PageProps<undefined, ServicesState>) {
  const { t } = state; // Get t from state

  return (
    <>
      <section id="services" class="py-20 bg-gray-50 min-h-screen">
        <div class="container mx-auto px-4">
          {/* Use translation function */}
          <h2 class="text-4xl font-bold mb-10 text-center">{t('servicesTitle')}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              {/* Use translation function */}
              <h3 class="text-2xl font-bold mb-4">{t('webAppsTitle')}</h3>
              <p>{t('webAppsDesc')}</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              {/* Use translation function */}
              <h3 class="text-2xl font-bold mb-4">{t('mobileAppsTitle')}</h3>
              <p>{t('mobileAppsDesc')}</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              {/* Use translation function */}
              <h3 class="text-2xl font-bold mb-4">{t('aiSolutionsTitle')}</h3>
              <p>{t('aiSolutionsDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}