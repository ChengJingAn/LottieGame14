
import React, { useEffect, useRef, useState } from 'react';
import App from "./app";
import "../stylesheets/styles.css";
import Lottie from "react-lottie";
import loadSound from '../utils/loadsound';
import loadAnimation from '../utils/loadanimation'
import {LoadingCircleBar} from "./commonbuttons"
import {prePathUrl} from "./commonfunctions"

let animationData1
new loadAnimation('shot01/sh01clean.json').then(result => {
    animationData1 = result;
}, () => { });

var oldBackgroundImage = 's2bg';
var isGameLoaded = false;

let titleAudio = new loadSound('title');
let bodyAudio = new loadSound('title');
let subBodyAudio = new loadSound('bath', true);
let replayAudio = new loadSound('replay', true);
let clickAudio = new loadSound('click', true);
let clapAudio = new loadSound('clap', true);
let backAudio = new loadSound('bmusic', true);
let yeahAudio = new loadSound('yeah', true);
let tingAudio = new loadSound('ting', true);
let effectAudio = new loadSound('ting', true);
let wooAudio = new loadSound('woo', true);
let shaAudio = new loadSound('sha', true);

backAudio.loop = true;

let backgroundSize = { width: 0, height: 0, left: 0, bottom: 0 }

var currentShowlist = [];
var currentBackgroundState = 1  // 1 - center center, 2 - center bottom 3-left center 4 - left bottom, 5 - left top
var isGameStarted = false;

let titleTimer, titleSoundTimer, titleTimer1, titleTimer2;

let newList, newOption;

clickAudio.volume = 0.0;
backAudio.volume = 0.09;
shaAudio.volume = 0.03;
clapAudio.volume= 0.40;

let audioList = [
    titleAudio, bodyAudio, replayAudio, clickAudio, clapAudio, backAudio, yeahAudio, tingAudio, effectAudio, wooAudio, subBodyAudio,
    shaAudio
]
var isOff = false;

const animationColorList = [
    ['#51c9b5', '#cc55d9', '#f55185'],
    ['#43c9e0', '#15ed76', '#f2e01d'],
    ['#f2e01d', '#0269b8', '#a6074c'],
    ['#a6074c', '#361394', '#eb2f80'],
    ['#1e70eb', '#880a91', '#f0a11a'],
    ['#51c9b5', '#cc55d9', '#dfeb88']
]


export default function BaseShot() {

    // const standardRate = 1920 / 969;
    // const backRate = 1600 / 900;
    const playGameBtn = useRef();

    const standardRate = 1600 / 900;
    const [_sizeState, setSizeState] = useState(true);
    const [isGamePlayed, setGamePlayed] = useState(false)
    const myImage = useRef();
    const myImage1 = useRef();

    const imageBack = useRef();
    const imageBack1 = useRef();
    const refIntroText = useRef();


    const [isBackloaded, setBackLoaded] = useState(false);

    const [_geo, setGeometry] = useState({
        width: window.innerWidth, height: window.innerHeight,
        left: 0, top: 0
    });

    const loadingBar = useRef();

    const appRef = useRef();

    const sfbRef = useRef(); // 0
    const sfdRef = useRef(); //1
    const sftRef = useRef();//2
    const sfnRef = useRef();//3
    const fhRef = useRef();//4
    const fhdRef = useRef();//5
    const bfbRef = useRef();//6
    const bfdRef = useRef();//7
    const bftRef = useRef();//8
    const wfbRef = useRef();//9
    const wfdRef = useRef();//10
    const wftRef = useRef();//11
    const cfwRef = useRef();//12
    const ghRef = useRef();//13
    const ghdRef = useRef();
    const ghwRef = useRef();//15

    const gbRef = useRef();//16

    const gc1Ref = useRef();//17
    const gc2Ref = useRef();//18
    const gc3Ref = useRef();//19
    const gc4Ref = useRef();//20

    const gs1Ref = useRef();//21
    const gs2Ref = useRef();//22
    const gs3Ref = useRef();//23
    const gs4Ref = useRef();//24

    const gbRef1 = useRef();//25
    const gbRef2 = useRef();//26

    const transitionObject = useRef();
    const coloredObjects = [useRef(), useRef(), useRef()];

    const refList = [sfbRef, sfdRef, sftRef, sfnRef, fhRef, fhdRef, bfbRef, bfdRef,
        bftRef, wfbRef, wfdRef, wftRef, cfwRef, ghRef, ghdRef,
        ghwRef, gbRef, gc1Ref, gc2Ref, gc3Ref, gc4Ref, gs1Ref, gs2Ref, gs3Ref, gs4Ref, gbRef1, gbRef2];

    function hideIntroTitle() {
        clearTimeout(titleTimer)
        clearTimeout(titleSoundTimer)


        refIntroText.current.className = 'hide'
        playGameBtn.current.className = ''
        playGameBtn.current.style.display = 'none'
    }

    function backgroundLoaded() {
        setTimeout(() => {

            if (!isGameLoaded) {
                isGameLoaded = true
                setTimeout(() => {
                    loadingBar.current.className = 'hide'
                }, 300);
            }

            setBackLoaded(true)
            if (isGameStarted)
                setRealRender(newList, newOption)
        }, 50);
    }

    function starGame() {

        initialAudio([titleAudio, shaAudio, subBodyAudio, replayAudio, backAudio, bodyAudio, clickAudio, clapAudio, yeahAudio, tingAudio, effectAudio, wooAudio])

        setTimeout(() => {
            backAudio.play().catch(e=>{});

            setLoop(backAudio)
            setLoop(effectAudio)
            setLoop(subBodyAudio)

            setTimeout(() => {
               
            }, 10);
        }, 500);

        appRef.current.nextFunc();
        hideIntroTitle()
    }

    function onOffSound() {
        if (isOff) {
            audioList.map(audio => {
                audio.muted = false;
            })
        }
        else {
            audioList.map(audio => {
                audio.muted = true;
            })
        }

        isOff = !isOff
    }


    function showIntroTitle() {
        clearTimeout(titleSoundTimer)
        clearTimeout(titleTimer)

        refIntroText.current.className = 'introText'

        titleTimer = setTimeout(() => {

        }, 300);
        titleSoundTimer = setTimeout(() => {
            titleAudio.currentTime = 0;
            // titleAudio.play().catch(e=>{});
        }, 1000);

        titleTimer1 = setTimeout(() => {
            playGameBtn.current.style.display = 'inline-block'
            playGameBtn.current.className = 'aniObject'
            playGameBtn.current.style.pointerEvents = 'none'
        }, 2500);


        titleTimer2 = setTimeout(() => {
            playGameBtn.current.className = 'commonButton'
            playGameBtn.current.style.pointerEvents = ''
        }, 3500);


    }

    function returnOption(index) {
        return {
            loop: false,
            autoplay: false,
            animationData: animationData1,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }




    function initialAudio(audioList) {
        for (let i = 0; i < audioList.length; i++) {
            audioList[i].play().catch(e=>{})
            audioList[i].pause()
        }
    }

    function playGame() {

        
        isGameStarted = true;
        showIntroTitle();

        setTimeout(() => {
            setGamePlayed(true)
        }, 100);


    }

    function setLoop(audio) {
        audio.addEventListener('ended', () => {
            audio.currentTime = 0;
            audio.play().catch(e=>{})
        },
            false)
    }

    useEffect(() => {

        let timeout;
        refIntroText.current.className = 'hide'

        setTimeout(() => {
            currentBackgroundState = 2;
            setWindowResizing();
            setSuitableBackground(2)
        }, 100);

        setTimeout(() => {
            playGame()
        }, 1000);


        var hidden = "hidden";

        if (hidden in document)
            document.addEventListener("visibilitychange", onOffSound);
        else if ((hidden = "mozHidden") in document)
            document.addEventListener("mozvisibilitychange", onOffSound);
        else if ((hidden = "webkitHidden") in document)
            document.addEventListener("webkitvisibilitychange", onOffSound);
        else if ((hidden = "msHidden") in document)
            document.addEventListener("msvisibilitychange", onOffSound);

        const handleResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setWindowResizing();
            }, 100);
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function setRender(list, option) {
        newList = list;
        newOption = option
        if (isBackloaded)
            setRealRender(newList, newOption)
    }


    function setRealRender(list, option) {
        if (currentShowlist != null)
            for (let i = 0; i < currentShowlist.length; i++)
                if (!list.includes(currentShowlist[i])) {
                    if (option == 1 || option == 2) {
                        refList[currentShowlist[i]].current.className = 'disapearGirl';
                    }
                    else if (option == 3) {
                        refList[currentShowlist[i]].current.className = 'disapearFrog';
                    }
                    else {
                        refList[currentShowlist[i]].current.className = 'hide';
                    }
                }
        if (option == 1) {
            if (list != null)
                for (let i = 0; i < list.length; i++) {
                    if (refList[list[i]].current != null)
                        refList[list[i]].current.className = 'onlyshow'
                }

        }
        else {
            if (list != null)
                for (let i = 0; i < list.length; i++) {
                    if (!currentShowlist.includes(list[i])) {
                        if (option != 2)
                            refList[list[i]].current.className = 'show';
                        else
                            refList[list[i]].current.className = 'onlyshow'
                    }
                }
        }

        currentShowlist = list;
    }

    function setBackground(imgUrl, backState = 1) {


        if (oldBackgroundImage != imgUrl) {
            setSuitableBackground(backState);
            setBackLoaded(false)
            oldBackgroundImage = imgUrl;
            myImage1.current.src = prePathUrl() + "images/svg/" + imgUrl + ".svg";
            myImage1.current.className = "background-ani";

            setTimeout(() => {
                myImage.current.src = prePathUrl() + "images/svg/" + oldBackgroundImage + ".svg";
                myImage1.current.className = ''
            }, 1500);
        }
    }

    // 1 - center center, 2 - center bottom , 3-left center ,  4 - left bottom, 5 - left top


    function startTransition(num = 0) {
        bodyAudio.pause();
        effectAudio.pause();
        clapAudio.pause();
        setTimeout(() => {
            wooAudio.play().catch(e=>{});
        }, 200);
        transitionObject.current.style.display = 'inline-block';
        if (innerHeight / innerWidth > 700 / 1024) {
            transitionObject.current.className = 'changeTran1';

        }
        else
            transitionObject.current.className = 'changeTran';
        for (let i = 0; i < 3; i++)
            coloredObjects[i].current.style.backgroundColor = animationColorList[num][i]
        setTimeout(() => {
            transitionObject.current.className = '';
            transitionObject.current.style.display = 'none';
        }, 3000);
    }

    function setSuitableBackground(backState) {

        switch (backState) {
            case 1:
                imageBack1.current.style.bottom = backgroundSize.bottom + 'px'
                imageBack1.current.style.left = backgroundSize.left + 'px'
                break;

            case 2:
                imageBack1.current.style.bottom = 0 + 'px'
                imageBack1.current.style.left = backgroundSize.left + 'px'
                break;
            case 3:
                imageBack1.current.style.left = 0 + 'px'
                imageBack1.current.style.bottom = backgroundSize.bottom + 'px'
                break;
            case 4:
                imageBack1.current.style.left = 0 + 'px'
                imageBack1.current.style.bottom = 0 + 'px'
                break;
            case 5:
                imageBack1.current.style.left = 0 + 'px'
                imageBack1.current.style.bottom = backgroundSize.bottom * 2 + 'px'
                break;
            default:
                break;
        }

        setTimeout(() => {
            switch (backState) {
                case 1:
                    imageBack.current.style.bottom = backgroundSize.bottom + 'px'
                    imageBack.current.style.left = backgroundSize.left + 'px'
                    break;

                case 2:
                    imageBack.current.style.bottom = 0 + 'px'
                    imageBack.current.style.left = backgroundSize.left + 'px'
                    break;
                case 3:
                    imageBack.current.style.left = 0 + 'px'
                    imageBack.current.style.bottom = backgroundSize.bottom + 'px'
                    break;
                case 4:
                    imageBack.current.style.left = 0 + 'px'
                    imageBack.current.style.bottom = 0 + 'px'
                    break;
                case 5:
                    imageBack.current.style.left = 0 + 'px'
                    imageBack.current.style.bottom = backgroundSize.bottom * 2 + 'px'
                    break;
                default:
                    break;
            }
        }, 1000);
        currentBackgroundState = backState
    }


    function setWindowResizing() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let suitWidth = width;
        let suitHeight = height;
        let left = 0;
        let top = 0;

        backgroundSize.width = width;
        backgroundSize.height = height;

        backgroundSize.left = 0;
        backgroundSize.bottom = 0;


        if (height * standardRate > width) {
            suitHeight = width / standardRate;
            backgroundSize.width = height * standardRate;
            backgroundSize.left = -1 * (backgroundSize.width - width) / 2;

            top = (height - suitHeight) / 2;
        }
        else if (height * standardRate < width) {
            suitWidth = height * standardRate;
            backgroundSize.height = width / standardRate;;
            backgroundSize.bottom = -1 * (backgroundSize.height - height) / 2;

            left = (width - suitWidth) / 2;
        }
        if (window.innerWidth < window.innerHeight)
            setSizeState(false);
        else
            setSizeState(true);

        // if (isGameStarted)
        setSuitableBackground(currentBackgroundState);

        setGeometry({ width: suitWidth, height: suitHeight, left: left, top: top, first: false })
    }

    return (
        <div  >
            <div class='non-interact'>
                <div
                    ref={imageBack}
                    style={{
                        position: "fixed", width: backgroundSize.width + "px"
                        , height: backgroundSize.height + "px",
                        pointerEvents: 'none'
                    }} >

                    <img draggable={false} height={"100%"}
                        ref={myImage}
                        src={prePathUrl() + "images/svg/sb_14_bg_1.svg"}
                    />
                </div>
                <div
                    ref={imageBack1}
                    style={{
                        position: "fixed", width: backgroundSize.width + "px"
                        , height: backgroundSize.height + "px",
                        pointerEvents: 'none'
                    }} >
                    <img draggable={false} height={"100%"}
                        ref={myImage1}
                        onLoad={backgroundLoaded}
                        src={prePathUrl() + "images/svg/sb_14_bg_1.svg"}
                    />
                </div>
                {
                    isGamePlayed &&
                    < div >
                        {/* small frong body */}
                        < div
                            className='hide'
                            ref={sfbRef}
                            style={{
                                position: "fixed", width: _geo.width * 0.5 + "px",
                                left: (_geo.width * 0.25 + _geo.left) + "px"
                                , bottom: (_geo.height * 0.07 + _geo.top) + "px"
                            }}>
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/frog_clean.svg"}
                            />
                        </div>
                        {/* small frog dirty */}
                        <div
                            className='hide'
                            ref={sfdRef}

                            style={{
                                position: "fixed", width: _geo.width * 0.36 + "px"
                                , left: _geo.left + _geo.width * 0.3 + "px",
                                bottom: _geo.top + _geo.height * 0.16 + "px", textAlign: "center",
                            }}>
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/frog_body_dirty.svg"}
                            />
                        </div>
                        {/* sfrog teeth dirty */}
                        <div
                            className='hide'
                            ref={sftRef}

                            style={{
                                position: "fixed", width: _geo.width * 0.06 + "px",
                                left: (_geo.width * 0.46 + _geo.left) + "px"
                                , bottom: (_geo.height * 0.59 + _geo.top) + "px", opacity: "1"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/frog_black.svg"}
                            />
                        </div>
                        {/* sfrog nail dirty */}
                        <div
                            className='hide'
                            ref={sfnRef}
                        >
                            <div
                                style={{
                                    position: "fixed", width: _geo.width * 0.068 + "px",
                                    right: (_geo.width * 0.56 + _geo.left) + "px"
                                    , bottom: (_geo.height * 0.21 + _geo.top) + "px", opacity: "1"
                                }}
                            >
                                <img draggable={false} width={"100%"}
                                    src={prePathUrl() + "images/svg/black1.svg"}
                                />
                            </div>
                            <div
                                style={{
                                    position: "fixed", width: _geo.width * 0.071 + "px",
                                    right: (_geo.width * 0.385 + _geo.left) + "px"
                                    , bottom: (_geo.height * 0.21 + _geo.top) + "px", opacity: "1"
                                }}
                            >
                                <img draggable={false} width={"100%"}
                                    src={prePathUrl() + "images/svg/black2.svg"}
                                />
                            </div>
                        </div>

                        {/* frog hand  */}
                        <div
                            className='hide'
                            ref={fhRef}
                            style={{
                                position: "fixed", width: _geo.width * 0.50 + "px"
                                , left: _geo.left + _geo.width * 0.23 + "px", top: 0,
                                overflow: 'hidden'
                            }}
                        >
                            <img draggable={false} width={"100%"} height={"100%"}
                                style={{ marginTop: '-20%' }}
                                src={prePathUrl() + "images/svg/fronghand.svg"}
                            />
                        </div>
                        {/* frong hand dirty */}

                        <div

                            className='hide'
                            ref={fhdRef}>
                            <div
                                style={{
                                    position: "fixed", width: _geo.width * 0.23 + "px", opacity: "1"
                                    , left: _geo.left + _geo.width * 0.24 + "px", top: _geo.height * 0.48 + "px"
                                }}
                            >
                                <img draggable={false} width={"100%"}
                                    src={prePathUrl() + "images/svg/froghanddirty1.svg"}
                                />
                            </div>
                            <div
                                style={{
                                    position: "fixed", width: _geo.width * 0.23 + "px", opacity: "1"
                                    , left: _geo.left + _geo.width * 0.49 + "px", top: _geo.height * 0.48 + "px"
                                }}
                            >
                                <img draggable={false} width={"100%"}
                                    src={prePathUrl() + "images/svg/froghanddirty2.svg"}
                                />
                            </div>
                        </div>
                        {/* big frog body */}
                        <div
                            className='hide'
                            ref={bfbRef}
                            style={{
                                position: "fixed", width: _geo.width + "px",
                                height: _geo.height + "px"
                                , left: _geo.left + "px",
                                bottom: 0 + "px", textAlign: "center",
                                overflow: 'hidden'
                            }}>
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/frog_clean.svg"}
                            />
                        </div>
                        {/* big frog dirty */}
                        <div
                            className='hide'
                            ref={bfdRef}
                            style={{
                                position: "fixed", width: _geo.width * 0.722 + "px"
                                , left: _geo.left + _geo.width * 0.1 + "px",
                                bottom: 0 + "px", textAlign: "center",
                                overflow: 'hidden', height: _geo.height * 0.757
                            }}>
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/frog_body_dirty.svg"}
                            />
                        </div>

                        {/* big frong teeth */}
                        <div
                            className='hide'
                            ref={bftRef}
                            style={{
                                position: "fixed", width: _geo.width * 0.12 + "px",
                                left: (_geo.width * 0.42 + _geo.left) + "px"
                                , bottom: (_geo.height * 0.52) + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/frog_black.svg"}
                            />
                        </div>

                        {/* water frog body */}
                        <div
                            className='hide'
                            ref={wfbRef}
                            style={{
                                position: "fixed", width: _geo.width * 0.30 + "px",
                                height: _geo.width * 0.2 + 'px',
                                left: (_geo.width * 0.20 + _geo.left) + "px"
                                , bottom: (backgroundSize.height * 0.27) + "px"
                            }}>
                            <img draggable={false} width={"100%"}
                                style={{ position: 'absolute', bottom: '0%', left: '0%' }}
                                src={prePathUrl() + "images/svg/frog_clean.svg"}
                            />
                        </div>
                        {/* water frong dirty */}
                        <div
                            className='hide'
                            ref={wfdRef}
                            style={{
                                position: "fixed", width: _geo.width * 0.30 + "px",
                                height: _geo.width * 0.2 + 'px',
                                left: (_geo.width * 0.20 + _geo.left) + "px"
                                , bottom: (backgroundSize.height * 0.255) + "px"
                            }}>
                            <img draggable={false} width={"70%"}
                                style={{ position: 'absolute', bottom: '22%', left: '11%' }}
                                src={prePathUrl() + "images/svg/frog_body_dirty.svg"}
                            />
                        </div>


                        {/* clean frong water */}
                        <div
                            className='hide'
                            ref={cfwRef}
                        >
                            <div
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
                            <div
                                style={{
                                    position: "fixed", width: _geo.width * 0.5 + "px",
                                    left: (_geo.width * 0.25 + _geo.left) + "px"
                                    , bottom: (_geo.height * 0.07 + _geo.top) + "px"
                                }}>
                                <img draggable={false} width={"100%"}
                                    src={prePathUrl() + "images/svg/frog_clean.svg"}
                                />
                            </div>
                            <div
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
                        </div>

                        {/* girl hand  */}
                        <div
                            className='hide'
                            ref={ghRef}
                            style={{
                                position: "fixed", width: backgroundSize.width * 0.38 + "px"
                                , left: backgroundSize.left + backgroundSize.width * 0.31 + "px",
                                bottom: "0px",
                                overflow: 'hidden'
                            }}>
                            <img draggable={false} width={'100%'} style={{ marginBottom: '-4.3%' }}

                                src={prePathUrl() + "images/svg/dollhand.svg"}
                            />
                        </div>

                        {/* girl hand dirty */}
                        <div
                            className='hide'
                            ref={ghdRef}
                            style={{
                                position: "fixed", width: backgroundSize.width * 0.3 + "px"
                                , left: backgroundSize.left + backgroundSize.width * 0.325 + "px",
                                bottom: backgroundSize.height * 0.06 + "px",
                                overflow: 'hidden'
                            }}
                        >
                            <img draggable={false} width={'100%'} style={{ marginBottom: '-4.3%' }}
                                src={prePathUrl() + "images/svg/handblack.svg"}
                            />
                        </div>
                        {/* girl hand water */}
                        <div
                            className='hide'
                            ref={ghwRef}
                            style={{
                                position: "fixed", width: backgroundSize.width * 0.38 + "px"
                                , left: backgroundSize.left + backgroundSize.width * 0.31 + "px",
                                bottom: backgroundSize.height * 0.05 + "px",
                                overflow: 'hidden'
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/dollhandwater.svg"}
                            />
                        </div>
                        {/* girl base */}
                        <div
                            ref={gbRef}
                            className='hide'

                            style={{
                                position: "fixed", width: _geo.width * 0.26 + "px",
                                right: _geo.left + 0.38 * _geo.width + "px",
                                bottom: _geo.top + _geo.height * 0.07 + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/icons/sb_14_ci_doll_1.svg"}
                            />
                        </div>
                        <div
                            ref={gbRef1}
                            className='hide'
                            style={{
                                position: "fixed", width: _geo.width * 0.26 + "px",
                                right: _geo.left + 0.38 * _geo.width + "px",
                                bottom: _geo.top + _geo.height * 0.07 + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/icons/sb_14_ci_doll_2.svg"}
                            />
                        </div>
                        <div
                            className='hide'
                            ref={gbRef2}
                            style={{
                                position: "fixed", width: _geo.width * 0.26 + "px",
                                right: _geo.left + 0.38 * _geo.width + "px",
                                bottom: _geo.top + _geo.height * 0.07 + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/icons/sb_14_ci_doll_3.svg"}
                            />
                        </div>

                        <div
                            ref={gc1Ref}
                            className='hide'


                            style={{
                                position: "fixed", width: (_geo.width * 0.15) + "px",
                                right: (_geo.left + 0.415 * _geo.width) + "px",
                                bottom: (_geo.top + _geo.height * 0.21) + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/cloth1.svg"}
                            />
                        </div>
                        <div
                            ref={gc2Ref}
                            className='hide'


                            style={{
                                position: "fixed", width: (_geo.width * 0.155) + "px",
                                right: (_geo.left + 0.415 * _geo.width) + "px",
                                bottom: (_geo.top + _geo.height * 0.182) + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/cloth2.svg"}
                            />
                        </div>
                        <div
                            ref={gc3Ref}
                            className='hide'

                            style={{
                                position: "fixed", width: (_geo.width * 0.155) + "px",
                                right: (_geo.left + 0.412 * _geo.width) + "px",
                                bottom: (_geo.top + _geo.height * 0.196) + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/cloth3.svg"}
                            />
                        </div>
                        <div
                            ref={gc4Ref}
                            className='hide'


                            style={{
                                position: "fixed", width: (_geo.width * 0.14) + "px",
                                right: (_geo.left + 0.416 * _geo.width) + "px",
                                bottom: (_geo.top + _geo.height * 0.16) + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/cloth4.svg"}
                            />
                        </div>

                        <div
                            ref={gs1Ref}
                            className='hide'

                            style={{
                                position: "fixed", width: _geo.width * 0.125 + "px",
                                right: _geo.left + 0.396 * _geo.width + "px",
                                bottom: _geo.top + _geo.height * 0.07 + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/svg/shoe1.svg"}
                            />
                        </div>

                        <div
                            ref={gs2Ref}
                            className='hide'

                            style={{
                                position: "fixed", width: _geo.width * 0.128 + "px",
                                right: _geo.left + 0.395 * _geo.width + "px",
                                bottom: _geo.top + _geo.height * 0.075 + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/img/sh1.svg"}
                            />
                        </div>

                        <div
                            ref={gs3Ref}
                            className='hide'

                            style={{
                                position: "fixed", width: _geo.width * 0.128 + "px",
                                right: _geo.left + 0.395 * _geo.width + "px",
                                bottom: _geo.top + _geo.height * 0.075 + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/img/sh2.svg"}
                            />
                        </div>
                        <div
                            ref={gs4Ref}
                            className='hide'

                            style={{
                                position: "fixed", width: _geo.width * 0.128 + "px",
                                right: _geo.left + 0.395 * _geo.width + "px",
                                bottom: _geo.top + _geo.height * 0.075 + "px"
                            }}
                        >
                            <img draggable={false} width={"100%"}
                                src={prePathUrl() + "images/img/sh3.svg"}
                            />
                        </div>

                    </div>
                }
            </div >

            <div style={{ background: "transparent" }} >
                <App ref={appRef} geo={_geo}
                    _hideIntroTitle={hideIntroTitle}
                    _showIntroTitle={showIntroTitle}
                    _setBackground={setBackground}
                    _startTransition={startTransition}
                    baseGeo={backgroundSize}
                    _setRender={setRender}
                    _isBackloaded={isBackloaded}
                    audioList={{
                        backAudio: backAudio,
                        bodyAudio: bodyAudio, clapAudio: clapAudio,
                        clickAudio: clickAudio, yeahAudio: yeahAudio,
                        tingAudio: tingAudio, effectAudio: effectAudio,
                        replayAudio: replayAudio, subBodyAudio: subBodyAudio,
                        shaAudio: shaAudio
                    }}
                />
            </div>


            {/* water frong tax */}
            <div
                className='hide'
                ref={wftRef}
                style={{
                    position: "fixed", width: _geo.width * 0.30 + "px",
                    height: _geo.width * 0.2 + 'px',
                    left: (_geo.width * 0.20 + _geo.left) + "px"
                    , bottom: (backgroundSize.height * 0.27) + "px"
                }}
            >
                <img draggable={false} width={"140%"}
                    style={{ position: 'absolute', left: '-20%', bottom: '-50%' }}
                    src={prePathUrl() + "images/img/bathtax.svg"}
                />


            </div>
            <div
                ref={refIntroText}

                style={{
                    position: "fixed", width: _geo.width * 1.1 + "px"
                    , top: _geo.top - _geo.height * 0.09 + "px", opacity: "1",
                    left: _geo.left - _geo.width * 0.05 + 'px',
                    pointerEvents: 'none'
                }} >
                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                    isStopped={true}
                />
            </div>
            <div
                ref={playGameBtn}
                className='hide'
                onClick={() => {
                    setTimeout(() => {
                        starGame();
                    }, 150);
                }}
                style={{
                    position: "fixed", width: _geo.width * 0.1 + "px",
                    height: _geo.width * 0.1 + "px",
                    left: _geo.left + _geo.width * 0.45
                    , top: _geo.top + _geo.height * 0.7
                    , cursor: "pointer",
                    overflow: 'hidden',
                    userSelect: 'none',
                }}>
                <img
                    width={"100%"}
                    className="playBtn"
                    draggable={false}
                    src={prePathUrl() + 'images/buttons/play_blue.svg'}
                />
            </div>
            <div
                ref={transitionObject}
                style={{ display: 'none' }}
            >
                <div
                    ref={coloredObjects[0]}
                    style={{
                        backgroundColor: '#7372f2', width: '18000%',
                        height: '500%', bottom: '-0%', right: '-200%', position: 'absolute'
                    }}>
                </div>

                <div
                    ref={coloredObjects[1]}
                    style={{
                        backgroundColor: '#1f77ff', width: '18000%',
                        height: '500%', bottom: '500%', right: '-200%', position: 'absolute'
                    }}>
                </div>

                <div
                    ref={coloredObjects[2]}
                    style={{
                        backgroundColor: '#3334f2', width: '18000%',
                        height: '5000%', bottom: '1000%', right: '-200%', position: 'absolute'
                    }}>
                </div>

            </div>
            <LoadingCircleBar ref={loadingBar} />
            {
                !_sizeState && <div className="block" style={{
                    position: "fixed", left: "0px", top: "0px",
                    width: "100%", height: "100%", backgroundColor: "black", opacity: "0.88",
                    textAlign: "center"
                }}>
                    <h1
                        style={{
                            fontSize: '10vw',
                            color: 'white',
                            position: 'absolute',
                            top: '38%',
                            left: '10%',
                            padding: '0px',
                            fontFamily: 'popin'
                        }}>
                        Rotate your device!
                    </h1>

                </div>
            }
        </div >
    )
}