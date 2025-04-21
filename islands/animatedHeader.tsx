import { useEffect } from "preact/hooks";

export default function AnimatedHeader() {
  useEffect(() => {
    const { waapi, onScroll } = anime;

    waapi.animate(".square", {
      rotateX: "6turn",
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
