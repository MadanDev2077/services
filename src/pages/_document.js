import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />

      <Head />
      <body className={`antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
