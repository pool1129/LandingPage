import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <ul className={styles.footerList}>
                    <li><a href="/">서비스 피드백</a></li>
                    <li><a href="/">개인정보 처리방침</a></li>
                    <li><a href="/">서비스 문의</a></li>
                </ul>

                <div className={styles.footerCopy}>
                    <a>Copyright © Cookieparking. All rights reserved</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;