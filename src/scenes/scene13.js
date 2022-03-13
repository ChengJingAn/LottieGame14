import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import { isMobile } from "react-device-detect";
import { useEffect } from 'react';
import loadAnimation from "../utils/loadanimation"
import {prePathUrl} from "../components/commonfunctions"

let loadCount = 0;
let timer1, timer2

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




let bubleOpacityList = [0, 0]
export default function scene13({ nextFunc, _geo, _audioList, setVolume, _baseGeo }) {

    useEffect(() => {
        _audioList.bodyAudio.src = prePathUrl() + 'sounds/dragsounds/dragnailbrush.mp3';
        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/nail.mp3'

        bubleOpacityList = [0, 0]

        setVolume(3)

        timer2 = setTimeout(() => {
            _audioList.bodyAudio.play().catch(e => { });
        }, 2000);
        let timer = setTimeout(() => {
            refBaseDiv.current.className = 'show'
        }, 3000);


        return () => {

            setVolume(1)
            _audioList.bodyAudio.pause();
            _audioList.effectAudio.pause();
            _audioList.effectAudio.currentTime = 0;

            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer)
            loadCount = 0;
        }
    }, [])

    const refBaseDiv = useRef();

    function loadedImage() {
        loadCount++;
        if (loadCount == 2) {
            refBaseDiv.current.className = 'aniObjectDelay3'
        }
    }

    const myRef1 = useRef();
    const myRef2 = useRef();

    const cleanRef = useRef();

    const bubbleList = [useRef(), useRef()]
    const myrefList = [myRef1, myRef2];

    const leftList = [0.24, 0.49];
    const topList = [0.48, 0.48];
    const widthList = [0.23, 0.23];
    const heightList = [0.115, 0.115];

    var donelist = [];

    const showSourceList = [
        animationData1, animationData2, animationData3
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

    const gotoNext = () => {

        cleanRef.current.className = 'hide'
        let value = 1;
        let interval = setInterval(() => {
            value -= 0.03
            bubbleList.map(bubble => {
                bubble.current.style.opacity = value
            })
            if (value < 0)
                clearInterval(interval)
        }, 30);

        setTimeout(() => {
            nextFunc();
            nextFunc();
        }, 1300);
    }
    function onMove(event) {
        let x = event.x;
        let y = event.y;

        let width = _geo.width;
        let height = _geo.height;

        if (isMobile) {
            x = event.touches['0'].clientX
            y = event.touches['0'].clientY
        }

        for (let i = 0; i < 2; i++) {
            if (width * leftList[i] + _geo.left < x && x < width * (leftList[i] + widthList[i]) + _geo.left &&
                height * topList[i] < y && y < height * (topList[i] + heightList[i])) {
                myrefList[i].current.style.opacity = myrefList[i].current.style.opacity - 0.1;
                bubleOpacityList[i] += 0.03
                bubbleList[i].current.style.opacity = bubleOpacityList[i]
                if (!donelist.includes(i) && myrefList[i].current.style.opacity < 0.2)
                    donelist.push(i);
            }

        }
    }


    return (
        <div
        >
            <div
                ref={refBaseDiv}
                className='hide'
            >
                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.23 + "px", opacity: "1"
                        , left: _geo.left + _geo.width * 0.24 + "px", top: _geo.height * 0.48 + "px"
                    }}
                    ref={myRef1}
                >
                    <img draggable={false} width={"100%"}
                        src={prePathUrl() + "images/svg/froghanddirty1.svg"}
                        onLoad={loadedImage}
                    />
                </div>
                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.23 + "px", opacity: "1"
                        , left: _geo.left + _geo.width * 0.49 + "px", top: + _geo.height * 0.48 + "px"
                    }}
                    ref={myRef2}
                >
                    <img draggable={false} width={"100%"}
                        src={prePathUrl() + "images/svg/froghanddirty2.svg"}
                        onLoad={loadedImage}
                    />
                </div>
            </div>

            <div
                ref={bubbleList[0]}
                style={{ opacity: 0 }}
            >
                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.1 + "px"
                        , left: _geo.left + _geo.width * 0.22 + "px",
                        top: _geo.height * 0.48 + "px"
                    }}
                >
                    <Lottie autoplay loop options={returnOption(2)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>


                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.15 + "px"
                        , left: _geo.left + _geo.width * 0.25 + "px",
                        top: _geo.height * 0.5 + "px",
                        transform: 'rotateZ(80deg)'
                    }}
                >
                    <Lottie autoplay loop options={returnOption(2)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>

                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.08 + "px"
                        , left: _geo.left + _geo.width * 0.41 + "px",
                        top: _geo.height * 0.46 + "px",
                        transform: 'rotateZ(45deg)'
                    }}
                >
                    <Lottie autoplay loop options={returnOption(2)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
            </div>



            <div
                ref={bubbleList[1]}
                style={{ opacity: 0 }}
            >
                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.1 + "px"
                        , left: _geo.left + _geo.width * 0.65 + "px",
                        top: _geo.height * 0.48 + "px"

                    }}
                >
                    <Lottie autoplay loop options={returnOption(2)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>


                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.15 + "px"
                        , left: _geo.left + _geo.width * 0.55 + "px",
                        top: _geo.height * 0.5 + "px",
                        transform: 'rotateZ(80deg)'
                    }}
                >
                    <Lottie autoplay loop options={returnOption(2)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>

                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.08 + "px"
                        , left: _geo.left + _geo.width * 0.5 + "px",
                        top: _geo.height * 0.46 + "px",
                        transform: 'rotateZ(45deg)'
                    }}
                >
                    <Lottie autoplay loop options={returnOption(2)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
            </div>


            <div className="aniObject" 
            ref = {cleanRef}
            >
                <Draggable onDrag={(e) => {
                    onMove(e);
                }}
                    onStart={() => {
                        _audioList.effectAudio.play().catch(e => { });
                        _audioList.bodyAudio.pause();
                        clearTimeout(timer2)
                    }}
                    onStop={() => {
                        _audioList.effectAudio.pause();
                        if (donelist.length == 2) {
                            timer1 = setTimeout(() => {
                                gotoNext()

                            }, 100);
                        }
                    }
                    }
                >
                    <div

                        style={{
                            cursor: "move",
                            position: "fixed", width: _geo.width * 0.11 + "px", opacity: "1", height: _geo.width * 0.121 + "px"
                            , left: _geo.left + _geo.width * 0.42 + "px", top: _geo.height * 0.30 + "px"
                        }}
                    >
                        <div style={{
                            height: "100%", textAlign: "center", margin: "auto",
                            cursor: "",
                            backgroundImage: "url(" + prePathUrl() + "images/svg/brush.svg" + ")",
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
