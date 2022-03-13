import React, { useEffect, useRef } from 'react';
import Lottie from "react-lottie";
import loadAnimation from '../utils/loadanimation'
import "../stylesheets/styles.css";
import {prePathUrl} from "../components/commonfunctions"

let animationData, animationData2
let loadCount = 0;

new loadAnimation('shot01/sh01bg.json').then(result => {
    animationData = result;
}, () => { });
new loadAnimation('shot01/sh01element.json').then(result => {
    animationData2 = result;
}, () => { });

export default function Scene1({ _geo, _baseGeo }) {
    useEffect(() => {
        loadCount = 0;
    }, [])
    const showSourceList = [
        animationData, animationData2
    ];

    function returnOption(index) {
        return {
            loop: false,
            autoplay: false,
            animationData: showSourceList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    function loadedImage() {
        loadCount++;
    }

    return (
        <div
        >
            <div className='non-interact'>
                <div style={{
                    position: "fixed", width: _baseGeo.width - _baseGeo.left * 2 + "px",
                    left: 0 + "px",
                    bottom: 0 + "px", opacity: "0.3",
                    pointerEvents: 'none'

                }} >
                    <Lottie autoplay loop options={returnOption(1)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                        isStopped={true}
                    />
                </div>
                <div>
                    <div style={{
                        position: "fixed", width: _geo.width * 0.3 + "px",
                        height: _geo.width * 0.26 + "px",
                        left: (_geo.width * 0.67 + _geo.left) + "px"
                        , bottom: (_baseGeo.height * 0.07) + "px",
                        pointerEvents: 'none'
                    }}>
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
        </div>
    );
}
