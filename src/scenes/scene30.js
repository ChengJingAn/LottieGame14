import React, { useEffect, useRef, useState } from 'react';
import "../stylesheets/styles.css";
import {prePathUrl} from "../components/commonfunctions"
let loadCount = 3;

export default function scene30({ nextFunc, __setTowelIndex, _geo }) {

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
        }, 2000);

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div
            ref={refBaseDiv}
            className="hide">
            <div >
            </div>
            <div
                className='commonButton'
                onClick={() => { setTowelType(0) }}
                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    right: (_geo.width * 0.08 + _geo.left) + "px"
                    , top: (_geo.height * 0.13 + _geo.top) + "px",
                    cursor: "pointer",

                }}>
                <img draggable={false} width={"100%"} className='towel-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_towel_icon_1_copy.svg"}
                    onLoad={loadedImage}
                />
            </div>

            <div
                className='commonButton'
                onClick={() => { setTowelType(1) }}
                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    right: (_geo.width * 0.08 + _geo.left) + "px"
                    , top: (_geo.height * 0.4 + _geo.top) + "px",
                    cursor: "pointer",


                }}>
                <img draggable={false} width={"100%"} className='towel-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_towel_icon_2_copy.svg"}
                    onLoad={loadedImage}
                />
            </div>

            <div
                className='commonButton'
                onClick={() => { setTowelType(2) }}
                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    right: (_geo.width * 0.08 + _geo.left) + "px"
                    , top: (_geo.height * 0.68 + _geo.top) + "px",
                    cursor: "pointer",
                }}>
                <img draggable={false} width={"100%"} className='towel-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_towel_icon_3_copy.svg"}
                    onLoad={loadedImage}
                />
            </div>
        </div>
    );
}
