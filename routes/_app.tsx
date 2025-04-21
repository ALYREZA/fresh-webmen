import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Webmen</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="min-h-[50000px]">
        <section class="bg-[#86efac] h-screen flex items-center justify-center">
          <Component />
        </section>
        <script src="https://cdn.jsdelivr.net/npm/animejs/lib/anime.iife.min.js">
        </script>
      </body>
    </html>
  );
}
