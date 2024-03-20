import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <>
    <ul className={styles.ContainerHeader}>

        <li className={styles.FirstSimbolContainer}>

            <div id={styles.FixHeightArrow} className={styles.Simbols}>
                ^
            </div>

            <div className={styles.Simbols}>
                ?
            </div>

        </li>

        <li>
            <h1 className={styles.TitleTermo}>TERMO</h1>
        </li>

        <li className={styles.SecondSimbolContainer}> 

            <div className={styles.Simbols}>

            &#9608;
                
            </div>

            <div id={styles.Gear} className={styles.Simbols}>
             &#9965;
            </div>

        </li>

    </ul>
    </>
  )
}

export default Header