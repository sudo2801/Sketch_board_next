const { useRef, useEffect, useLayoutEffect } = require("react");
import { useDispatch, useSelector } from "react-redux";

const Board = () => {
  const activeMenuItem = useSelector((state) => state.Menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.Toolbox[activeMenuItem]);

  const canvasRef = useRef(null);
  const shouldDraw = useRef(false)

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const changeConfig = () => {
      context.strokeStyle = color;
      context.lineWidth = size;
    };

    changeConfig();
  }, [ color, size]);

  //// THIS IS BEFOR BROWSWE PAINT
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x,y) =>{
        context.beginPath()
        context.moveTo(x,y)
    }

    const drawLiine = (x,y) =>{
        context.lineTo(x,y)
        context.stroke()
    }

    const handleMouseDown =(e) =>{
        shouldDraw.current = true
        beginPath(e.clientX,e.clientY)
    }

    const handleMouseMove = (e) => {
        if(!shouldDraw.current) return
        drawLiine(e.clientX,e.clientY);
        
    }
    const handleMouseUp = (e) => {
        shouldDraw.current = false
    }

    canvas.addEventListener('mousedown',handleMouseDown)
    canvas.addEventListener('mousemove',handleMouseMove)
    canvas.addEventListener('mouseup',handleMouseUp)

    return () =>{
    canvas.removeEventListener('mousedown',handleMouseDown)
    canvas.removeEventListener('mousemove',handleMouseMove)
    canvas.removeEventListener('mouseup',handleMouseUp)
    }

  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
