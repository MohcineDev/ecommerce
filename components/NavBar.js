import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={"container " + styles.container}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
