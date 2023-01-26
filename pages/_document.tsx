import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:image" content="https://jafarzar.com/jafarzar.jpg" />
        <meta name="twitter:image:alt" content="jafarzar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jafarzar" />
        <meta name="twitter:description" content="My Personal Website!" />
        <meta
          name="twitter:image"
          content="https://jafarzar.com/jafarzar.jpg"
        />
        <meta name="twitter:creator" content="@jafarzar" />
        <meta property="og:url" content="https://jafarzar.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
