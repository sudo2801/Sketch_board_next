import { COLORS } from "@/constants"
import styles from "./index.module.css"

const Toolbox = () =>{
    const updateBrushSize = () =>{}
    return (
        <div className={styles.toolboxContainer}>
            <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Stroke Color</h4>
                <div className={styles.itemContainer}>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.BLACK}}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.BLUE}}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.GREEN}}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.ORANGE}}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.RED}}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.WHITE}}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.YELLOW}}/>

                </div>
            </div>

            <div >
                <h4>Brush Size</h4>
                <div>
                    <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
                </div>
            </div>

        </div>
    )
}
export default Toolbox;