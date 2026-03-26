"use client"

import { useEffect } from "react";

const WaterMark = ()=>{
    function createWaterMark(){
        const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px">
            <text x="0px" y="30px" dy="16px"
            text-anchor="start"
            stroke="#000"
            stroke-opacity="0.1"
            fill="#000"
            opacity="0.1"
            font-size="20px"
            transform="rotate(-20)"
            >
                DDUP
            </text>
        </svg>`
        return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`;
    }

    function appendWaterMark(){
        const container = document.getElementById("water-mark") as HTMLElement;
        if(!container)return;
        const waterMark = document.createElement('div');
        waterMark.className = 'w-full h-full';
        waterMark.id = 'water-mark-img';
        waterMark.style.backgroundImage = `url(${createWaterMark()})`;
        container.appendChild(waterMark);
    }
    useEffect(()=>{
        appendWaterMark();
    },[])

    useEffect(()=>{
        const targetNode = document.querySelector('body') as HTMLElement;
        const config = {attributes: true, childList: true, subtree:true};
        const callback = function(mutationsList:MutationRecord[]){
            for(const mutaion of mutationsList){
                if(mutaion.type === 'childList'){
                    if(mutaion.removedNodes.length > 0){
                        for(const node of mutaion.removedNodes){
                            console.log('node', node);
                            if(node instanceof HTMLElement){
                                if(node.id === 'water-mark-img'){
                                    appendWaterMark();
                                }
                                if(node.id === 'water-mark'){
                                    const container = document.createElement('div') as HTMLElement;
                                    container.id = 'water-mark';
                                    container.className = 'w-full h-full fixed top-0 left-0 overflow-hidden flex flex-wrap';
                                    document.body.appendChild(container);
                                    appendWaterMark();
                                }
                            }
                        }
                    }
                }
            }
            
        }

        const observer = new MutationObserver(callback);

        observer.observe(targetNode, config);
        
    },[])
    return <div id="water-mark" className="w-full h-full fixed top-0 left-0 overflow-hidden flex flex-wrap pointer-events-none"></div>
}

export default WaterMark;