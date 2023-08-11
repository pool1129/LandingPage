import React, { useState, useEffect } from "react";
import axios from 'axios'

import styles from './privacy.module.scss';

const Privacy = (props) => {
    const [content, setContent] = useState('');

    /// 개인정보 처리방침
    useEffect(() => {
        axios.get('https://merry-eddy.co.kr/fgm/41210/privacy')
            .then((res)=>{
                setContent(res.data)
            })
            .catch((error)=>{console.log(error)})
    }, []); 

    return (
        <div className={styles.pagePop}>
            <div className={styles.privacyPage}>
                <button type="button" class={styles.btnClose} onClick={props.onClick}></button>

                <h3>어디보자 개인정보 처리방침</h3>

                <div className={styles.privacyContent} dangerouslySetInnerHTML={{__html : content}}></div>
            </div>

        </div>
    )
}

export default Privacy;