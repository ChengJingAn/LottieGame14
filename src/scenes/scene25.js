import React, { useState, useEffect, useRef } from 'react';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'
import {prePathUrl} from "../components/commonfunctions"

let loadCount = 0;
let animationData

new loadAnimation('shot25/sh25girlpose .json').then(result => {
    animationData = result;
}, () => { });

export default function Scene25({ nextFunc, _geo, _baseGeo, startTransition }) {

    const refBaseDiv = useRef();

    const [stopAni, setStopAni] = useState(false);
    const [isShowGlow, setShowGlow] = useState(false);

    const [isShowAni, setShowAni] = useState(false);


    function loadedImage() {
        loadCount++;
        if (loadCount == 2) {
            refBaseDiv.current.className = 'show'
        }
    }


    function clickFunc() {
        startTransition(3)
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
            }, 2400);

            const timer = setTimeout(() => {
                setStopAni(true);
                setShowAni(true);

            }, 6500);

            const timer3 = setTimeout(() => {
                setShowAni(false)
            }, 8300);

            let timer4 = setTimeout(() => {
                refBaseDiv.current.className = 'show'
            }, 3000);
            
            return () => {
                clearTimeout(timer);
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
                clearTimeout(timer4)
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
            className='hide'>
            <div style={{
                position: "fixed", width: _geo.width * 0.3 + "px",
                left: (_geo.width * 0.67 + _geo.left) + "px"
                , bottom: (_baseGeo.height * 0.07) + "px"
            }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/frog_clean.svg"}
                    onLoad={loadedImage}
                />
            </div>


            {isShowAni &&
                <div
                    className='shinewink'
                    style={{
                        position: "fixed", width: _geo.width * 0.21 + "px",
                        left: (_geo.width * 0.075 + _geo.left) + "px"
                        , bottom: (_baseGeo.height * 0.061) + "px"
                    }}>
                    <img draggable={false} width={"100%"}
                        src={prePathUrl() + "images/img/sb_14_ci_doll_green_highlight.svg"}
                    />
                </div>
            }

            <div style={{
                cursor: 'pointer',
                pointerEvents: ''
            }}
                onClick={() => {
                    clickFunc();
                }}
                onMouseEnter={() => { setShowGlow(true) }}
                onMouseLeave={() => { setShowGlow(false) }}
            >

                <div
                    className={isShowGlow ? 'shineAniTrue' : 'shineAniFalse'}
                    style={{
                        position: "fixed", width: _geo.width * 0.21 + "px",
                        left: (_geo.width * 0.075 + _geo.left) + "px"
                        , bottom: (_baseGeo.height * 0.061) + "px"
                    }}>
                    <img draggable={false} width={"100%"}
                        src={prePathUrl() + "images/img/sb_14_ci_doll_green_highlight.svg"}
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
            </div>



            <div
                style={{

                    position: "fixed", width: _geo.width * 0.25 + "px",
                    right: (_geo.width * 0.4 + _geo.left) + "px"
                    , bottom: (_baseGeo.height * 0.04) + "px"
                }}
            >
                <Lottie autoplay loop={true} options={returnOption()}
                    mouseDown={false}
                    isClickToPauseDisabled={true} value={true}
                    isStopped={stopAni}
                    speed={1.08}
                />
            </div>


        </div>
    );
}
