
interface MenuItemsProps {
    lang: string;
    t: (key: string) => string;
  }

export default function MenuItems({lang, t}: MenuItemsProps) {
    const menuItems = [
        { href: `/about?lang=${lang}`, key: "navAbout" },
        { href: `/services?lang=${lang}`, key: "navServices" },
        { href: `/portfolio?lang=${lang}`, key: "navPortfolio" },
        { href: `/team?lang=${lang}`, key: "navTeam" },
        { href: `/contact?lang=${lang}`, key: "navContact" },
      ];

    return(
        // Apply flexbox classes: stack vertically on mobile, row on medium+, add gaps
        <ul class="flex flex-col md:flex-row gap-y-4 md:gap-x-8 items-center">
        {menuItems.map((item) => (
          // Removed min-h-10 as flex alignment handles vertical space now
          <li key={item.key}>
            <a href={item.href} class="hover:text-primary transition-colors">
              {t(item.key)}
            </a>
          </li>
        ))}
      </ul>
    )

}