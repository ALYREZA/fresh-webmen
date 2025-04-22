import {WebmenTitle} from "../components/slides/WebmenTitle.tsx"; // Assuming this component doesn't need translation directly or handles it internally
import { type PageProps } from "$fresh/server.ts";

// Define the state shape expected from middleware
interface AppState {
  lang: string;
}

// Update component signature to accept props and destructure state
export default function Home({ state }: PageProps<undefined, AppState>) {
  const { lang } = state; // Get lang and t from state

  return (
    <div class="w-full">
      {/* Hero Section - Assuming WebmenTitle handles its own text or doesn't need translation */}
      <section id="hero" class="px-4 py-8 mx-auto bg-primary-300 min-h-screen flex items-center justify-center">
        <WebmenTitle lang={lang} />
      </section>

    </div>
  );
}
