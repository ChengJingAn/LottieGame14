import React, {
    useEffect, useState, useRef
} from 'react';
import Lottie from "react-lottie";
import loadAnimation from '../utils/loadanimation'

let animationData
new loadAnimation('shot07/staranim.json').then(result => {
    animationData = result;
}, () => { });

import "../stylesheets/styles.css";


export default function scene15({ nextFunc, _geo ,_audioList }) {

    const [isShow, setShow] = useState(false)
    const sparkRef = useRef();

    useEffect(() => {
        sparkRef.current.className = 'hide'
        const timer = setTimeout(() => {
            nextFunc();
        }, 10000);
        const timer1 = setTimeout(() => {
            _audioList.clapAudio.play().catch(e=>{});
            sparkRef.current.className = 'aniObject'
        }, 300);

        setTimeout(() => {
            setShow(true);
        }, 10);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer1);

            _audioList.clapAudio.pause();
            _audioList.clapAudio.currentTime = 0;
        }

    }, [])


    const showSourceList = [
        animationData
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
        <div
            ref={sparkRef}
        >
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px"
                    , left: _geo.left + _geo.width * 0.25 + "px", top: _geo.height * 0.55
                }}
            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px"
                    , left: _geo.left + _geo.width * 0.63 + "px", top: _geo.height * 0.50
                }}
            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px"
                    , left: _geo.left + _geo.width * 0.45 + "px", top: _geo.height * 0.45
                }}
            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px"
                    , left: _geo.left + _geo.width * 0.38 + "px", top: _geo.height * 0.45
                }}


            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px"
                    , left: _geo.left + _geo.width * 0.30 + "px", top: _geo.height * 0.55
                }}
            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed", width: _geo.width * 0.13 + "px"
                    , left: _geo.left + _geo.width * 0.20 + "px", top: _geo.height * 0.50
                }}

            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.13 + "px"
                    , left: _geo.left + _geo.width * 0.54 + "px", top: _geo.height * 0.55
                }}
            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.13 + "px"
                    , left: _geo.left + _geo.width * 0.60 + "px", top: _geo.height * 0.55
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
