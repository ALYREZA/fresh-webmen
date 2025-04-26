import AnimatedHeader from "../../islands/AnimatedHeader.tsx";

export function WebmenTitle({lang}: { lang: string}) {
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center z-10">
      <AnimatedHeader lang={lang} />
    </div>
  );
}
