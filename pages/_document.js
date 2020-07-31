import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GTM_ID } from '../lib/tagmanager'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='es'>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5C5434G');
              `
            }}
          />
          <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
          <link rel='manifest' href='favicon/site.webmanifest' />
          <link rel='mask-icon' href='favicon/safari-pinned-tab.svg' color='#002f6c' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#ffffff' />
          <link rel='icon' href='favicon/favicon.ico' />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5C5434G" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
