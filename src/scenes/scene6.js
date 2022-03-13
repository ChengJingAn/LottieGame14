import React, { useEffect, useRef } from 'react';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'

let animationData1, animationData2, animationData3, animationData4, animationData5, animationData6, animationData7,
    animationData8, animationData9, animationData10, animationData11, animationData12;

new loadAnimation('shot06/sh06Bluebrush .json').then(result => {
    animationData1 = result;
}, () => { });
new loadAnimation('shot06/sh06BluepastAnim.json').then(result => {
    animationData2 = result;
}, () => { });
new loadAnimation('shot06/sh06blukbrushbtton .json').then(result => {
    animationData3 = result;
}, () => { });
new loadAnimation('shot06/sh06orangebrush .json').then(result => {
    animationData4 = result;
}, () => { });
new loadAnimation('shot06/sh06redpastanim.json').then(result => {
    animationData5 = result;
}, () => { });
new loadAnimation('shot06/sh06Orangebrushbtton.json').then(result => {
    animationData6 = result;
}, () => { });
new loadAnimation('shot06/sh06redbrush .json').then(result => {
    animationData7 = result;
}, () => { });
new loadAnimation('shot06/sh06pinkpastanim.json').then(result => {
    animationData8 = result;
}, () => { });
new loadAnimation('shot06/sh06pinkbrushbtton .json').then(result => {
    animationData9 = result;
}, () => { });
new loadAnimation('shot06/sh06blukbrushbttonpress.json').then(result => {
    animationData10 = result;
}, () => { });
new loadAnimation('shot06/sh06orangebrushbttonpress.json').then(result => {
    animationData11 = result;
}, () => { });
new loadAnimation('shot06/sh06pinkbrushbttonpress.json').then(result => {
    animationData12 = result;
}, () => { });


export default function scene6({ nextFunc, brushIndex, pasteIndex, _geo }) {

    const showSourceList = [
        animationData1, animationData2, animationData3, animationData4, animationData5, animationData6, animationData7
        , animationData8, animationData9, animationData10, animationData11, animationData12
    ];

    

    useEffect(() => {
        const timer = setTimeout(() => {
            nextFunc();
        }, 1200);

        

        return () => {
            clearTimeout(timer);
            
        }

    }, [])

    const brushList = [0, 3, 6];
    const pasteList = [1, 4, 7];

    function returnOption(index) {

        return {
            loop: false,
            autoplay: true,
            animationData: showSourceList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            },

        };
    }

    const topMarginList = [0.33, 0.358, 0.33];
    const rightMarginList = [0.46, 0.45, 0.475];
    return (
        <div  >

            <div
                style={{
                    position: "fixed", width: _geo.width * 0.7 + "px",
                    right: (_geo.width * 0.36 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.24) + "px"
                }}>
                <Lottie autoplay loop options={returnOption(brushList[brushIndex])}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                
                style={{
                    position: "fixed", width: _geo.width * 0.1 + "px",
                    right: (_geo.width * rightMarginList[brushIndex] + _geo.left) + "px"
                    , bottom: (_geo.height * topMarginList[brushIndex]) + "px"
                    , opacity: 1
                }}
            >
                <Lottie autoplay loop options={returnOption(pasteList[pasteIndex])}
                    mouseDown={false}
                    speed={0.8}
                    isClickToPauseDisabled={true}
                />
            </div>

        </div >
    );
}
