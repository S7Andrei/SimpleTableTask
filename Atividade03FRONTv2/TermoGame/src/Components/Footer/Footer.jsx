import React from 'react'
import styles from'./Footer.module.css'

function Footer() {
  return (
    <>
    
    <footer>

        <table className={styles.KeyBoardContainer}>

      <tfoot className={styles.UpDownSpace}>

          <tr id={styles.a} className={styles.KeySpaceAround}>
            
              <td className={styles.KeyCell}>Q</td>
              <td className={styles.KeyCell}>W</td>
              <td className={styles.KeyCell}>E</td>
              <td className={styles.KeyCell}>R</td>
              <td className={styles.KeyCell}>T</td>
              <td className={styles.KeyCell}>Y</td>
              <td className={styles.KeyCell}>U</td>
              <td className={styles.KeyCell}>I</td>
              <td className={styles.KeyCell}>O</td>
              <td className={styles.KeyCell}>P</td>
              
          </tr>

          <tr id={styles.b} className={styles.KeySpaceAround}>

              <td className={styles.KeyCell}>A</td>
              <td className={styles.KeyCell}>S</td>
              <td className={styles.KeyCell}>D</td>
              <td className={styles.KeyCell}>F</td>
              <td className={styles.KeyCell}>G</td>
              <td className={styles.KeyCell}>H</td>
              <td className={styles.KeyCell}>J</td>
              <td className={styles.KeyCell}>K</td>
              <td className={styles.KeyCell}>L</td>
              <td id={styles.SecondMargin} className={styles.KeyCell}><span className={styles.Size}>⌦</span></td>
                
          </tr>

          <tr id={styles.c} className={styles.KeySpaceAround}>

              <td className={styles.KeyCell}>Z</td>
              <td className={styles.KeyCell}>X</td>
              <td className={styles.KeyCell}>C</td>
              <td className={styles.KeyCell}>V</td>
              <td className={styles.KeyCell}>B</td>
              <td className={styles.KeyCell}>N</td>
              <td className={styles.KeyCell}>M</td>
              <td className={styles.ThirdMargin}>ENTER</td>
              
          </tr>
                  
      </tfoot>

      </table>

    </footer>

    </>
  )
}

export default Footer