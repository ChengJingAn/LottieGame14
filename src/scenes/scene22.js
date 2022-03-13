import "../stylesheets/styles.css";
import React, { useEffect, useRef, useState } from 'react';
import {prePathUrl} from "../components/commonfunctions"
let loadCount = 0;
export default function scene22({ nextFunc, __setTowelIndex, _geo }) {

    const refBaseDiv = useRef();

    function setTowelType(index) {
        __setTowelIndex(index);
        setTimeout(() => {
            nextFunc();    
        }, 200);
    }

    function loadedImage() {
        loadCount++;
        if (loadCount == 3) {
            refBaseDiv.current.className = 'show'
        }
    }

    useEffect(() => {
        loadCount = 0;
        let timer = setTimeout(() => {
            refBaseDiv.current.className = 'show'
        }, 3000);
        return () => {
            clearTimeout(timer)
        }
    }, [])


    return (
        <div ref={refBaseDiv}
            className='hide'>
            <div
                className='commonButton'
                onClick={() => { setTowelType(1) }}
                style={{
                    position: "fixed", width: _geo.width * 0.1 + "px",
                    right: (_geo.width * 0.15 + _geo.left) + "px"
                    , top: (_geo.height * 0.15 + _geo.top) + "px",
                    cursor: "pointer",
                }}>
                <img draggable={false} width={"100%"} className='towel-scaleBtn'
                    src={prePathUrl() + "images/Icons/SB_14_Towel_Icon_1.svg"}
                    onLoad={loadedImage}
                />
            </div>
            <div

                className='commonButton'
                onClick={() => { setTowelType(0) }}
                style={{
                    position: "fixed", width: _geo.width * 0.1 + "px",
                    right: (_geo.width * 0.06 + _geo.left) + "px"
                    , top: (_geo.height * 0.35 + _geo.top) + "px",
                    cursor: "pointer",
                }}>
                <img draggable={false} className='towel-scaleBtn' width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_towel_icon_2.svg"}
                    onLoad={loadedImage}
                />
            </div>
            <div
                className='commonButton'
                onClick={() => { setTowelType(2) }}
                style={{
                    position: "fixed", width: _geo.width * 0.1 + "px",
                    right: (_geo.width * 0.12 + _geo.left) + "px"
                    , top: (_geo.height * 0.6 + _geo.top) + "px",
                    cursor: "pointer",
                }}>
                <img draggable={false} className='towel-scaleBtn' width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_towel_icon_3.svg"}
                    onLoad={loadedImage}
                />
            </div>
        </div>
    );
}
