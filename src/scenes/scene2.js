import React, { useRef, useState, useEffect } from 'react';
import Lottie from "react-lottie";
import loadAnimation from '../utils/loadanimation'
import "../stylesheets/styles.css";
import {prePathUrl} from "../components/commonfunctions"

let loadCount = 0;
let animationData

new loadAnimation('recent/sh02gi_dialogue_sync1.json').then(result => {
    animationData = result;
}, () => { });

export default function Scene2({ nextFunc, _geo, _baseGeo, startTransition }) {

    const [stopAni, setStopAni] = useState(false);
    const [isShowGlow, setShowGlow] = useState(false);

    const [isShowAni, setShowAni] = useState(false);
    const refBaseDiv = useRef();

    function loadedImage() {
        loadCount++;
        if (loadCount == 6) {
            refBaseDiv.current.className = 'show'
        }
    }

    function clickFunc() {
        startTransition(2);
        setTimeout(() => {
            nextFunc();
        }, 600);
    }


    useEffect(
        () => {
            loadCount = 0;
            const timer1 = setTimeout(() => {
                setStopAni(true);
            }, 10);

            const timer2 = setTimeout(() => {
                setStopAni(false);
            }, 1900);

            const timer = setTimeout(() => {
                setStopAni(true);
                setShowAni(true);
            }, 9700);

            const timer4 = setTimeout(() => {
                setShowAni(false)
            }, 10700);

            let timer5 = setTimeout(() => {
                refBaseDiv.current.className = 'show'
            }, 3000);

            return () => {
                clearTimeout(timer);
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer4);
                clearTimeout(timer5)
            }
        }, []
    )

    function returnOption() {
        return {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    return (
        <div
            ref={refBaseDiv}
            className="hide">
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.25 + "px",
                    right: (_geo.width * 0.37 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.04) + "px",
                }}
            >
                <Lottie autoplay loop={true} options={returnOption()}
                    mouseDown={false}
                    isClickToPauseDisabled={true} value={true}
                    isStopped={stopAni}
                    speed={1.06}
                />
            </div>
            <div
                onClick={clickFunc}
                onMouseEnter={() => { setShowGlow(true) }}
                onMouseLeave={() => { setShowGlow(false) }}
                style={{
                    position: "fixed", width: _geo.width * 0.3 + "px",
                    height: _geo.width * 0.26 + "px",
                    left: (_geo.width * 0.67 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.07) + "px",
                    cursor: 'pointer'
                }}>
                <img draggable={false} width={"105%"}
                    className={isShowGlow ? 'shineAniTrue' : 'shineAniFalse'}
                    style={{
                        position: "absolute",
                        left: '-2.5%',
                        top: '-3.5%',
                        pointerEvents: 'none'
                    }}
                    src={prePathUrl() + "images/img/sb_14_ci_frog_green_highlight.svg"}
                />

                {isShowAni &&
                    <img draggable={false} width={"105%"}
                        className='shinewink'
                        style={{
                            position: "absolute",
                            left: '-2.5%',
                            top: '-3.5%',
                            pointerEvents: 'none'
                        }}
                        src={prePathUrl() + "images/img/sb_14_ci_frog_green_highlight.svg"}

                    />
                }
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/frog_clean.svg"}
                    onLoad={loadedImage}
                    style={{
                        position: "absolute",
                        left: '0px', top: '0px',
                        pointerEvents: 'none'
                    }}
                />

                <img draggable={false} width={"72%"}
                    src={prePathUrl() + "images/svg/frog_body_dirty.svg"}
                    onLoad={loadedImage}
                    style={{
                        position: "absolute",
                        left: '10%', top: '14%',
                        pointerEvents: 'none'
                    }}
                />
                <img draggable={false} width={"12%"}
                    src={prePathUrl() + "images/svg/frog_black.svg"}
                    onLoad={loadedImage}
                    style={{
                        position: "absolute",
                        left: '42%', top: '28%',
                        pointerEvents: 'none'
                    }}
                />
                <img draggable={false} width={"14%"}
                    src={prePathUrl() + "images/svg/black1.svg"}
                    onLoad={loadedImage}
                    style={{
                        position: "absolute",
                        left: '24%',
                        top: '72.5%',
                        pointerEvents: 'none'
                    }}
                />
                <img draggable={false} width={"15%"}
                    src={prePathUrl() + "images/svg/black2.svg"}
                    onLoad={loadedImage}
                    style={{
                        position: "absolute",
                        left: '58.5%',
                        top: '72%',
                        pointerEvents: 'none'
                    }}
                />
            </div>

            <div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.2 + "px",
                    left: (_geo.width * 0.08 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.07) + "px"
                }}>
                    <img draggable={false} width={"100%"}
                        src={prePathUrl() + "images/svg/cleangirl.svg"}
                        onLoad={loadedImage}
                    />
                </div>
            </div>
        </div >
    );
}
