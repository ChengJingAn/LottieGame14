import React, { useEffect, useRef, useState } from 'react';
import {prePathUrl} from "../components/commonfunctions"

import "../stylesheets/styles.css";
const cwidthList = [0.1238, 0.1238, 0.111];
const cRightList = [0.723, 0.72, 0.724];
const cHeightList = [0.16, 0.174, 0.14];

let loadCount = 0;

export default function Scene34({ nextFunc, __setClothFunc, _geo }) {

    const refBaseDiv = useRef();

    useEffect(() => {
        loadCount = 0
        let timer = setTimeout(() => {
            refBaseDiv.current.className = 'show'
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, [])

    function loadedImage() {
        loadCount++;
        if (loadCount == 7) {
            refBaseDiv.current.className = 'show'
        }
    }

    function setClothFunc(index) {
        __setClothFunc(index);

        setTimeout(() => {
            nextFunc();    
        }, 200);
        
    }

    return (
        <div ref={refBaseDiv} className='hide'>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.20 + "px",
                    right: _geo.left + 0.70 * _geo.width + "px",
                    bottom: _geo.top + _geo.height * 0.07 + "px"
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_ci_doll_1.svg"}
                    onLoad={loadedImage}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: (_geo.width * cwidthList[0]) + "px",
                    right: (_geo.left + cRightList[0] * _geo.width) + "px",
                    bottom: (_geo.top + _geo.height * cHeightList[0]) + "px"
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/cloth1.svg"}
                    onLoad={loadedImage}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.1016 + "px",
                    right: _geo.left + 0.71 * _geo.width + "px",
                    bottom: _geo.top + _geo.height * 0.06 + "px"
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/shoe1.svg"}
                    onLoad={loadedImage}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.50 + "px",
                    right: _geo.left + 0.05 * _geo.width + "px",
                    bottom: _geo.top + _geo.height * 0.122 + "px"
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/wardrabe.svg"}
                    onLoad={loadedImage}
                />
            </div>
            <div >
                <div
                    className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.11 + "px",
                        right: _geo.left + 0.353 * _geo.width + "px",
                        top: _geo.top + _geo.height * 0.44 + "px",
                        cursor: "pointer",
                    }}
                    onClick={() => { setClothFunc(0) }}
                >
                    <img draggable={false} width={"100%"} className='cloth-scaleBtn'
                        src={prePathUrl() + "images/icons/sb_14_pi_cloth_1.svg"}
                        onLoad={loadedImage}
                    />
                </div>
                <div
                    className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.105 + "px",
                        right: _geo.left + 0.232 * _geo.width + "px",
                        top: _geo.top + _geo.height * 0.44 + "px",
                        cursor: "pointer",
                    }}
                    onClick={() => { setClothFunc(1) }}
                >
                    <img draggable={false} width={"100%"} className='cloth-scaleBtn'
                        src={prePathUrl() + "images/icons/sb_14_pi_cloth_2.svg"}
                        onLoad={loadedImage}
                    />
                </div>
                <div

                    className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.105 + "px",
                        right: _geo.left + 0.111 * _geo.width + "px",
                        top: _geo.top + _geo.height * 0.44 + "px",
                        cursor: "pointer",

                    }}
                    onClick={() => { setClothFunc(2) }}
                >
                    <img draggable={false} width={"100%"} className='cloth-scaleBtn'
                        src={prePathUrl() + "images/icons/sb_14_pi_cloth_3.svg"}
                        onLoad={loadedImage}
                    />
                </div>
            </div>
        </div>
    );
}
