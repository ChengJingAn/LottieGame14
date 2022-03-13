import React, { useEffect  , useRef} from 'react';
import Lottie from "react-lottie";
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

export default function scene20({ nextFunc, _geo,_baseGeo }) {

    const showSourceList = [
        animationData1, animationData2, animationData3, animationData5, animationData6, animationData7, animationData8,
        animationData9
    ];

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


    // const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 4000);
    }, [])


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
        <div >
           
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
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.11 + "px",
                    left: (_geo.width * 0.6 + _geo.left) + "px"
                    , top: (_geo.height * 0.4 + _geo.top) + "px", cursor: "pointer",
                    // pointerEvents:isNextEnable?'':'none'
                }}
                onClick={nextFunc}

            >
                <img draggable={false} width={"100%"} className='water-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_shower_icon.svg"}
                />
            </div>

        </div>
    );
}
