import styles from './header.module.scss';

const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <a href="/"></a>
                </div>

                <ul className={styles.headerList}>
                    <li><a href="/">공지사항</a></li>
                    <li><a href="/">공지사항</a></li>
                    <li><a href="/">공지사항</a></li>
                    <li><a href="/">공지사항</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;