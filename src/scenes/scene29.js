import React, { useEffect, useRef } from 'react';
import Lottie from "react-lottie";
import loadAnimation from '../utils/loadanimation'
import { prePathUrl } from "../components/commonfunctions"

let animationData, animationData1, animationData2, animationData3, animationData4, animationData5

new loadAnimation('shot29/sh29lowerhand.json').then(result => {
    animationData = result;
}, () => { });
new loadAnimation('shot29/sh29lowerhandFoam.json').then(result => {
    animationData1 = result;
}, () => { });

new loadAnimation('shot29/sh29upperhand.json').then(result => {
    animationData2 = result;
}, () => { });

new loadAnimation('shot29/sh29upperhandFoam.json').then(result => {
    animationData3 = result;
}, () => { });

new loadAnimation('shot29/sh29water01.json').then(result => {
    animationData4 = result;
}, () => { });

new loadAnimation('shot29/sh29water02.json').then(result => {
    animationData5 = result;
}, () => { });

import "../stylesheets/styles.css";

export default function scene29({ nextFunc, _baseGeo, _audioList }) {

    const baseRef = useRef();
    const baseRef1 = useRef();

    useEffect(() => {
        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/water_tap.mp3'
        _audioList.effectAudio.loop = 100;

        const timer1 = setTimeout(() => {
            _audioList.effectAudio.play().catch(e => { });
        }, 100);

        const timeInterval = setInterval(() => {
            if (baseRef.current != null)
                baseRef.current.style.opacity -= 0.05
            if (baseRef1.current != null)
                baseRef1.current.style.opacity -= 0.05
        }, 100)

        const timer =
            setTimeout(() => {
                nextFunc();
            }, 5000);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer1)
            clearTimeout(timeInterval)

            _audioList.effectAudio.pause();
            _audioList.effectAudio.currentTime = 0;
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
        <div >
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

            <div ref={baseRef}
                style={{
                    position: "fixed", width: _baseGeo.width * 0.23 + "px",
                    left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.height * (-0.006)) + "px",
                    opacity: 1
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
            <div ref={baseRef1}
                style={{
                    position: "fixed", width: _baseGeo.width * 0.23 + "px",
                    left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.height * -0.006) + "px",
                    opacity: 1
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
        </div >
    );
}
