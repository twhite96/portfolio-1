import { Html, Head, Main, NextScript } from 'next/document';
// import Footnotes from '../components/footnotes';

export default function Document() {
  const meta = {
    title: "tiff's blog",
    description: "Articles focus on React, TS, and Next.",
    image:
      "https://res.cloudinary.com/twhiteblog/image/upload/v1685138249/favicon_zvkwc8.svg",
  };

  return (
    <Html lang='en'>
      <Head>
        <meta name='robots' content='follow, index' />
        <meta name='description' content={meta.description} />
        <meta property='og:site_name' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {/* <Footnotes /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
