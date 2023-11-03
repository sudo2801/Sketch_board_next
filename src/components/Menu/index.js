import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from "classnames"
import { faPencil , faEraser , faRotateLeft ,faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from "./index.module.css"
import { MENU_ITEMS } from '@/constants'
import { menuItemClick,actionItemMenu } from '@/slice/menuSlice'

const Menu = ()  => {
    const {activeMenuItem} = useSelector((state)=>state.Menu)
    const dispach = useDispatch();

    const handleOnClickMenu = (item) =>{
        dispach(menuItemClick(item))
    }
    const handleActionMenu = (action) =>{
        dispach(actionItemMenu(action))
    }

    return (
        <div className={styles.menuContainer}>
            <div  className={cx(styles.iconWrapper,{[styles.active]:activeMenuItem === MENU_ITEMS.PENCIL})} onClick={()=>handleOnClickMenu(MENU_ITEMS.PENCIL)} >
            <FontAwesomeIcon icon={faPencil} className={styles.icon}  />
            </div>
            <div className={cx(styles.iconWrapper,{[styles.active]:activeMenuItem === MENU_ITEMS.ERASER})} onClick={()=>handleOnClickMenu(MENU_ITEMS.ERASER)}>
            <FontAwesomeIcon icon={faEraser}  className={styles.icon}   />
            </div>
            <div className={cx(styles.iconWrapper,{[styles.active]:activeMenuItem === MENU_ITEMS.REDO})} onClick={()=>handleActionMenu(MENU_ITEMS.REDO)}>
            <FontAwesomeIcon icon={faRotateLeft}  className={styles.icon}   />
            </div>
            <div className={cx(styles.iconWrapper,{[styles.active]:activeMenuItem === MENU_ITEMS.UNDO})}  onClick={()=>handleActionMenu(MENU_ITEMS.UNDO)}>
            <FontAwesomeIcon icon={faRotateRight}   className={styles.icon}  />
            </div >
            <div className={cx(styles.iconWrapper,{[styles.active]:activeMenuItem === MENU_ITEMS.DOWNLOAD})} onClick={()=>handleActionMenu(MENU_ITEMS.DOWNLOAD)}>
            <FontAwesomeIcon icon={faFileArrowDown}  className={styles.icon}   />
            </div>
        </div>
    )
}

export default Menu;