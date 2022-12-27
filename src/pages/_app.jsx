import "src/styles/globals.css";
// グローバルなCSSは_app.jsで呼び出すこと
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBackGroundColerChange } from "src/hooks/useBackGroundColerChange";

// see（https://nextjs.org/docs/advanced-features/custom-app)
const MyApp = ({ Component, pageProps }) => {
  // フックを呼び出すのはreturn前に行う
  // Stateのリフトアップ（NextJSのページ間での状態共通化に限ったもの）
  const counter = useCounter();
  const inputArray = useInputArray();
  useBackGroundColerChange();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
};

export default MyApp;
