// Define the props the component will accept, including the translation function and current language
interface NavigationProps {
  lang: string;
  t: (key: string) => string;
}

export function Navigation({ lang, t }: NavigationProps) {


  const menuItems = [
    { href: `/about?lang=${lang}`, key: "navAbout" }, // Link to about page
    { href: `/services?lang=${lang}`, key: "navServices" }, // Link to services page
    { href: `/portfolio?lang=${lang}`, key: "navPortfolio" }, // Link to portfolio page
    { href: `/team?lang=${lang}`, key: "navTeam" }, // Link to team page
    { href: `/contact?lang=${lang}`, key: "navContact" }, // Link to contact page
  ];

  return (
    <nav class="container mx-auto gap-5 px-4 py-4 flex justify-between items-center relative">
      <a href={`/?lang=${lang}`} class="text-2xl font-bold text-primary">
        Webmen
      </a>

      {/* Desktop Menu */}
      <ul class="gap-x-8 flex flex-nowrap overflow-scroll">
        {menuItems.map((item) => (
          <li key={item.key}>
            <a href={item.href} class="hover:text-primary transition-colors">
              {t(item.key)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}