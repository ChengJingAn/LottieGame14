import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import "../stylesheets/styles.css";
import {prePathUrl} from "../components/commonfunctions"
const combList = ['comb1.svg', 'comb2.svg', 'comb3.svg'];

let bodyTimer

export default function Scene39({ nextFunc, _audioList, combIndex, _geo , setVolume}) {

    useEffect(() => {
        setVolume(3)

        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/brush_hair.mp3'
        _audioList.bodyAudio.src = prePathUrl() + 'sounds/dragsounds/dragcomb.mp3';

        _audioList.effectAudio.loop = 10;
        bodyTimer = setTimeout(() => {
            _audioList.bodyAudio.play().catch(e=>{});
        }, 2000);

        return () => {
            setVolume(1)
            _audioList.effectAudio.pause();
            _audioList.bodyAudio.pause();

            _audioList.effectAudio.currentTime = 0

            clearTimeout(bodyTimer)

        }
    })

    return (
        <div>
            <div className="aniObject">
                <Draggable
                    onStart={() => { _audioList.effectAudio.play().catch(e=>{}); _audioList.bodyAudio.pause(); clearTimeout(bodyTimer) }}
                    onStop={() => { nextFunc() }} >

                    <div
                        style={{
                            cursor: "grab",
                            position: "fixed", width: _geo.width * 0.065 + "px", height: _geo.width * (combIndex < 2 ? 0.03 : 0.025) + "px",
                            left: _geo.left + 0.4 * _geo.width + "px",
                            top: _geo.top + _geo.height * 0.3 + "px",
                        }}
                    >
                        <div style={{
                            height: "100%", textAlign: "center", margin: "auto",
                            cursor: "",
                            transform: " rotateZ(25deg)",

                            backgroundImage: "url(" + prePathUrl() + "images/svg/" + combList[combIndex] + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: "100%"
                        }}
                        >
                        </div>
                    </div>
                </Draggable>
            </div>
        </div>
    );
}
