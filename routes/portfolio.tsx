import { PageProps } from '$fresh/server.ts'; // Import PageProps

// Define the state shape expected from middleware
interface PortfolioState {
	t: (key: string) => string;
}

// Update component signature
export default function PortfolioPage(
	{ state }: PageProps<undefined, PortfolioState>,
) {
	const { t } = state; // Get t from state

	return (
		<>
			<section id='portfolio' class='py-20 bg-white min-h-screen'>
				<div class='container mx-auto px-4'>
					{/* Use translation function */}
					<h2 class='text-4xl font-bold mb-10 text-center'>
						{t('portfolioTitle')}
					</h2>
					<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Placeholder Portfolio Items - Translate descriptions */}
						<div class='bg-gray-100 p-6 rounded-lg'>
							<div class='h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400'>
								{t('portfolioImagePlaceholder')}
							</div>
							{/* Use translation function */}
							<h3 class='text-xl font-bold mb-2'>
								{t('portfolioItem1Title')}
							</h3>
							<p>{t('portfolioItem1Desc')}</p>
						</div>
						<div class='bg-gray-100 p-6 rounded-lg'>
							<div class='h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400'>
								{t('portfolioImagePlaceholder')}
							</div>
							{/* Use translation function */}
							<h3 class='text-xl font-bold mb-2'>
								{t('portfolioItem2Title')}
							</h3>
							<p>{t('portfolioItem2Desc')}</p>
						</div>
						<div class='bg-gray-100 p-6 rounded-lg'>
							<div class='h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400'>
								{t('portfolioImagePlaceholder')}
							</div>
							{/* Use translation function */}
							<h3 class='text-xl font-bold mb-2'>
								{t('portfolioItem3Title')}
							</h3>
							<p>{t('portfolioItem3Desc')}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
