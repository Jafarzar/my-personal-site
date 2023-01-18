import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";

Router.events.on("routeChangeStart", () => {
  window.scrollTo(0, 0);
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
