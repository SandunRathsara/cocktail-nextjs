import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs"
import Document, { Head, Html, Main, NextScript } from "next/document"
import type { DocumentContext } from "next/document"

const DocumentWithAntD = () => (
  <Html lang="en">
    <Head>
      <meta name="application-name" content="Cocktails" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Cocktails" />
      <meta name="description" content="Installable Cocktails Reciepe Book" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#008000" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
      <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />

      <link rel="apple-touch-icon" href="/icons/maskable-icon-512x512.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-180x180.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-icon-180x180.png" />

      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://cocktails.sandun.live" />
      <meta name="twitter:title" content="Cocktail" />
      <meta name="twitter:description" content="Installable Cocktails Reciepe Book" />
      <meta name="twitter:image" content="https://cocktails.sandun.live/icons/maskable-icon-512x512.png" />
      <meta name="twitter:creator" content="@RathsaraSandun" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cocktail" />
      <meta property="og:description" content="Installable Cocktails Reciepe Book" />
      <meta property="og:site_name" content="Cocktail" />
      <meta property="og:url" content="https://cocktails.sandun.live" />
      <meta property="og:image" content="https://cocktails.sandun.live/icons/maskable-icon-512x512.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

DocumentWithAntD.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      )
    })

  const initialProps = await Document.getInitialProps(ctx)
  const style = extractStyle(cache, true)
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    )
  }
}

export default DocumentWithAntD
