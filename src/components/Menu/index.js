import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil , faEraser , faRotateLeft ,faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from "./index.module.css"
import { MENU_ITEMS } from '@/constants'
import { menuItemClick,actionItemMenu } from '@/slice/menuSlice'
const Menu = ()  => {
    const dispach = useDispatch()

    const handleOnClickMenu = (item) =>{
        dispach(menuItemClick(item))
    }
    return (
        <div className={styles.menuContainer}>
            <div  className={styles.iconWrapper} onClick={()=>handleOnClickMenu(MENU_ITEMS.PENCIL)} >
            <FontAwesomeIcon icon={faPencil} className={styles.icon}  />
            </div>
            <div className={styles.iconWrapper} onClick={()=>handleOnClickMenu(MENU_ITEMS.ERASER)}>
            <FontAwesomeIcon icon={faEraser}  className={styles.icon}   />
            </div>
            <div className={styles.iconWrapper} onClick={()=>handleOnClickMenu(MENU_ITEMS.REDO)}>
            <FontAwesomeIcon icon={faRotateLeft}  className={styles.icon}   />
            </div>
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faRotateRight}   className={styles.icon}  />
            </div >
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faFileArrowDown}  className={styles.icon}   />
            </div>
        </div>
    )
}

export default Menu;