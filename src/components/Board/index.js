const { useRef, useEffect } = require("react")
import { useDispatch, useSelector } from 'react-redux'

const Board = () =>{
    const activeMenuItem = useSelector((state)=>state.Menu.activeMenuItem)
    const {color,size} = useSelector((state) => state.toolbox[activeMenuItem])
 
    const canvasRef = useRef(null)
    useEffect(()=>{
     if(!canvasRef.current) return
     const canvas = canvasRef.current;
     const context = canvas.getContext('2d')

     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
    },[])
    return (
        <canvas ref={canvasRef}></canvas>
    )
}

export default Board;