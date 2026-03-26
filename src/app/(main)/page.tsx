"use client"
import { useEffect, useRef } from "react";

export default function Home() {
  const cursorNodes = useRef<HTMLElement[]>([]);
  function handleMouseMove(e:MouseEvent) {
    const currentNode = document.createElement('div');
    currentNode.className = 'cursor1 w-0.5 h-0.5 bg-black rounded-full absolute';
    cursorNodes.current.push(currentNode);
    document.body.appendChild(currentNode);
    currentNode.style.left = `${e.clientX - 2}px`;
    currentNode.style.top = `${e.clientY - 2}px`;
    window.requestAnimationFrame(function(){
      currentNode.style.opacity = '0';
      currentNode.style.transition = 'opacity 0.5s linear';
    })

    setTimeout(()=>{
      currentNode.remove();
      const index = cursorNodes.current.indexOf(currentNode);
      if(index > -1){
        cursorNodes.current.splice(index,1);
      }
    },500)
  }

  useEffect(()=>{
    document.addEventListener('mousemove', handleMouseMove);
    return ()=>{
      document.removeEventListener('mousemove',handleMouseMove);
    }
  },[])

  return (
    <div>
      page
      <div className="relative">
        <div className="absolute top-0 left-0 z-10 select-none">213454323414</div>
      </div>
    </div>
  );
}
