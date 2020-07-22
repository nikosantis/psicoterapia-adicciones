import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='es'>
        <Head>
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
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
