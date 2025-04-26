import {WebmenTitle} from "../components/slides/WebmenTitle.tsx"; // Assuming this component doesn't need translation directly or handles it internally
import { type PageProps } from "$fresh/server.ts";

// Define the state shape expected from middleware
interface AppState {
  lang: string;
  t: (key: string) => string;
}

// Update component signature to accept props and destructure state
export default function Home({ state }: PageProps<undefined, AppState>) {
  const { lang, t } = state; // Get lang and t from state

  return (
    <div class="w-full">
      {/* Use semantic background for header */}
      {/* Hero Section - Assuming WebmenTitle handles its own text or doesn't need translation */}
      <section id="hero" class="px-4 py-8 mx-auto bg-primary-300 min-h-screen flex items-center justify-center">
        <WebmenTitle lang={lang} />
      <video
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop={false}
        playsInline
        poster="/video/poster.jpg"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        <source src="/video/bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      </section>

    </div>
  );
}
