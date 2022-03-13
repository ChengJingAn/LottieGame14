import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import {prePathUrl} from "../components/commonfunctions"
import "../stylesheets/styles.css";

let loadCount = 0;

export default function Scene38({ nextFunc, __setCombFunc, _geo }) {
    function setCombFunc(index) {
        __setCombFunc(index);

        setTimeout(() => {
            nextFunc();
        }, 200);

    }
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
        if (loadCount == 3) {
            refBaseDiv.current.className = 'show'
        }
    }

    return (
        <div
            ref={refBaseDiv}
            className='hide'
        >
            <div >
                <div className='starBtn1'
                    style={{
                        position: "fixed", width: _geo.width * 0.08 + "px",
                        right: (_geo.width * 0.16 + _geo.left) + "px"
                        , top: (_geo.height * 0.41 + _geo.top) + "px",
                        cursor: "pointer",
                    }}
                    onClick={() => { setCombFunc(1) }}
                >
                    <div className='commonButton'>
                        <img draggable={false} width={"100%"} className='comb-scaleBtn'
                            src={prePathUrl() + "images/icons/sb_14_comb_icon_2.svg"}
                            onLoad={loadedImage}
                        />
                    </div>
                </div>

                <div className='starBtn2'
                    style={{
                        position: "fixed", width: _geo.width * 0.08 + "px",
                        right: (_geo.width * 0.25 + _geo.left) + "px"
                        , top: (_geo.height * 0.4 + _geo.top) + "px",
                        cursor: "pointer",
                    }}
                    onClick={() => { setCombFunc(0) }}
                >
                    <div className='commonButton'></div>
                    <img draggable={false} width={"100%"} className='comb-scaleBtn'
                        src={prePathUrl() + "images/icons/sb_14_comb_icon_1.svg"}
                        onLoad={loadedImage}
                    />
                </div>
            </div>
            <div className='starBtn3'
                style={{
                    position: "fixed", width: _geo.width * 0.085 + "px",
                    right: (_geo.width * 0.16 + _geo.left) + "px"
                    , top: (_geo.height * 0.55 + _geo.top) + "px",
                    cursor: "pointer",
                }}
                onClick={() => { setCombFunc(2) }}
            >
                <div className='commonButton'>
                    <img draggable={false} width={"100%"} className='comb-scaleBtn'
                        src={prePathUrl() + "images/icons/sb_14_comb_icon_3.svg"}
                        onLoad={loadedImage}
                    />
                </div>
            </div>
        </div >
    );
}
