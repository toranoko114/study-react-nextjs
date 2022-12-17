import 'src/styles/globals.css'
// グローバルなCSSは_app.jsで呼び出すこと
import Head from 'next/head'

// see（https://nextjs.org/docs/advanced-features/custom-app)
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
