"use client"

import { useEffect } from "react";

const WaterMark = ()=>{
    function createWaterMark(){
        const angle = -20;
        const txt = "DDUP";
        const canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext('2d');
        if(!ctx)return;
        ctx.clearRect(0,0,100,100);
        ctx.fillStyle = "#000";
        ctx.globalAlpha = 0.1;
        ctx.font = "50px";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.translate(50,50);

        ctx.rotate(Math.PI/180 * angle);
        ctx.fillText(txt,0, 0);
        return canvas.toDataURL();

    }
    useEffect(()=>{
        const container = document.getElementById("water-mark") as HTMLElement;
        if(!container)return;
        const waterMark = document.createElement('div');
        waterMark.className = 'w-full h-full';
        waterMark.style.backgroundImage = `url(${createWaterMark()})`;
        container.appendChild(waterMark);
    },[])
    return <div id="water-mark" className="w-full h-full fixed top-0 left-0 overflow-hidden flex flex-wrap"></div>
}

export default WaterMark;