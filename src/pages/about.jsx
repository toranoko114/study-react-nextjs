import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'

export default function About({
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleAddArray,
  handleChange
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />

    {isShow ? <h1>{doubleCount}</h1> : null}
    <button onClick={handleClick}>ボタン</button>
    <button onClick={handleDisplay}>{isShow ? "カウント非表示" : "カウント表示"}</button>

    <input type='text' value={text} onChange={handleChange}/>
    <button onClick={handleAddArray}>追加</button>
    <ul>
      {array.map(item =>{
        return <li key={Math.random()}>{item}</li>;
      })}
    </ul>

      <Main page="about"/>
      <Footer />
    </div>
  )
}
