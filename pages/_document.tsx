import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>

          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-5DJRE3ZS88`}
            />
            <script
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5DJRE3ZS88', {
                page_path: window.location.pathname,
            });
            `,
            }}
            /> */}
          <meta name="description" content="TransitLoop vous aide à planifier vos trajets en toute simplicité."></meta>
          <meta name="keywords" content="TransitLoop, transit, loop, io, maas, multimodal, tramway, bus, taxi, velo, marche, transport, trajet, trip" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="facebook-domain-verification" content="ql4fgw69dojm130fy0kqeuybv63wgo" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}