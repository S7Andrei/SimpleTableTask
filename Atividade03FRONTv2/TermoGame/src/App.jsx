import { useState } from 'react'
import styles from'./App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
    
    <table  className={styles.Origin}>
        <tbody className={styles.DirectionOrigin}>
            <tr className={styles.SpaceAround}>
                <td  className={styles.Cell} style={{ backgroundColor: '#3AA394' }}>F</td>
                <td  className={styles.Cell} style={{ backgroundColor: '#312B2D' }}>Ú</td>
                <td  className={styles.Cell} style={{ backgroundColor: '#312B2D' }}>R</td>
                <td  className={styles.Cell} style={{ backgroundColor: '#312B2D' }}>I</td>
                <td  className={styles.Cell} style={{ backgroundColor: '#D3AD69' }}>A</td>
            </tr>
            <tr className={styles.SpaceAround}>
                <td className={styles.Cell} style={{ background: 'transparent', boxShadow: 'inset 0 0 0 7px #564A4E'}}>S</td>
                <td className={styles.Cell} style={{ background: 'transparent', boxShadow: 'inset 0 0 0 7px #564A4E'}}>S</td>
                <td className={styles.Cell} style={{ background: 'transparent', boxShadow: 'inset 0 0 0 7px #564A4E'}}>S</td>
                <td className={styles.Cell} style={{ background: 'transparent', boxShadow: 'inset 0 0 0 7px #564A4E'}}>S</td>
                <td className={styles.Cell} style={{ background: 'transparent', boxShadow: 'inset 0 0 0 7px #564A4E'}}>S</td>
            </tr>
            <tr className={styles.SpaceAround}>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
            </tr>
            <tr className={styles.SpaceAround}>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
            </tr>
            <tr className={styles.SpaceAround}>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
            </tr>
            <tr className={styles.SpaceAround}>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
                <td className={styles.Cell}></td>
            </tr>
        </tbody>
    </table>

</body> 
    </>
  )
}

export default App
