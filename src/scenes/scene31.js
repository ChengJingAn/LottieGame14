import React, { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import "../stylesheets/styles.css";
import { isMobile } from "react-device-detect";
import {prePathUrl} from "../components/commonfunctions"
let bodyTimer

export default function scene31({ nextFunc, towelIndex, _geo, _baseGeo, _audioList , setVolume }) {


    const myRef1 = useRef();

    const myrefList = [myRef1];

    const topMarginList = [44, 62, 44, 60];
    const leftMarginList = [30.1, 30.1, 49.7, 49.7];
    const heightList = [0.5, 0.2, 0.1, 0.2];
    var donelist = [];


    useEffect(() => {
        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/drying.mp3'
        _audioList.bodyAudio.src = prePathUrl() + 'sounds/dragsounds/dragnakin.mp3';

        setVolume(3)

        _audioList.effectAudio.loop = 100;

        bodyTimer = setTimeout(() => {
            _audioList.bodyAudio.play().catch(e=>{});
        }, 2000);

        return () => {
            clearTimeout(bodyTimer)

            setVolume(1)

            _audioList.bodyAudio.pause();
            _audioList.effectAudio.pause();

            _audioList.effectAudio.currentTime = 0;
        }
    }, [])

    function onMove(event) {
        let x = event.x;
        let y = event.y;

        let width = _baseGeo.width;
        let height = _baseGeo.height;

        if (isMobile) {
            x = event.touches['0'].clientX
            y = event.touches['0'].clientY
        }

        if (donelist.length < 1) {
            for (let i = 0; i < 1; i++) {
                if (_baseGeo.left + width * leftMarginList[i] / 100 < x && x < width * (leftMarginList[i] / 100 + 0.5) + _baseGeo.left &&
                    _baseGeo.bottom + height * topMarginList[i] / 100 < y && y < _baseGeo.bottom + height * (topMarginList[i] / 100 + heightList[i])) {
                    myrefList[i].current.style.opacity = myrefList[i].current.style.opacity - 0.02;
                    if (!donelist.includes(i) && myrefList[i].current.style.opacity < 0.1) {
                        donelist.push(i);
                        // break;
                    }
                }
            }
        }
    }
    const towelList = ["htblue.svg", "htred.svg", "htpink.svg"];

    return (
        <div>

            <div className='aniObjectDelay3'
                style={{
                    position: "fixed", width: _baseGeo.width * 0.38 + "px"
                    , left: _baseGeo.left + _baseGeo.width * 0.31 + "px",
                    bottom: _baseGeo.height * 0.05 + "px",
                    opacity: 1,
                    overflow: 'hidden'
                }}
                ref={myRef1}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/dollhandwater.svg"}
                />
            </div>


            <div className="aniObject">

                <Draggable

                    onDrag={(e) => {
                        onMove(e);
                    }}
                    onStart={
                        () => {
                            _audioList.effectAudio.play().catch(e=>{});
                            _audioList.bodyAudio.pause();
                            clearTimeout(bodyTimer)

                        }
                    }
                    onStop={() => {
                        _audioList.effectAudio.pause();
                        if (donelist.length == 1) {
                            setTimeout(() => {
                                nextFunc();
                            }, 100);

                        }
                    }
                    }
                >

                    <div

                        style={{
                            position: "fixed", width: _baseGeo.width * 0.12 + "px", height: _baseGeo.width * 0.12 + "px",
                            left: _baseGeo.left + 0.15 * _baseGeo.width + "px",
                            bottom: _baseGeo.height * 0.45 + "px",
                            cursor: "grab"
                        }}
                    >
                        <div style={{
                            width: "100%", textAlign: "center", margin: "auto",

                            backgroundImage: "url(" + prePathUrl() + "images/img/" + towelList[towelIndex] + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: "100%"
                        }}
                        >
                        </div>
                    </div>
                </Draggable>
            </div>
        </div >
    );
}
