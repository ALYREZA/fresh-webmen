// Define the props the component will accept
interface FooterProps {
	lang: string; // Although not directly used in this snippet, it's good practice for consistency
	t: (key: string, params?: Record<string, string | number>) => string;
}

export default function Footer({ t }: FooterProps) {
	const currentYear = new Date().getFullYear();

	return (
		<footer class='py-8 bg-gray-800 text-gray-300 text-center'>
			{/* Adjusted text color for better contrast */}
			<div class='container mx-auto px-4'>
				{/* Use translation function for footer text, passing the current year */}
				<p>{t('footerRights', { year: currentYear })}</p>
			</div>
		</footer>
	);
}
