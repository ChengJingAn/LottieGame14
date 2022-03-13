import React, { useEffect, useRef, useState } from 'react';
import Lottie from "react-lottie";
import Draggable from 'react-draggable';

import {prePathUrl} from "../components/commonfunctions"
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'

let animationData1
new loadAnimation('shot07/sh07foam.json').then(result => {
    animationData1 = result;
}, () => { });

let timer;
export default function scene7({ nextFunc, brushIndex, _geo, _audioList , setVolume }) {


    // const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        setVolume(3)

        _audioList.bodyAudio.src = prePathUrl() + 'sounds/dragsounds/dragbrush.mp3'
        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/brush.mp3'

        timer = setTimeout(() => {
            _audioList.bodyAudio.volume = 1;
            _audioList.bodyAudio.play().catch(e=>{});

        }, 2000);

    

        return () => {
            clearTimeout(timer)
            setVolume(1)
            _audioList.bodyAudio.pause();
            _audioList.effectAudio.pause();
            _audioList.effectAudio.currentTime = 0;
        }
    }, [])


    const showSourceList = [
        animationData1
    ];




    const myRef1 = useRef();
    const myRef2 = useRef();
    const myDragThing = useRef();

    const myrefList = [myRef2];

    var opacityList = [1];
    var donelist = [];

    var currentOpacity = 0;

    const brushList = ['brush_blue.svg', 'brush_orange.svg', 'brush_red.svg']
    const heightList = [0.09, 0.09, 0.09]
    function onMove(event) {


        if (currentOpacity < 1) {
            myRef1.current.style.opacity = currentOpacity + 0.03;
            currentOpacity = currentOpacity + 0.03;
        }

        for (let i = 0; i < opacityList.length; i++) {
            myrefList[i].current.style.opacity = opacityList[i] - 0.03;
            opacityList[i] = opacityList[i] - 0.03;
            if (!donelist.includes(i) && opacityList[i] > 0.1) {
                donelist.push(i);
            }
        }
    }

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

    function stopAni() {
        _audioList.effectAudio.pause();

        if (donelist.length == 1)
            setTimeout(() => {
                nextFunc();
            }, 100);
    }


    return (
        <div className='aniObject'>
            <div className='aniObjectDelay3'

                style={{
                    position: "fixed", width: _geo.width * 0.12 + "px",
                    left: (_geo.width * 0.42 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.52) + "px", opacity: "1"
                }}
                ref={myRef2}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/frog_black.svg"}
                />
            </div>


            <div
                style={{
                    position: "fixed", width: _geo.width * 0.26 + "px",
                    left: (_geo.width * 0.32 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.4) + "px", opacity: "0"
                }}
                ref={myRef1}
            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div className='aniObject'
                style={{
                }}
            >
                <Draggable
                    onDrag={onMove}
                    onStart={() => {
                        _audioList.bodyAudio.pause();
                        clearTimeout(timer)

                        _audioList.effectAudio.play().catch(e=>{});
                        _audioList.effectAudio.currentTime = 1;
                        _audioList.effectAudio.loop = 1000;
                    }} onStop={stopAni}>
                    <div

                        style={{
                            position: "fixed", width: _geo.width * 0.48 + "px", height: _geo.height * heightList[brushIndex] + "px",
                            left: (_geo.width * 0.05 + _geo.left) + "px"
                            , bottom: (_geo.height * 0.45) + "px", opacity: "1",
                            cursor: "grab"
                        }}
                        ref={myDragThing}
                    >
                        <div style={{
                            height: "100%", textAlign: "center", margin: "auto",
                            cursor: "",
                            backgroundImage: "url(" + prePathUrl() + "images/img/" + brushList[brushIndex] + ")",
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
