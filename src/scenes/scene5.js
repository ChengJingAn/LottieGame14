import React, { useState, useEffect, useRef } from 'react';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'
import {prePathUrl} from "../components/commonfunctions"

let loadCount = 0;
let animationData1, animationData2, animationData3
new loadAnimation('shot06/sh06bluebrush .json').then(result => {
    animationData1 = result;
}, () => { });

new loadAnimation('shot06/sh06orangebrush .json').then(result => {
    animationData2 = result;
}, () => { });

new loadAnimation('shot06/sh06redbrush .json').then(result => {
    animationData3 = result;
}, () => { });

export default function Scene5({ nextFunc, brushIndex, __setPasteIndex, _geo, _baseGeo }) {


    // const [isNextEnable, setNextEnable] = useState(false)
    const refBaseDiv = useRef();

    useEffect(() => {
        loadCount = 0;
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 6000);
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

    const showSourceList = [
        animationData1, animationData2, animationData3
    ];

    const brushList = [0, 1, 2];

    function returnOption(index) {

        return {
            loop: brushList.includes(index) ? false : true,
            autoplay: brushList.includes(index) ? false : true,
            animationData: showSourceList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    function setPasteFunc(index) {
        __setPasteIndex(index);
        setTimeout(() => {
            nextFunc();    
        }, 200);
        
    }

    return (
        <div ref={refBaseDiv}
            className='hide'
        >
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.7 + "px",
                    right: (_geo.width * 0.36 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.24) + "px"
                }}
            >
                <Lottie autoplay loop options={returnOption(brushList[brushIndex])}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                className="commonButton"
                style={{
                    position: "fixed", width: _geo.width * 0.16 + "px",
                    right: "6%"
                    , top: (_geo.height * 0.22 + _geo.top) + "px", cursor: "pointer",

                }}

                onClick={() => { setPasteFunc(0) }}
            >
                <img draggable={false} width={"100%"} className='brush-scaleBtn'
                    onLoad={loadedImage}
                    src={prePathUrl() + "images/icons/sb_14_paste_icon_3.svg"}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.16 + "px",
                    right: "6%"
                    , top: (_geo.height * 0.45 + _geo.top) + "px", cursor: "pointer",

                }}

                className="commonButton"
                onClick={() => { setPasteFunc(2) }}
            >
                <img draggable={false} width={"100%"} className='brush-scaleBtn'
                    onLoad={loadedImage}
                    src={prePathUrl() + "images/icons/sb_14_paste_icon_2.svg"}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.16 + "px",
                right: "6%"
                , top: (_geo.height * 0.68 + _geo.top) + "px", cursor: "pointer",

            }}
                className="commonButton"
                onClick={() => { setPasteFunc(1) }}
            >
                <img draggable={false} width={"100%"} className='brush-scaleBtn'
                    onLoad={loadedImage}
                    src={prePathUrl() + "images/icons/sb_14_paste_icon_1.svg"}
                />
            </div>

        </div>
    );
}
