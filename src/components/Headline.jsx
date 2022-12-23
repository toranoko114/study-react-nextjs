import styles from 'src/styles/Headline.module.css'

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        アイテムの数は {props.children} 個です。
      </p>

      <button onClick={props.handleReduce}>アイテムを減らす</button>
    </div>
  )
}
