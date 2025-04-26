import { Button } from "../components/Button.tsx";

export default function AnimatedHeader({lang}: {lang: string}) {

  return (
    <div class="text-center text-white">
      <h1 class="text-6xl md:text-7xl font-bold square mb-4">
        <span class="title-text inline-block">Webmen</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 subtitle-text">
        Crafting Digital Experiences That Transform Businesses
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a href={`/contact?lang=${lang}`} class="cta-button">
          {/* Default Button styling will use semantic secondary colors */}
          <Button class="px-6 py-3 text-lg">
            Hire Us Today
          </Button>
        </a>
      </div>
      <p class="mt-8 text-sm font-farsi subtitle-text">
        ما تجربیات دیجیتالی می‌سازیم که کسب و کار شما را متحول می‌کند
      </p>
    </div>
  );
}
