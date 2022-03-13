import React, { useEffect } from 'react';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'
import {prePathUrl} from "../components/commonfunctions"

let animationData, animationData1, animationData2, animationData3, animationData4, animationData5, animationData6,
    animationData7, animationData8, animationData9

new loadAnimation('excellent/sh24e.json').then(result => {
    animationData = result;
}, () => { });

new loadAnimation('excellent/sh24X.json').then(result => {
    animationData1 = result;
}, () => { });
new loadAnimation('excellent/sh24c.json').then(result => {
    animationData2 = result;
}, () => { });

new loadAnimation('excellent/sh24e2.json').then(result => {
    animationData3 = result;
}, () => { });

new loadAnimation('excellent/sh24l.json').then(result => {
    animationData4 = result;
}, () => { });

new loadAnimation('excellent/sh24l.json').then(result => {
    animationData5 = result;
}, () => { });

new loadAnimation('excellent/sh24e3.json').then(result => {
    animationData6 = result;
}, () => { });

new loadAnimation('excellent/sh24n.json').then(result => {
    animationData7 = result;
}, () => { });

new loadAnimation('excellent/sh24t.json').then(result => {
    animationData8 = result;
}, () => { });

new loadAnimation('excellent/sh24ccc.json').then(result => {
    animationData9 = result;
}, () => { });

export default function scene24({ nextFunc, _geo, _audioList }) {
    

    useEffect(() => {
        _audioList.yeahAudio.play().catch(e=>{});


        const timer = setTimeout(() => {
            nextFunc();
            _audioList.yeahAudio.pause();
        }, 9000);

        return () => {
            
            _audioList.yeahAudio.pause();
            _audioList.yeahAudio.currentTime = 0;

            clearTimeout(timer);
        }
    }, [])

    const showSourceList = [
        animationData, animationData1, animationData2, animationData3,
        animationData4, animationData5, animationData6, animationData7, animationData8,
        animationData9,
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

    return (
        <div className='aniObjectDelay'>

            <div className='excellentText' style={{
                position: "fixed", width: _geo.width + "px"
                , height: _geo.height + "px", left: _geo.left + "px",
                top: _geo.top + "px"
            }}>
                <img draggable={false} width={"100%"} height={"100%"}
                    src={prePathUrl() + "images/excellent/sb08_excellent_particles.svg"}
                />
            </div>

            <div

                style={{
                    position: "fixed", width: _geo.width * 0.09 + "px",
                    left: (_geo.width * 0.17 + _geo.left) + "px"
                    , top: (_geo.height * 0.40 + _geo.top) + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(6)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.09 + "px",
                    left: (_geo.width * 0.24 + _geo.left) + "px"
                    , top: (_geo.height * 0.48 + _geo.top) + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.09 + "px",
                    left: (_geo.width * 0.31 + _geo.left) + "px"
                    , top: (_geo.height * 0.48 + _geo.top) + "px"
                }}


            >
                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.09 + "px",
                    left: (_geo.width * 0.38 + _geo.left) + "px"
                    , top: (_geo.height * 0.48 + _geo.top) + "px"
                }}


            >
                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.09 + "px",
                    left: (_geo.width * 0.45 + _geo.left) + "px"
                    , top: (_geo.height * 0.27 + _geo.top) + "px"
                }}


            >
                <Lottie autoplay loop options={returnOption(4)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.09 + "px",
                    left: (_geo.width * 0.50 + _geo.left) + "px"
                    , top: (_geo.height * 0.27 + _geo.top) + "px"
                }}


            >
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.09 + "px",
                    left: (_geo.width * 0.57 + _geo.left) + "px"
                    , top: (_geo.height * 0.48 + _geo.top) + "px"
                }}



            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.09 + "px",
                    left: (_geo.width * 0.64 + _geo.left) + "px"
                    , top: (_geo.height * 0.47 + _geo.top) + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(7)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    left: (_geo.width * 0.72 + _geo.left) + "px"
                    , top: (_geo.height * 0.38 + _geo.top) + "px"
                }}


            >
                <Lottie autoplay loop options={returnOption(8)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.05 + "px",
                    left: (_geo.width * 0.80 + _geo.left) + "px"
                    , top: (_geo.height * 0.38 + _geo.top) + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(9)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

        </div>
    );
}
