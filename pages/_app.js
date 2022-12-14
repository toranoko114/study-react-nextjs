import '../styles/globals.css'
// グローバルなCSSは_app.jsで呼び出すこと

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
