import React, { useEffect, useRef, useState } from 'react';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'
import {prePathUrl} from "../components/commonfunctions"

let animationData, animationData1, animationData2, animationData3

new loadAnimation('shot29/sh29lowerhand.json').then(result => {
    animationData = result;
}, () => { });
new loadAnimation('shot29/sh29lowerhandFoam.json').then(result => {
    animationData1 = result;
}, () => { });

new loadAnimation('shot29/sh29upperhand.json').then(result => {
    animationData2 = result;
}, () => { });

new loadAnimation('shot29/sh29upperhandFoam.json').then(result => {
    animationData3 = result;
}, () => { });

export default function scene28({ nextFunc, _geo, _baseGeo }) {

    // const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 4000);
    }, [])


    const showSourceList = [
        animationData, animationData1, animationData2, animationData3
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
        <div className="aniObject">
            <div >
                <div
                    style={{
                        position: "fixed", width: _baseGeo.width * 0.23 + "px",
                        left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.height * (-0.006)) + "px",
                    }}

                >
                    <Lottie autoplay loop options={returnOption(0)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>

                <div
                    style={{
                        position: "fixed", width: _baseGeo.width * 0.23 + "px",
                        left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.height * (-0.006)) + "px",
                    }}
                >
                    <Lottie autoplay loop options={returnOption(1)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div
                    style={{
                        position: "fixed", width: _baseGeo.width * 0.23 + "px",
                        left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.height * (-0.006)) + "px",
                    }}
                >
                    <Lottie autoplay loop options={returnOption(2)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div
                    style={{
                        position: "fixed", width: _baseGeo.width * 0.23 + "px",
                        left: (_baseGeo.width * 0.38 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.height * -0.006) + "px",
                    }}
                >
                    <Lottie autoplay loop options={returnOption(3)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>

            </div>
            <div

                className='commonButton'
                style={{
                    cursor: "pointer",
                    position: "fixed", width: _baseGeo.width * 0.10 + "px",
                    right: '6%'
                    , bottom: '25%',

                }}

                onClick={() => {
                    setTimeout(() => {
                        nextFunc()
                    }, 200);
                }}
            >
                <img draggable={false} width={"100%"} className='water-scaleBtn1'
                    src={prePathUrl() + "images/icons/sb_14_tap_icon.svg"}
                />
            </div>


        </div>
    );
}
