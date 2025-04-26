// Define the props the component will accept, including the translation function and current language
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface NavigationProps {
  lang: string;
  children: ComponentChildren;
}

export default function MyNavigation({ lang, children }: NavigationProps) {
  // Signal to track mobile menu state
  const isMobileMenuOpen = useSignal(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    // Directly toggle the signal value
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };

  return (
    <nav class="container mx-auto gap-5 px-4 py-4 flex justify-between items-center relative flex-wrap">
      <a href={`/?lang=${lang}`} class="text-2xl font-bold text-primary">
        Webmen
      </a>
      {/* Hamburger Button - visible only on small screens */}
      <button
        type='button'
        class="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white cursor-pointer"
        aria-label="Toggle Menu"
        onClick={toggleMobileMenu} // This onClick now calls the simplified function
      >
        {/* Simple hamburger icon using divs */}
        <div class="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
        <div class="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
        <div class="w-6 h-0.5 bg-gray-600"></div>
      </button>
      {/* Navigation Links - hidden on small screens unless menu is open */}
      <div
        class={`w-full md:flex md:items-center md:w-auto ${
          isMobileMenuOpen.value ? "block" : "hidden"
        }`}
      >
        {children}
      </div>
    </nav>
  );
}