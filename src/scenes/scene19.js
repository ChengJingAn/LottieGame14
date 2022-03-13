import React, { useEffect, useRef } from 'react';
import Lottie from "react-lottie";
import Draggable from 'react-draggable';
import { isMobile } from "react-device-detect";
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'
import {prePathUrl} from "../components/commonfunctions"

let animationData1, animationData2, animationData3, animationData5, animationData6, animationData7, animationData8, animationData9

new loadAnimation('shot19/sh19foam01.json').then(result => {
    animationData1 = result;
}, () => { });

new loadAnimation('shot19/sh19foam01.json').then(result => {
    animationData2 = result;
}, () => { });

new loadAnimation('shot19/sh19foam01.json').then(result => {
    animationData3 = result;
}, () => { });

new loadAnimation('shot19/sh19foam03.json').then(result => {
    animationData5 = result;
}, () => { });

new loadAnimation('shot19/sh19foam04.json').then(result => {
    animationData6 = result;
}, () => { });

new loadAnimation('shot19/sh19foam05.json').then(result => {
    animationData7 = result;
}, () => { });

new loadAnimation('shot19/sh19foam06.json').then(result => {
    animationData8 = result;
}, () => { });

new loadAnimation('shot19/sh19foam07.json').then(result => {
    animationData9 = result;
}, () => { });

let bodyTimer
let isFinished = false;

export default function scene19({ nextFunc, _geo, _audioList, _baseGeo , setVolume }) {

    let plusTimer = () => {
        setTimeout(() => {
            soapOpaPlus();
        }, 100);
    }

    let minusTimer = () => {
        setTimeout(() => {
            soapOpaMinus();
        }, 200);
    }

    useEffect(() => {
        setVolume(3)
        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/soap_effect.mp3'
        _audioList.bodyAudio.src = prePathUrl() + 'sounds/dragsounds/dragsoap.mp3';
        _audioList.subBodyAudio.play().catch(e=>{});

        bodyTimer = setTimeout(() => {
            _audioList.bodyAudio.play().catch(e=>{});
        }, 2000);
        

        return () => {
            clearTimeout(plusTimer);
            clearTimeout(minusTimer);
            clearTimeout(bodyTimer)
            setVolume(1)

            _audioList.subBodyAudio.pause();
            _audioList.effectAudio.pause();
            _audioList.effectAudio.currentTime = 0;

            _audioList.bodyAudio.pause();
            _audioList.subBodyAudio.currentTime = 0;
            isFinished = true;
            
        }
    }, [])

    const myRef1 = useRef();
    const myRef2 = useRef();
    const myRef3 = useRef();
    const myRef4 = useRef();
    const myRef5 = useRef();
    const myRef6 = useRef();
    const myRef7 = useRef();
    const myRef8 = useRef();
    const myRef9 = useRef();
    const myRef10 = useRef();
    const myRef11 = useRef();


    const myDragThing1 = useRef();

    const myrefList = [myRef1, myRef2, myRef3, myRef4, myRef5, myRef6, myRef7, myRef8, myRef9, myRef10, myRef11];
    const leftList = [0.21, 0.22, 0.37, 0.24, 0.32, 0.37, 0.21, 0.29, 0.32, 0.25, 0.25];
    const topList = [0.2, 0.4, 0.45, 0.43, 0.4, 0.38, 0.35, 0.31, 0.22, 0.24, 0.2];
    const widthList = [0.15, 0.15, 0.10, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15];

    var donelist = [];

    var opacityList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    function onMove(event) {
        let x = event.x;
        let y = event.y;


        let width = _geo.width;
        let height = _baseGeo.height;

        if (isMobile) {
            x = event.touches['0'].clientX
            y = event.touches['0'].clientY
            
        }

        for (let i = 0; i < myrefList.length; i++) {
            if (width * leftList[i] + _geo.left < x && x < width * (leftList[i] + widthList[i]) + _geo.left &&
                height * topList[i]  < y && y < height * (topList[i] + widthList[i]) + _geo.top) {
                myrefList[i].current.style.opacity = opacityList[i] + 0.3;
                opacityList[i] = opacityList[i] + 0.2;

                if (!donelist.includes(i) && opacityList[i] > 0.6)
                    donelist.push(i);

            }
        }
    }

    const showSourceList = [
        animationData1, animationData2, animationData3, animationData5, animationData6, animationData7, animationData8,
        animationData9
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

    var isAnimated = false;
    var currentOpacity = 0;
    function soapOpaPlus() {
        if (isAnimated && !isFinished) {
            if (currentOpacity < 0.6) {
                currentOpacity += 0.07;
                myDragThing1.current.style.opacity = currentOpacity;
                plusTimer();
            }
        }
    }

    function soapOpaMinus() {
        
        if (!isAnimated && !isFinished) {
            if (currentOpacity > 0) {
                currentOpacity -= 0.07;
                myDragThing1.current.style.opacity = currentOpacity;
                minusTimer();
            }
        }
    }

    function startAni() {
        _audioList.effectAudio.play().catch(e=>{});
        _audioList.effectAudio.loop = 1000;
        isAnimated = true;
        
        _audioList.bodyAudio.pause();
        clearTimeout(bodyTimer)

        plusTimer();
    }

    function stopAni(e) {
        isAnimated = false;
        _audioList.effectAudio.pause();
        if (donelist.length > 5) {

            setTimeout(() => {
                nextFunc();
                isFinished = true;
                _audioList.effectAudio.pause();
            }, 100);
        }
        else {
            minusTimer();
        }
    }

    return (
        <div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.21 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.3) + "px", opacity: "0"
                }}
                ref={myRef1}
            >
                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.22 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.4) + "px", opacity: "0"
                }}

                ref={myRef2}
            >
                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.10 + "px",
                    left: (_geo.width * 0.37 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.45) + "px", opacity: "0"
                }}


                ref={myRef3}
            >
                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div


                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.24 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.23) + "px", opacity: "0"
                }}

                ref={myRef4}
            >
                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.32 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.2) + "px", opacity: "0"
                }}
                ref={myRef5}
            >
                <Lottie autoplay loop options={returnOption(4)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div


                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.37 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.18) + "px", opacity: "0"
                }}

                ref={myRef6}
            >
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.21 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.35) + "px", opacity: "0"
                }}

                ref={myRef7}
            >
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.29 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.35) + "px", opacity: "0"
                }}

                ref={myRef8}
            >
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.32 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.3) + "px", opacity: "0"
                }}
                ref={myRef9}
            >
                <Lottie autoplay loop options={returnOption(4)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.25 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.23) + "px", opacity: "0"
                }}
                ref={myRef10}
            >
                <Lottie autoplay loop options={returnOption(6)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    left: (_geo.width * 0.25 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.32) + "px", opacity: "0"
                }}
                ref={myRef11}
            >
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div className="aniObject">
                <Draggable onDrag={(e) => {
                    onMove(e);
                }}
                    onMouseDown={startAni} onStop={stopAni}
                    
                >

                    <div
                        style={{
                            position: "fixed", width: _geo.width * 0.06 + "px", height: _geo.width * 0.058, cursor: "grab",
                            left: (_geo.width * 0.6 + _geo.left) + "px"
                            , top: (_geo.height * 0.4 + _geo.top) + "px"
                        }}
                    >


                        <div style={{
                            height: "100%", textAlign: "center", margin: "auto",

                            backgroundImage: "url(" + prePathUrl() + "images/svg/soap.svg" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: "100%"
                        }}
                        >
                            <div
                                ref={myDragThing1}

                                style={{
                                    position: "fixed", width: _geo.width * 0.06 + "px",
                                    left: 0 + "px"
                                    , top: _geo.width * (-0.013) + "px", opacity: "0"
                                }}

                            >
                                <Lottie autoplay loop options={returnOption(3)
                                }
                                    mouseDown={false}
                                    isClickToPauseDisabled={true}
                                />
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>



        </div>
    );
}
