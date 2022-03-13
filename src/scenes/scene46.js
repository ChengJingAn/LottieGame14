import React, { useEffect, useRef } from 'react';
import Lottie from "react-lottie";
import loadAnimation from "../utils/loadanimation"
import {prePathUrl} from "../components/commonfunctions"
let animationData, animationData1, animationData2, animationData3, animationData4, animationData5

new loadAnimation('shot29/sh29lowerhand.json').then(result => {
    animationData = result;
}, () => { });
new loadAnimation('shot29/sh29lowerhandfoam.json').then(result => {
    animationData1 = result;
}, () => { });
new loadAnimation('shot29/sh29upperhand.json').then(result => {
    animationData2 = result;
}, () => { });
new loadAnimation('shot29/sh29upperhandfoam.json').then(result => {
    animationData3 = result;
}, () => { });
new loadAnimation('shot29/sh29water01.json').then(result => {
    animationData4 = result;
}, () => { });
new loadAnimation('shot29/sh29water02.json').then(result => {
    animationData5 = result;
}, () => { });

import "../stylesheets/styles.css";

export default function Scene46({ nextFunc, _geo, _baseGeo }) {
    const baseRef1 = useRef();
    const baseRef2 = useRef();

    useEffect(() => {
        const timer =
            setTimeout(() => {
                nextFunc();
            }, 6500);

        const timeInterval = setInterval(() => {
            baseRef1.current.style.opacity -= 0.05
            baseRef2.current.style.opacity -= 0.05
        }, 100)


        return () => {
            clearInterval(timeInterval)
            clearTimeout(timer);
        }
    }, [])

    const showSourceList = [
        animationData, animationData1, animationData2, animationData3, animationData4, animationData5
    ];


    function returnOption(index) {
        return {
            loop: true,
            autoplay: true,
            animationData: showSourceList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }


    return (
        <div className='aniObject'>

            <div
                style={{
                    position: "fixed", width: _baseGeo.width * 0.23 + "px",
                    left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.height * (-0.006)) + "px",
                }}
            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div ref={baseRef1}
                style={{
                    position: "fixed", width: _baseGeo.width * 0.23 + "px",
                    left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.height * (-0.006)) + "px",
                    opacity :1
                }}
            >
                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _baseGeo.width * 0.23 + "px",
                    left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.height * (-0.006)) + "px",
                }}
            >
                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div ref={baseRef2}
                style={{
                    position: "fixed", width: _baseGeo.width * 0.23 + "px",
                    left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.height * -0.006) + "px",
                    opacity : 1
                }}
            >
                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _baseGeo.width * 0.11 + "px",
                    left: (_baseGeo.width * 0.44 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.height * 0.228) + "px",
                }}
            >
                <Lottie autoplay loop options={returnOption(4)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _baseGeo.width * 0.05 + "px",
                    left: (_baseGeo.width * 0.47 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.height * 0.37) + "px",
                }}
            >
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div className='subText'

                style={{
                    position: "fixed",
                    width: _baseGeo.width * 0.35 + "px",
                    right: _baseGeo.left + _baseGeo.width * 0.325 + "px",
                    bottom: '5%',
                    cursor: "pointer"
                }}

            >
                <img draggable={false} src={prePathUrl() + 'images/icons/sb_14_ti_wash_your_hands.svg'}
                    width={'100%'} />
            </div>
        </div>
    );
}
