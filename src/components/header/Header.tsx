import React from 'react';
import styles from './header.module.css'


function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Resaw</div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.list_item}>Home</li>
                    <li className={styles.list_item}>About Me</li>
                    <li className={styles.list_item}>Portfolio</li>
                    <li className={styles.list_item}>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;