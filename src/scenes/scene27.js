import React, { useEffect, useRef, useState } from 'react';
import {prePathUrl} from "../components/commonfunctions"
import "../stylesheets/styles.css";

let loadCount = 0;
export default function Scene27({ nextFunc, _geo }) {

    const refBaseDiv = useRef();

    useEffect(() => {

        let loadCount = 0;

        let timer = setTimeout(() => {
            refBaseDiv.current.className = 'show'
        }, 2000);
        return () => {
            clearTimeout(timer)
        }
    }, [])


    function setBrushFunc(index) {
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

    // const [isNextEnable, setNextEnable] = useState(false)

    return (
        <div
            ref={refBaseDiv}
            className="hide">

            <div
                className='commonButton'
                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    right: (_geo.width * 0.05 + _geo.left) + "px"
                    , top: (_geo.height * 0.16 + _geo.top) + "px",
                    cursor: "pointer",

                }}
                onClick={() => { setBrushFunc(0) }}
            >
                <img draggable={false} width={"100%"} className='water-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_handwash_icon_3.svg"}
                    onLoad={loadedImage}
                />
            </div>

            <div
                className='commonButton'
                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    right: (_geo.width * 0.05 + _geo.left) + "px"
                    , top: (_geo.height * 0.41 + _geo.top) + "px",
                    cursor: "pointer",
                }}
                onClick={() => { setBrushFunc(1) }}
            >
                <img draggable={false} width={"100%"} className='water-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_handwash_icon_2.svg"}
                    onLoad={loadedImage}
                />
            </div>

            <div
                className='commonButton'
                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    right: (_geo.width * 0.05 + _geo.left) + "px"
                    , top: (_geo.height * 0.66 + _geo.top) + "px",
                    cursor: "pointer",
                }}
                onClick={() => { setBrushFunc(2) }}
            >
                <img draggable={false} width={"100%"} className='water-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_handwash_icon_1.svg"}
                    onLoad={loadedImage}
                />
            </div>
        </div>
    );
}
