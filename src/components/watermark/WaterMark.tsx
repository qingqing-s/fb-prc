"use client"

import { useEffect } from "react";

const WaterMark = ()=>{
    function createWaterMark(width:number, height:number, ww:number, wh:number, text:string){
        const num = (width * height)/(ww * wh);
        const waterMarks = [];
        for(let i = 0; i < num; i++){
            const waterMark = document.createElement('div');
            waterMark.innerText = text;
            waterMark.className = 'select-none rotate-15 w-100 h-100 text-primary opacity-25 text-2xl font-medium';
            waterMarks.push(waterMark);
        }
        return waterMarks;
    }

    function appendWaterMark(waterMarks:HTMLElement[]){
        const waterMarkContainer = document.getElementById("water-mark") as HTMLElement;
        if(!waterMarkContainer)return;
        waterMarkContainer.append(...waterMarks);
    }
    useEffect(()=>{
        const {clientWidth, clientHeight} = document.querySelector('body')||document.querySelector('html') as HTMLElement;
        const waterMarkContainer = document.getElementById("water-mark") as HTMLElement;
        if(!waterMarkContainer)return;
        waterMarkContainer.style.width = `${clientWidth} px`;
        waterMarkContainer.style.height = `${clientHeight} px`;
        const waterMarks = createWaterMark(clientWidth, clientHeight, 100, 100, 'ddup');
        appendWaterMark(waterMarks);
    },[])
    return <div id="water-mark" className="fixed top-0 left-0 overflow-hidden flex flex-wrap"></div>
}

export default WaterMark;