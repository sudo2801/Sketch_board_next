import { COLORS, MENU_ITEMS } from "@/constants"
import styles from "./index.module.css"
import { useDispatch, useSelector } from "react-redux"
import {changeBrushSize,changeColor  } from '@/slice/toolboxSlice'

const Toolbox = () =>{
    const dispach = useDispatch();
    const activeMenuItem = useSelector((state)=>state.Menu.activeMenuItem)
    const showStrokToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
    const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER
    
    const updateBrushSize = (event) =>{
        dispach(changeBrushSize({item:activeMenuItem,size:event.target.value}))
    }
    const updateColor = (color) =>{
        dispach(changeColor({item:activeMenuItem,color}))
    }

    return (
        <div className={styles.toolboxContainer}>
            {showStrokToolOption  && <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Stroke Color</h4>
                <div className={styles.itemContainer}>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.BLACK}} onClick={()=>updateColor(COLORS.BLACK)}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.BLUE}} onClick={()=>updateColor(COLORS.BLACK)}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.GREEN}} onClick={()=>updateColor(COLORS.GREEN)}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.ORANGE}} onClick={()=>updateColor(COLORS.ORANGE)}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.RED}} onClick={()=>updateColor(COLORS.RED)}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.WHITE}} onClick={()=>updateColor(COLORS.WHITE)}/>
                    <div  className={styles.colorBox} style={{backgroundColor: COLORS.YELLOW}} onClick={()=>updateColor(COLORS.YELLOW)}/>

                </div>
            </div>}

           {showBrushToolOption && <div >
                <h4>Brush Size</h4>
                <div>
                    <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
                </div>
            </div>}

        </div>
    )
}
export default Toolbox;