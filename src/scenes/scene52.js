import React, { useEffect } from 'react';
import loadAnimation from "../utils/loadanimation"
import { prePathUrl } from "../components/commonfunctions"

let animationData, animationData1, animationData2, animationData3, animationData4, animationData5, animationData6,
    animationData7, animationData8

new loadAnimation('welldone/sh44w.json').then(result => {
    animationData = result;
}, () => { });

new loadAnimation('welldone/sh44e01.json').then(result => {
    animationData1 = result;
}, () => { });
new loadAnimation('welldone/sh44l01.json').then(result => {
    animationData2 = result;
}, () => { });

new loadAnimation('welldone/sh44l02.json').then(result => {
    animationData3 = result;
}, () => { });

new loadAnimation('welldone/sh44d.json').then(result => {
    animationData4 = result;
}, () => { });

new loadAnimation('welldone/sh44O.json').then(result => {
    animationData5 = result;
}, () => { });

new loadAnimation('welldone/sh44n.json').then(result => {
    animationData6 = result;
}, () => { });

new loadAnimation('welldone/sh44e02.json').then(result => {
    animationData7 = result;
}, () => { });

new loadAnimation('welldone/sh44eee.json').then(result => {
    animationData8 = result;
}, () => { });
import Lottie from "react-lottie";

import "../stylesheets/styles.css";

export default function scene44({ nextFunc, _geo, _baseGeo, _audioList }) {

    const showSourceList = [
        animationData, animationData1, animationData2, animationData3,
        animationData4, animationData5, animationData6, animationData7, animationData8,
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
        _audioList.bodyAudio.src = prePathUrl() + 'sounds/effect/complete.mp3'
        const timer = setTimeout(() => {
            _audioList.clapAudio.play().catch(e => { })
            _audioList.yeahAudio.play().catch(e => { })
            _audioList.bodyAudio.play().catch(e => { });

        }, 1000);

        const timer1 = setTimeout(() => {

            _audioList.backAudio.volume = 0.04;
            _audioList.replayAudio.play().catch(e => { }).catch(error => { })

            setTimeout(() => {
                _audioList.backAudio.volume = 0.09;
            }, _audioList.replayAudio.duration * 1000);

        }, 5000);

        return () => {
            _audioList.backAudio.volume = 0.09;
            _audioList.yeahAudio.pause();

            _audioList.yeahAudio.currentTime = 0;
            _audioList.clapAudio.pause();

            _audioList.clapAudio.currentTime = 0;
            _audioList.bodyAudio.pause();

            _audioList.replayAudio.pause();
            _audioList.replayAudio.currentTime = 0;

            clearTimeout(timer);
            clearTimeout(timer1);
        }
    }, [])

    return (
        <div className='aniObjectDelay'>
            < div className="excellentText" style={{
                position: "fixed", width: _geo.width * 1.3 + "px",
                left: _geo.left - _geo.width * 0.15 + "px",
                top: _geo.top - _geo.height * 0.15 + "px"
            }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/welldone/sb08_well_done_particles.svg"}
                />
            </div>

            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.14 + "px",
                    left: _geo.left + _geo.width * 0.25 + "px",
                    top: _geo.top + _geo.height * 0.16 + "px"
                }}
            >


                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.07 + "px",
                    left: _geo.left + _geo.width * 0.40 + "px",
                    top: _geo.top + _geo.height * 0.23 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.09 + "px",
                    left: _geo.left + _geo.width * 0.48 + "px",
                    top: _geo.top + _geo.height * 0.17 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.09 + "px",
                    left: _geo.left + _geo.width * 0.58 + "px",
                    top: _geo.top + _geo.height * 0.17 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.12 + "px",
                    left: _geo.left + _geo.width * 0.24 + "px",
                    top: _geo.top + _geo.height * 0.5 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(4)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed",
                    width: _geo.width * 0.11 + "px",
                    left: _geo.left + _geo.width * 0.36 + "px",
                    top: _geo.top + _geo.height * 0.54 + "px"
                }}
            >
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.12 + "px",
                    left: _geo.left + _geo.width * 0.47 + "px",
                    top: _geo.top + _geo.height * 0.53 + "px"
                }}
            >
                <Lottie autoplay loop options={returnOption(6)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div


                style={{
                    position: "fixed",
                    width: _geo.width * 0.1 + "px",
                    left: _geo.left + _geo.width * 0.6 + "px",
                    top: _geo.top + _geo.height * 0.53 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(7)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.08 + "px",
                    left: _geo.left + _geo.width * 0.71 + "px",
                    top: _geo.top + _geo.height * 0.42 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(8)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div className='aniObjectDelay'>
                <div
                    className='commonButton'
                    onClick={() => {
                        setTimeout(() => {
                            nextFunc();
                        }, 200);
                    }}
                    style={{
                        position: "fixed", width: _geo.width * 0.1 + "px",
                        height: _geo.width * 0.1 + "px",
                        left: _geo.left + _geo.width * 0.45
                        , bottom: '5%'
                        , cursor: "pointer",
                        overflow: 'hidden',
                        userSelect: 'none',
                    }}>
                    <img
                        width={"100%"}
                        draggable={false}
                        src={prePathUrl() + 'images/buttons/replay_blue.svg'}
                    />
                </div>
            </div ></div>
    );
}
