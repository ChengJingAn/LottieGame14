import React, { useEffect, useRef, useState } from 'react';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'

let animationData1
new loadAnimation('shot07/starAnim.json').then(result => {
    animationData1 = result;
}, () => { });

export default function scene10({ nextFunc, _geo, _audioList }) {

    const sparkRef = useRef();
    useEffect(() => {
        sparkRef.current.className = 'hide'
        const timer = setTimeout(() => {
            nextFunc();
        }, 11000);

        _audioList.clapAudio.play().catch(e => { });
        // let minVolume = 0.4;
        // setTimeout(() => {
        //     let interval = setInterval(() => {
        //         minVolume -= 0.03    
        //     }, 30);
            
        //     _audioList.clapAudio.play().catch(e => { });
        // }, 2000);
        sparkRef.current.className = 'aniObject'

        return () => {
            clearTimeout(timer);

            _audioList.clapAudio.pause();
            _audioList.clapAudio.currentTime = 0;
        }
    }, [])

    const showSourceList = [
        animationData1
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
        <div ref={sparkRef}>

            <div

                style={{
                    position: "fixed", width: _geo.width * 0.20 + "px",
                    left: (_geo.width * 0.42 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.37) + "px"
                }}>
                <Lottie autoplay loop={true} options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.20 + "px",
                    left: (_geo.width * 0.33 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.36) + "px"
                }}>

                <Lottie autoplay loop={true} options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.20 + "px",
                    left: (_geo.width * 0.40 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.28) + "px"
                }}>


                <Lottie autoplay loop={true} options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

        </div>
    );
}
