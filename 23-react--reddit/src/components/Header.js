import SearchBar from './SearchBar'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'


export default function Header() {
    // console.log(props)
    return <header id={styles.header}>
        <NavLink to="/">
                <img src='logo.svg' className={styles["logo"]} alt="logo" />
                <h1>Mini Reddit</h1>
        </NavLink>

        <nav>
            <div className={`${styles.firstRowItem}`}>
                <SearchBar className={`${styles.firstRowItem}`} />
            </div>

            <NavLink to="best"
                className={`${styles.secondRowItem} ${styles.navLink}`}>
                Best
            </NavLink>

            <NavLink to="top"
                className={`${styles.secondRowItem} ${styles.navLink}`}>
                Top
            </NavLink>

            <NavLink to="hot"
                className={`${styles.secondRowItem} ${styles.navLink}`}>
                Hot
            </NavLink>

            <NavLink to="controversial"
                className={`${styles.secondRowItem} ${styles.navLink}`}>
                Controversial
            </NavLink>
        </nav>
    </header>
}
