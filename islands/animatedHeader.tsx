import { useEffect } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export default function AnimatedHeader({lang}: {lang: string}) {


  useEffect(() => {
    if (!anime) return;
    const {animate, waapi, onScroll} = anime;

    // Animate the main title
    animate({
      targets: '.title-text',
      opacity: [0, 1],
      translateY: [50, 0],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: (_el: any, i: number) => 300 + 100 * i
    });

    // Animate the subtitle
    animate({
      targets: '.subtitle-text',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 800
    });

    // Animate the CTA button
    animate({
      targets: '.cta-button',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 1200
    });

    // Scroll animation
    if (waapi && onScroll) {
      waapi.animate(".square", {
        scale: [1, 0.8],
        opacity: [1, 0.8],
        ease: "inOut(2)",
        autoplay: onScroll({
          container: "body",
          sync: 0.25,
        }),
      });
    }

    
  }, []);

  return (
    <div class="text-center">
      <h1 class="text-6xl md:text-7xl font-bold square mb-4">
        <span class="title-text inline-block">Web</span>
        <span class="title-text inline-block">men</span>
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
