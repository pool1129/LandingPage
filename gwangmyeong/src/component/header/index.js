import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';

import styles from './header.module.scss';

import { VscGrabber , VscChromeClose , VscChevronRight } from "react-icons/vsc";

export default function  Header() {
    const isMobile = useMediaQuery({ maxWidth: 1024 })
    const [menuActive, isMenuActive] = useState(false);

    /// 모바일 메뉴 클릭 이벤트
    const mMenuHandler = () => {
        isMenuActive(!menuActive)
    }

    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <a href="/"></a>
                </div>

                {
                    isMobile ?
                    <button type="button" className={styles.mMenuIcon} onClick={mMenuHandler}>
                        <VscGrabber/>
                    </button>
                    :
                    <ul className={styles.headerList}>
                        {MENULIST.map((menu, index) => (
                            <li key={index}><a href={menu.url}>{menu.title}</a></li>
                        ))}
                    </ul>
                }
            </div>

            {
                isMobile ?
                    <div className={menuActive ? 
                        `${`${styles.headerMenuWrap} ${styles.active}`}` : `${styles.headerMenuWrap}`}>
                        <button type="button" className={styles.mMenuIcon} onClick={mMenuHandler}>
                            <VscChromeClose/>
                        </button>

                        <ul className={styles.headerMenuList}>
                            {MENULIST.map((menu, index) => (
                                <li key={index}>
                                    <a href={menu.url}>{menu.title}</a>
                                    <button type="button"><VscChevronRight/></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                :
                ''
            }
        </header>
    )
}

const MENULIST = [
    {
        id: 1,
        title: '광명찾자',
        url: '/'
    },
    {
        id: 2,
        title: '공지사항',
        url: '/'
    }
]