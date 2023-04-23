
import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export const getInitialProps = async () => {
  const sheet = new ServerStyleSheet();
  const page = renderPage((App) => (props) => 
    sheet.collectStyles(<App {...props} />),
  ); 
  const styleTags = sheet.getStyleElement();
     
  return { ...page, styleTags };
    
}

export default function Document(_, styleTags) {
  return (
      <Html lang="ru">
        <Head>
          <link rel= "preconnect" href="https://forgotten-god.onrender.com" />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  )
}
