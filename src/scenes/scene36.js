import React, { useEffect, useRef, useState } from 'react';
import Lottie from "react-lottie";
import "../stylesheets/styles.css";
import loadAnimation from '../utils/loadanimation'
import {prePathUrl} from "../components/commonfunctions"
let animationData, animationData1, animationData2, animationData3, animationData4, animationData5, animationData6

new loadAnimation('shot36/sh36GreenShoe.json').then(result => {
    animationData = result;
}, () => { });
new loadAnimation('shot36/sh36GreenShoe.json').then(result => {
    animationData1 = result;
}, () => { });

new loadAnimation('shot36/sh36GreenShoePress.json').then(result => {
    animationData2 = result;
}, () => { });

new loadAnimation('shot36/sh36PurpleShoe.json').then(result => {
    animationData3 = result;
}, () => { });


new loadAnimation('shot36/sh36PurpleShoePess.json').then(result => {
    animationData4 = result;
}, () => { });

new loadAnimation('shot36/sh36RedShoe.json').then(result => {
    animationData5 = result;
}, () => { });

new loadAnimation('shot36/sh36RedShoePress.json').then(result => {
    animationData6 = result;
}, () => { });

const cwidthList = [0.1238, 0.1238, 0.111];
const cRightList = [0.724, 0.722, 0.724];
const cHeightList = [0.148, 0.161, 0.13];

let loadCount = 0;

export default function Scene36({ nextFunc, clothIndex, __setShoeFunc, _geo }) {


    const refBaseDiv = useRef();

    useEffect(() => {
        loadCount = 0
        let timer = setTimeout(() => {
            refBaseDiv.current.className = 'show'
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 7000);
    }, [])

    function loadedImage() {
        loadCount++;
        if (loadCount == 4) {
            refBaseDiv.current.className = 'show'
        }
    }


    const showSourceList = [
        animationData, animationData1, animationData2, animationData3, animationData4, animationData5, animationData6
    ];

    const Switch = props => {
        const { test, children } = props
        return children.find(child => {
            return child.props.value === test
        })
    }

    const [over, setOver] = useState(false);
    const [over1, setOver1] = useState(false);
    const [over2, setOver2] = useState(false);

    const brushList = [1, 3, 5];
    const brushList1 = [2, 4, 6];

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

    function setShoeFunc(index) {
        __setShoeFunc(index);

        setTimeout(() => {
            nextFunc();
        }, 200);

    }
    return (
        <div
            ref={refBaseDiv}
            className="hide">
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.20 + "px",
                    right: _geo.left + 0.70 * _geo.width + "px",
                    bottom: _geo.top + _geo.height * 0.07 + "px"
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_ci_doll_1.svg"}
                    onLoad={loadedImage}
                />
            </div>

            <div

                style={{
                    position: "fixed", width: (_geo.width * cwidthList[clothIndex]) + "px",
                    right: (_geo.left + cRightList[clothIndex] * _geo.width) + "px",
                    bottom: (_geo.top + _geo.height * cHeightList[clothIndex]) + "px"
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/cloth" + (2 + clothIndex) + ".svg"}
                    onLoad={loadedImage}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.1016 + "px",
                    right: _geo.left + 0.71 * _geo.width + "px",
                    bottom: _geo.top + _geo.height * 0.06 + "px"
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/shoe1.svg"}
                    onLoad={loadedImage}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.50 + "px",
                    right: _geo.left + 0.05 * _geo.width + "px",
                    bottom: _geo.top + _geo.height * 0.1 + "px",

                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/shoebox.svg"}
                    onLoad={loadedImage}
                />
            </div>
            <div >
                <div
                    className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.10 + "px",
                        right: _geo.left + 0.40 * _geo.width + "px",
                        top: _geo.top + _geo.height * 0.62 + "px",
                        cursor: "pointer",
                    }}
                    onMouseEnter={() => { setOver(true); }}
                    onMouseLeave={() => { setOver(false); }}
                    onClick={() => { setShoeFunc(0) }}
                >
                    <Switch test={over}>
                        <Lottie autoplay loop={true} options={returnOption(brushList1[0])}
                            mouseDown={false}
                            isClickToPauseDisabled={true} value={true}
                        />
                        <Lottie autoplay loop={true} options={returnOption(brushList[0])}
                            mouseDown={false}
                            isClickToPauseDisabled={true} value={false}
                        />
                    </Switch>
                </div>

                <div

                    className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.11 + "px",
                        right: _geo.left + 0.24 * _geo.width + "px",
                        top: _geo.top + _geo.height * 0.62 + "px",
                        cursor: "pointer",
                    }}
                    onMouseEnter={() => { setOver1(true); }}
                    onMouseLeave={() => { setOver1(false); }}
                    onClick={() => { setShoeFunc(1) }}
                >
                    <Switch test={over1}>
                        <Lottie autoplay loop={true} options={returnOption(brushList1[1])}
                            mouseDown={false}
                            isClickToPauseDisabled={true} value={true}
                        />
                        <Lottie autoplay loop={true} options={returnOption(brushList[1])}
                            mouseDown={false}
                            isClickToPauseDisabled={true} value={false}
                        />
                    </Switch>
                </div>
                <div
                    className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.11 + "px",
                        right: _geo.left + 0.095 * _geo.width + "px",
                        top: _geo.top + _geo.height * 0.62 + "px",
                        cursor: "pointer",
                    }}
                    onMouseEnter={() => { setOver2(true); }}
                    onMouseLeave={() => { setOver2(false); }}
                    onClick={() => { setShoeFunc(2) }}
                >
                    <Switch test={over2}>
                        <Lottie autoplay loop={true} options={returnOption(brushList1[2])}
                            mouseDown={false}
                            isClickToPauseDisabled={true} value={true}
                        />
                        <Lottie autoplay loop={true} options={returnOption(brushList[2])}
                            mouseDown={false}
                            isClickToPauseDisabled={true} value={false}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
}
