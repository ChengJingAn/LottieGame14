import React, { useEffect, useState, useRef } from 'react';
import Lottie from "react-lottie";
import loadAnimation from '../utils/loadanimation'
import { prePathUrl } from "../components/commonfunctions"

let animationData
new loadAnimation('shot07/sh07foam.json').then(result => {
    animationData = result;
}, () => { });

import "../stylesheets/styles.css";

export default function scene9({ nextFunc, _geo, _baseGeo, _audioList }) {

    const bubbleRef = useRef();
    const bubbleList = [useRef(), useRef(), useRef(), useRef(), useRef()]

    function returnOption(index) {

        return {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    useEffect(() => {


        _audioList.effectAudio.play();

        bubbleList.map(
            bubble=>{
                bubble.current.style.opacity = '0.4'
            }
        )
        setTimeout(() => {

            bubbleList.map((bubble, index) => {
                bubble.current.style.transition = '3s'
                bubble.current.style.opacity = '1'
                bubble.current.style.transform = 'translate(' + _geo.width * [0.05, 0.04, 0.03, 0.02, 0.01][index] + 'px,' + _geo.height * [-0.25, -0.2, -0.35, -0.3, -0.25][index] + 'px) scale(1.2)'
            })

        }, 100);


        const interval1 = setInterval(() => {
            if (bubbleRef.current != null)
                bubbleRef.current.style.opacity -= 0.05
        }, 50);

        const timer = setTimeout(() => {
            nextFunc();
        }, 2000);

        return () => {
            clearInterval(interval1);
            _audioList.effectAudio.pause();
        }
    }, [])

    return (
        <div>

            <div
                className='hideObject'
                ref={bubbleList[0]}
                style={{
                    position: "fixed", width: _geo.width * 0.05 + "px",
                    left: (_geo.width * 0.4 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.45) + "px", opacity: "1"
                }}
            >

                <img draggable={false} width={"100%"} className=''
                    src={prePathUrl() + "images/bubbles/sb_51_sea_bg_bubble_01.svg"}
                />

            </div>

            <div
                className='hideObject'
                ref={bubbleList[1]}
                style={{
                    position: "fixed", width: _geo.width * 0.05 + "px",
                    left: (_geo.width * 0.48 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.4) + "px", opacity: "1"
                }}
            >

                <img draggable={false} width={"100%"} className=''
                    src={prePathUrl() + "images/bubbles/sb_51_sea_bg_bubble_03.svg"}
                />
            </div>

            <div
                className='hideObject'
                ref={bubbleList[4]}
                style={{
                    position: "fixed", width: _geo.width * 0.03 + "px",
                    left: (_geo.width * 0.5 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.4) + "px", opacity: "1"
                }}
            >

                <img draggable={false} width={"100%"} className=''
                    src={prePathUrl() + "images/bubbles/sb_51_sea_bg_bubble_04.svg"}
                />
            </div>

            <div
                className='hideObject'
                ref={bubbleList[2]}
                style={{
                    position: "fixed", width: _geo.width * 0.05 + "px",
                    left: (_geo.width * 0.48 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.5) + "px", opacity: "1"
                }}
            >

                <img draggable={false} width={"100%"} className=''
                    src={prePathUrl() + "images/bubbles/sb_51_sea_bg_bubble1.svg"}
                />

            </div>

            <div
                ref={bubbleList[3]}
                className='hideObject'
                style={{
                    position: "fixed", width: _geo.width * 0.05 + "px",
                    left: (_geo.width * 0.5 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.5) + "px", opacity: "1"
                }}
            >

                <img draggable={false} width={"100%"} className=''
                    src={prePathUrl() + "images/Bubbles/sb_51_sea_bg_bubble3.svg"}
                />

            </div>




            <div
                ref={bubbleRef}
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


        </div>
    );
}
