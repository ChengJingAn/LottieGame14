import React, { useEffect, useRef, useState } from 'react';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'
import {prePathUrl} from "../components/commonfunctions"

let animationData1
new loadAnimation('shot18/sh18watr.json').then(result => {
    animationData1 = result;
}, () => { });


export default function scene18({ nextFunc, _geo, _audioList, _baseGeo }) {

    useEffect(() => {
        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/shower.mp3'
        _audioList.effectAudio.volume = 0.25
        let timer = setTimeout(() => {
            _audioList.effectAudio.play();
            _audioList.subBodyAudio.play();
        }, 100);

        return () => {

            _audioList.effectAudio.pause();
            _audioList.subBodyAudio.pause();

            _audioList.subBodyAudio.currentTime = 0;
            _audioList.effectAudio.currentTime = 0;
            _audioList.effectAudio.volume = 1
            clearTimeout(timer)
        }
    }, []);

    function returnOption(index) {
        return {
            loop: true,
            autoplay: true,
            animationData: animationData1,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    return (
        <div  >

            <div
                style={{
                    position: "fixed", width: _geo.width * 0.35 + "px",
                    height: _geo.width * 0.35 + "px",
                    left: (_geo.width * 0.16 + _geo.left) + "px"
                    , bottom: _baseGeo.height * 0.35 + "px"
                }}
            >
                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
                <div style={{ width: '100%', position: 'absolute', left: '0px', bottom: '93%' }}>
                    <Lottie
                        autoplay loop options={returnOption(2)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
            </div>
            <div className="aniObject">
                <div className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.08 + "px",
                        left: (_geo.width * 0.6 + _geo.left) + "px"
                        , top: (_geo.height * 0.4 + _geo.top) + "px", cursor: "pointer",
                    }}
                    onClick={() => {
                        setTimeout(() => {
                            nextFunc();
                        }, 200);
                    }}
                >
                    <img draggable={false} width={"100%"} className='brush1-scaleBtn'
                        src={prePathUrl() + "images/icons/sb_14_soap_icon.svg"}
                    />
                </div>
            </div>
        </div>
    );
}
