// NextJSの機能 prefetch機能があり
import Link from 'next/link'
import styles from 'src/styles/Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <p className={styles.anchor}>Index</p>
      </Link>
      <Link href="/about">
        <p className={styles.anchor}>About</p>
      </Link>
    </header>
  )
}
