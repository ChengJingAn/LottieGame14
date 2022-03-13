import React, { useRef, useState, useEffect } from 'react';
import "../stylesheets/styles.css";
import Draggable from 'react-draggable';
import { prePathUrl } from "../components/commonfunctions"
import { isMobile } from "react-device-detect";

let bodyTimer
let timer1, timer2, timer3;

export default function scene23({ nextFunc, towelIndex, _geo, _audioList, setVolume }) {

    const [isSuccess, setIsSuccess] = useState(false);
    const myRef1 = useRef();
    const myRef2 = useRef();
    const myrefList = [myRef1, myRef2];


    var donelist = [];

    var leftList = [];
    var bottomList = [];
    var widthList = [];



    var widthList = [];
    var leftList = [];
    var bottomList = [];



    useEffect(() => {
        setVolume(3)

        _audioList.effectAudio.src = prePathUrl() + 'sounds/effect/drying.mp3'
        _audioList.bodyAudio.src = prePathUrl() + 'sounds/dragsounds/dragtowel.mp3';

        bodyTimer = setTimeout(() => {
            _audioList.bodyAudio.play().catch(e => { });
        }, 2000);

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
            clearTimeout(bodyTimer)

            setVolume(1)

            _audioList.effectAudio.pause();
            _audioList.clapAudio.pause();
            _audioList.bodyAudio.pause();

            _audioList.effectAudio.currentTime = 0;
            _audioList.clapAudio.currentTime = 0;
            _audioList.clapAudio.volume = 0.4;
        }
    }, [])

    var widthList = [0.4, 0.4];
    var leftList = [0.3, 0.3];
    var bottomList = [0.05, 0.08];
    var heightList = [0.2, 0.6];


    function onMove(event) {
        let x = event.x;
        let y = event.y;

        let width = _geo.width;
        let height = _geo.height;

        if (isMobile) {
            x = event.touches['0'].clientX
            y = event.touches['0'].clientY
        }


        for (let i = 0; i < myrefList.length; i++) {
            if (width * leftList[i] + _geo.left < x && x < width * (leftList[i] + widthList[i]) + _geo.left &&
                height + _geo.top - height * (heightList[i] + bottomList[i]) < y && y < height + _geo.top - height * bottomList[i]) {
                myrefList[i].current.style.opacity = myrefList[i].current.style.opacity - 0.1;
                if (!donelist.includes(i) && myrefList[i].current.style.opacity < 0.15)
                    donelist.push(i);
            }

        }
    }



    const towelList = ['redtowel1.svg', 'greentowel1.svg', 'pinktowel1.svg'];


    return (
        <div>
            <div
                className='aniObjectDelay3'
                ref={myRef1}
                style={{
                    position: "fixed", width: _geo.width * 0.33 + "px",
                    left: (_geo.width * 0.34 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.08 + _geo.top) + "px",
                    opacity: '1'
                }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/frogbodywater2.svg"}
                />
            </div>

            <div style={{
                position: "fixed", width: _geo.width * 0.5 + "px",
                left: (_geo.width * 0.25 + _geo.left) + "px"
                , bottom: (_geo.height * 0.07 + _geo.top) + "px"

            }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/frog_clean.svg"}
                />
            </div>
            <div
                className='aniObjectDelay3'
                ref={myRef2}
                style={{
                    position: "fixed", width: _geo.width * 0.33 + "px",
                    left: (_geo.width * 0.345 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.048 + _geo.top) + "px",
                    opacity: '1'
                }}>

                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/svg/frogbodywater1.svg"}
                />
            </div>

            <div className="aniObject">
                {!isSuccess && <Draggable onDrag={(e) => {
                    onMove(e);
                }}
                    onStart={() => {
                        _audioList.effectAudio.play().catch(e => { });
                        clearTimeout(bodyTimer)
                        _audioList.bodyAudio.pause();
                    }}
                    onStop={() => {
                        timer1 = setTimeout(() => {
                            _audioList.effectAudio.pause();
                        }, 100);

                        if (donelist.length == 2) {
                            for (let i = 0; i < myrefList.length; i++)
                                myrefList[i].current.style.opacity = 0;
                            timer2 = setTimeout(() => {
                                setIsSuccess(true);
                                _audioList.clapAudio.play().catch(e => { });
                                let interval
                                let minVolume = 0.4;
                                setTimeout(() => {
                                    interval = setInterval(() => {
                                        minVolume -= 0.03
                                        if (minVolume > 0)
                                            _audioList.clapAudio.volume = minVolume
                                    }, 150);
                                }, 3000);

                                timer3 = setTimeout(() => {
                                    nextFunc();
                                    clearInterval(interval)
                                }, 5500);
                            }, 100);


                        }
                    }
                    }
                >
                    <div
                        style={{
                            cursor: "move",
                            position: "fixed", width: _geo.width * 0.14 + "px",
                            height: _geo.height * 0.18 + "px",
                            right: (_geo.width * 0.1 + _geo.left) + "px"
                            , top: (_geo.height * 0.3 + _geo.top) + "px"
                        }}
                    >
                        <div style={{
                            height: "100%", textAlign: "center", margin: "auto",
                            cursor: "",
                            backgroundImage: "url(" + prePathUrl() + "images/img/" + towelList[towelIndex] + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: "100%"
                        }}
                        >
                        </div>
                    </div>
                </Draggable>
                }
            </div>



            {isSuccess && <div style={{
                position: "fixed", width: _geo.width * 0.04 + "px",
                right: (_geo.width * 0.03) + "px"
                , top: (_geo.height * 0.03) + "px"
            }}  >
                <img draggable={false} width={"100%"} src={prePathUrl() + 'images/icons/sb_14_bubble_progress_bar_icon.svg'} />
            </div>}

        </div>
    );
}
