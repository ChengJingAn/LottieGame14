import React, { useEffect, useRef, useState } from 'react';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import { prePathUrl } from "../components/commonfunctions"
import loadAnimation from '../utils/loadanimation'

let animationData1

new loadAnimation('shot07/sh07foam.json').then(result => {
    animationData1 = result;
}, () => { });

let timer1
export default function scene8({ nextFunc, _geo, _audioList, setVolume }) {


    const showSourceList = [
        animationData1
    ];

    useEffect(() => {
        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/gol.mp3'
        _audioList.bodyAudio.src = prePathUrl() + 'sounds/dragsounds/tapglass.mp3';
        setVolume(3)

        let timer2 = setTimeout(() => {
            _audioList.effectAudio.play().catch(e => { });
        }, 200);
        timer1 = setTimeout(() => {
            _audioList.bodyAudio.play().catch(e => { });
        }, 1500);

        return () => {
            setVolume(1)
            clearTimeout(timer1)
            clearTimeout(timer2)
            _audioList.effectAudio.currentTime = 0;

            _audioList.effectAudio.pause();
            _audioList.bodyAudio.pause();
        }
    }, [])



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
                    position: "fixed", width: _geo.width * 0.26 + "px",
                    left: (_geo.width * 0.32 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.4) + "px", opacity: "1"
                }}
            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div className="commonButton"
                style={{
                    position: "fixed", width: _geo.width * 0.12 + "px",
                    right: (_geo.width * 0.05) + "px"
                    , bottom: (_geo.height * 0.1) + "px",
                    cursor: "pointer"
                }}

                onClick={() => {
                    setTimeout(nextFunc, 200)
                }}
            >
                <img draggable={false} width={"100%"} className='water-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_water_icon.svg"}
                />
            </div>
        </div>
    );
}
