
import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export async function getInitialProps(ctx) {
  const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
}

export default function Document(_) {
  return (
      <Html lang="ru">
        <Head>
          <link rel= "preconnect" href="https://forgotten-god.onrender.com" />
          {/* {styleTags} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  )
}
