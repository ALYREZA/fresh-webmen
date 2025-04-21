import { useEffect } from "preact/hooks";

export default function AnimatedHeader() {
  useEffect(() => {
    const { waapi, onScroll } = anime;

    waapi.animate(".square", {
      scale: [6, 2, .005],
      ease: "inOut(2)",
      autoplay: onScroll({
        container: "body",
        sync: true,
        debug: true,
      }),
    });
  }, []);
  return (
    <h1 class="text-7xl text-center font-bold square">
      Welcome to Webmen
    </h1>
  );
}
