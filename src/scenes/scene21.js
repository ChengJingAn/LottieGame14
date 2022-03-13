import React, { useEffect, useRef, useState } from 'react';
import Lottie from "react-lottie";

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

let animationData10
new loadAnimation('shot18/sh18watr.json').then(result => {
    animationData10 = result;
}, () => { });




import "../stylesheets/styles.css";

let timer1, timer2;
var currentOpacity = 1;
export default function scene21({ nextFunc, _geo, _audioList, _baseGeo }) {


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

    const [isFisished, setFinished] = useState(false)



    var animated = true;

    const myrefList = [myRef1, myRef2, myRef3, myRef4, myRef5, myRef6, myRef7, myRef8, myRef9, myRef10, myRef11];
    const showSourceList = [
        animationData1, animationData2, animationData3, animationData5, animationData6, animationData7, animationData8,
        animationData9, animationData10
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


    useEffect(() => {
        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/shower.mp3'
        _audioList.effectAudio.volume = 0.25
        _audioList.effectAudio.loop = 100;
        const timer3 = setTimeout(() => {
            _audioList.effectAudio.play().catch(e=>{});
        }, 100);

        currentOpacity = 1;

        timer1 = setTimeout(() => {
            minusOpacity();
        }, 500);

        const timer = setTimeout(() => {
            _audioList.effectAudio.pause();
            nextFunc();
        }, 5000);
        return () => {
            _audioList.effectAudio.volume = 1
            clearTimeout(timer);
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)

            _audioList.effectAudio.pause();
            _audioList.effectAudio.currentTime = 9;
            animated = false;
        }
    }, [])



    function minusOpacity() {
        if (currentOpacity > 0 && animated) {
            currentOpacity -= 0.07;
            for (let i = 0; i < myrefList.length; i++) {
                if(myrefList[i].current != null)
                    myrefList[i].current.style.opacity = currentOpacity;
            }
            timer2 = setTimeout(() => {
                minusOpacity();
            }, 100);
            // else
            //     setFinished(true)
        }
    }

    return (
        <div >


            {!isFisished && <div>
                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.35 + "px",
                        height: _geo.width * 0.35 + "px",
                        left: (_geo.width * 0.16 + _geo.left) + "px"
                        , bottom: _baseGeo.height * 0.35 + "px"
                    }}
                >
                    <Lottie autoplay loop options={returnOption(8)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                    <div style={{ width: '100%', position: 'absolute', left: '0px', bottom: '93%' }}>
                        <Lottie
                            autoplay loop options={returnOption(8)}
                            mouseDown={false}
                            isClickToPauseDisabled={true}
                        />
                    </div>

                </div>

                <div
                    style={{
                        position: "fixed", width: _geo.width * 0.15 + "px",
                        left: (_geo.width * 0.21 + _geo.left) + "px"
                        , bottom: (_baseGeo.height * 0.3) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.4) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.45) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.23) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.2) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.18) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.35) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.35) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.3) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.23) + "px", opacity: "1"
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
                        , bottom: (_baseGeo.height * 0.32) + "px", opacity: "1"
                    }}
                    ref={myRef11}
                >
                    <Lottie autoplay loop options={returnOption(5)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
            </div>


            }
        </div>

    );
}
