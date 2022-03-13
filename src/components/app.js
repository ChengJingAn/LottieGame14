
import React, { useState, useEffect, useRef } from 'react';
import "../stylesheets/styles.css"
import { prePathUrl } from "./commonfunctions"

import {
  Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9,
  Scene10, Scene11, Scene12, Scene13, Scene15, Scene16, Scene17, Scene18,
  Scene19, Scene20, Scene21, Scene22, Scene23, Scene24, Scene25, Scene26,
  Scene27, Scene28, Scene29, Scene30, Scene31, Scene32, Scene33, Scene34,
  Scene35, Scene36, Scene37, Scene38, Scene39, Scene40, Scene41, Scene42,
  Scene43, Scene44, Scene45, Scene46, Scene47, Scene48, Scene49, Scene50, Scene51,
  Scene52
} from "./importscenes"

import loadSound from "../utils/loadsound"

let audio = new loadSound('title')
let audio1 = new loadSound("audio_2")
let audio2 = new loadSound("audio_3")
let audio3 = new loadSound("audio_4")
let audio4 = new loadSound("audio_5")
let audio5 = new loadSound("audio_6")
let audio6 = new loadSound("audio_7")
let audio7 = new loadSound("audio_8")
let audio8 = new loadSound("audio_9")
let audio9 = new loadSound("audio_10")
let audio10 = new loadSound("audio_11")
let audio11 = new loadSound("audio_12")
let audio12 = new loadSound("audio_13")
let audio13 = new loadSound("audio_14")
let audio14 = new loadSound("audio_15")
let audio15 = new loadSound("audio_16")
let audio16 = new loadSound("audio_17")
let audio17 = new loadSound("audio_18")
let audio18 = new loadSound("audio_19")
let audio19 = new loadSound("audio_20")
let audio20 = new loadSound("audio_21")
let audio21 = new loadSound("audio_22")
let audio22 = new loadSound("audio_23")
let audio23 = new loadSound("audio_24")
let audio24 = new loadSound("audio_25")
let audio25 = new loadSound("audio_26")
let audio26 = new loadSound("audio_27")
let audio27 = new loadSound("audio_28")
let audio28 = new loadSound("tapstar")
let audio29 = new loadSound("audio_30")

let washS = new loadSound("wash")
let brushS = new loadSound("brushte")
let combS = new loadSound("comb")
let nailS = new loadSound("keep")
let bathS = new loadSound("bath")
let wearS = new loadSound("wear")


let isClickable = true;

const Switch = props => {
  const { test, children } = props
  // filter out only children with a matching prop
  return children.find(child => {
    return child.props.value === test
  })
}

var _brushIndex = 0;
var _pasteIndex = 0;
var _towelIndex = 0;
var _clothIndex = 0;
var _shoeIndex = 0;
var _combIndex = 0;
var __geo;
var backgroundImageIndex = 0;
var _clickedList = [];
var currentIndex = 0;

var backgroundImageList = [
  "sb_14_bg_1", //2
  "bathroom1",//3 
  "wall",//10
  "bathroom1",//11
  "floor", //15
  "bathroom1", //16
  "bathroom2", // 21
  "bathroom1", // 23
  "sb14_excellent_bg", //24
  "sb_14_bg_2", //26
  "handwater", //32
  "sb_14_bg_2", //43
  "sb14_excellent_bg",//44
  "sb_14_bg_3", //45
  "handwater", //46
  "darktile", //51
  "sb14_excellent_bg", //52
];

var audioCtx

var nonArrowSceneNumList = [
  0, 1, 2, 23, 24, 25, 43, 44
]
var source;
let voiceTimer
var gainNode

const App = ({ geo, _setBackground, _setRender, baseGeo,
  _showIntroTitle, _hideIntroTitle, _isBackloaded, audioList, _startTransition }, ref) => {

  const [index, setIndex] = useState(0);
  const [successList, setsuccessList] = useState(0);
  const [_isBackSoundPlaying, _setBackgroundPlaying] = useState(true);

  const musicRef = useRef()

  __geo = geo;


  useEffect(
    () => {
      // setVolume(1)

      _clickedList = [];
      backgroundImageIndex = 0;

      return () => {


      }
    }, []
  )

  /* Function to close fullscreen mode */

  function setVolume(num) {

    gainNode.gain.value = num; // double the volume

  }



  function playVoice() {
    let time = 2000;
    if (currentIndex == 8)
      time = 400
    voiceTimer = setTimeout(() => {
      audioList.bodyAudio.play().catch(e => { });
    }, time);
  }



  function controlBacksound() {
    if (_isBackSoundPlaying) {
      _setBackgroundPlaying(false);
      audioList.backAudio.pause();
    }
    else {
      _setBackgroundPlaying(true);
      audioList.backAudio.play();
    }
  }

  // 1 - center center, 2 - center bottom , 3-left center ,  4 - left bottom, 5 - left top

  const centerBottomBackList = [6, 10, 14, 15, 16, 20, 21, 22, 24, 25, 32, 33, 41, 42]


  React.useImperativeHandle(ref, () => ({
    nextFunc: () => {
      if (audioCtx == null) {
        audioCtx = new AudioContext();
        source = audioCtx.createMediaElementSource(audioList.bodyAudio);
        gainNode = audioCtx.createGain();
        source.connect(gainNode);

        // connect the gain node to an output destination
        gainNode.connect(audioCtx.destination);
      }

      setIndex(1);
      setFomart(1);
      _hideIntroTitle()

    },
  }))

  function changeBackgroundImage(i) {
    let backState = 1
    if (i == 1)
      _hideIntroTitle()
    if (i != backgroundImageIndex) {
      backgroundImageIndex = i;
      if (centerBottomBackList.includes(i))
        backState = 2
      _setBackground(backgroundImageList[i], backState);
    }
  }

  const transitionList = [10, 15, 31]
  function forwardFunc() {
    if (isClickable) {
      isClickable = false;
      setTimeout(() => {
        isClickable = true
      }, 800);

      if (transitionList.includes(index)) {
        _startTransition(1)
        setTimeout(() => {
          nextFunc();
        }, 800);
      }
      else {
        nextFunc();
      }

    }
  }

  function previousFunc() {
    if (isClickable) {
      isClickable = false;
      setTimeout(() => {
        isClickable = true;
      }, 800);
      if (index > 45)
        goBack()
      else {
        if (index == 1)
          goHome()
        if (index != 9 && index != 14 && index != 42 && index != 40) {
          setIndex(index - 1);
          setFomart(- 1);
        }
        else {
          setFomart(- 2);
          setIndex(index - 2);
        }
      }
    }
  }

  const girlHairList = [9, 38, 39, 40, 41, 42]
  const transitionlist = [2, 11, 16, 25, 32]

  function setFomart(num) {



    currentIndex = num;
    clearTimeout(voiceTimer)
    audioList.bodyAudio.pause();

    let judgeNum = index + num;
    if (!noPlaySoundList.includes(judgeNum)) {
      audioList.clickAudio.pause();
      audioList.clickAudio.currentTime = 0
      audioList.clickAudio.play().catch(e => { });
    }


    if (judgeNum == 1)
      setTimeout(() => {
        musicRef.current.className = 'introText'
        setTimeout(() => {
          musicRef.current.className = 'commonButton'
        }, 1500);
      }, 1000);

    let renderlist = [];
    let option = -1

    if (judgeNum > 1 && judgeNum < 23) {
      if (judgeNum < 3)
        renderlist = [0, 1, 2, 3]
      else if (judgeNum < 6)
        renderlist = [6, 7, 8]
      else if (judgeNum < 10)
        renderlist = [6, 7]
      else if (judgeNum < 11)
        renderlist = [0, 1, 3]
      else if (judgeNum < 12)
        renderlist = [4, 5]
      else if (judgeNum < 15)
        renderlist = [4]
      else if (judgeNum < 16)
        renderlist = [0, 1]
      else if (judgeNum < 15)
        renderlist = [4]
      else if (judgeNum < 20)
        renderlist = [9, 10, 11]
      else if (judgeNum < 21)
        renderlist = [9, 11]
      else if (judgeNum < 22)
        renderlist = [12]
    }

    if (judgeNum == 26)
      renderlist = [13, 14]
    if (judgeNum == 29)
      renderlist = [13, 15]
    if (judgeNum == 30)
      renderlist = [13]
    if (judgeNum == 31)
      renderlist = [13]

    if (judgeNum == 32)
      renderlist = [16, 17, 21]
    if (judgeNum == 34)
      renderlist = [16, _clothIndex + 18, 21]
    if (judgeNum == 36)
      renderlist = [16, _clothIndex + 18, _shoeIndex + 22]
    if (judgeNum == 37)
      renderlist = [16, _clothIndex + 18, _shoeIndex + 22]
    if (judgeNum == 38)
      renderlist = [16, _clothIndex + 18, _shoeIndex + 22]
    if (judgeNum == 39 || judgeNum == 40)
      renderlist = [25, _clothIndex + 18, _shoeIndex + 22]
    if (judgeNum == 42 || judgeNum == 41)
      renderlist = [26, _clothIndex + 18, _shoeIndex + 22]

    if (judgeNum == 45)
      renderlist = [13]

    if (girlHairList.includes(judgeNum))
      option = 1
    if (transitionlist.includes(judgeNum))
      option = 2
    // if (judgeNum == 20)
    //   option = 3

    _setRender(renderlist, option)


    switch (judgeNum) {
      case 1: audioList.bodyAudio.src = audio1.src; playVoice();
        break;
      case 2: audioList.bodyAudio.src = audio2.src; playVoice();
        break;
      case 3: audioList.bodyAudio.src = audio3.src; playVoice();
        break;
      case 4: audioList.bodyAudio.src = audio4.src; playVoice();
        break;
      case 8: audioList.bodyAudio.src = audio6.src; playVoice(); break;
      case 9: audioList.bodyAudio.src = audio7.src; playVoice(); break;
      case 10: audioList.bodyAudio.src = audio8.src; playVoice(); break;
      case 11: audioList.bodyAudio.src = audio9.src; playVoice(); break;
      case 14: audioList.bodyAudio.src = audio10.src; playVoice(); break;
      case 15: audioList.bodyAudio.src = audio11.src; playVoice(); break;

      case 16: audioList.bodyAudio.src = audio12.src; playVoice();
        break;
      case 17: audioList.bodyAudio.src = audio13.src; playVoice();
        break;
      case 19: audioList.bodyAudio.src = audio12.src; playVoice();
        break;
      case 21: audioList.bodyAudio.src = audio14.src; playVoice(); break;

      case 23: audioList.bodyAudio.src = audio15.src; playVoice(); break;
      case 24: audioList.bodyAudio.src = audio16.src; playVoice(); break;
      case 25: audioList.bodyAudio.src = audio17.src; playVoice(); break;
      case 26: audioList.bodyAudio.src = audio18.src; playVoice(); break;
      case 27: audioList.bodyAudio.src = audio19.src; playVoice(); break;
      case 29: audioList.bodyAudio.src = audio20.src; playVoice(); break;
      case 31: audioList.bodyAudio.src = audio21.src; playVoice(); break;
      case 32: audioList.bodyAudio.src = audio22.src; playVoice(); break;
      case 33: audioList.bodyAudio.src = audio23.src; playVoice(); break;
      case 35: audioList.bodyAudio.src = audio24.src; playVoice(); break;
      case 37: audioList.bodyAudio.src = audio25.src; playVoice(); break;
      case 42: audioList.bodyAudio.src = audio26.src; playVoice(); break;
      case 43: audioList.bodyAudio.src = audio27.src; playVoice(); break;
      case 44: audioList.bodyAudio.src = audio28.src; playVoice(); break;
      case 45: audioList.bodyAudio.src = audio29.src; playVoice(); break;

      default:
        break;
    }

    if (judgeNum < 2)
      changeBackgroundImage(0);
    else if (judgeNum < 3)
      changeBackgroundImage(1);
    else if (judgeNum < 10)
      changeBackgroundImage(2);

    else if (judgeNum < 11)
      changeBackgroundImage(3);

    else if (judgeNum < 15) {
      if (judgeNum == 11)
        changeBackgroundImage(4);
      else
        changeBackgroundImage(4);
    }
    else if (judgeNum < 16)
      changeBackgroundImage(5);
    else if (judgeNum < 21)
      changeBackgroundImage(6);
    else if (judgeNum < 23)
      changeBackgroundImage(7);
    else if (judgeNum < 24)
      changeBackgroundImage(8);
    else if (judgeNum < 26)
      changeBackgroundImage(9);
    else if (judgeNum < 32)
      changeBackgroundImage(10);
    else if (judgeNum < 43)
      changeBackgroundImage(11);
    else if (judgeNum < 44)
      changeBackgroundImage(12);
    else if (judgeNum < 45)
      changeBackgroundImage(13);
    else if (judgeNum < 46)
      changeBackgroundImage(14);
    else if (judgeNum < 51)
      changeBackgroundImage(15);
    else if (judgeNum < 52)
      changeBackgroundImage(16);



    // backgroundImge set
    let n = 0;

    if (judgeNum < 23) {
      if (judgeNum < 9)
        num = 0;
      else if (judgeNum < 13)
        num = 1;
      else
        num = 2;
    }
    else {
      if (judgeNum < 31)
        num = 0;
      else if (judgeNum < 36)
        num = 1;
      else if (judgeNum < 41)
        num = 2;
      else
        num = 3;
    }

    if (num != successList)
      setTimeout(() => {
        setsuccessList(num);
      }, 1200);

  }

  const noPlaySoundList = [
    2, 3, 6, 7, 8, 9, 10,
    11, 13, 14, 15, 16, 19, 21,
    23, 24, 25, 26, 29, 31,
    32, 33, 35, 37, 39, 40,
    41, 42, 43, 44, 46, 47,
    48, 49, 50, 51, 52];

  function nextFunc() {

    if (index == 0)
      _hideIntroTitle()
    if (index != 12) {
      setFomart(1);
      setIndex(index + 1);
    }
    else {
      setFomart(2);
      setIndex(index + 2);
    }


  }

  function goStar() {
    if (_clickedList.length == 6) {
      setIndex(51);
      // audioList.bodyAudio.src = excell);
      // setTimeout(() => {
      //   myAudio.play().catch(e=>{});
      // }, 1000);
      changeBackgroundImage(16);
    }
    else {
      audioList.bodyAudio.pause();
      changeBackgroundImage(13);
      setIndex(44);
    }
  }

  function setCurrentIndex(i) {
    if (i == 45)
      changeBackgroundImage(14);
    else
      changeBackgroundImage(15);

    setIndex(i);

    audioList.bodyAudio.pause();
    audioList.clickAudio.play().catch(e => { });

    switch (i) {
      case 45: audioList.bodyAudio.src = washS.src; playVoice(); break;
      case 46: audioList.bodyAudio.src = brushS.src; playVoice(); break;
      case 47: audioList.bodyAudio.src = combS.src; playVoice(); break;
      case 48: audioList.bodyAudio.src = nailS.src; playVoice(); break;
      case 49: audioList.bodyAudio.src = bathS.src; playVoice(); break;
      case 50: audioList.bodyAudio.src = wearS.src; playVoice(); break;
      default:
        break;
    }

  }

  function goBack() {
    if (index > 44)
      goStar();
    else {
      _clickedList = [];
      if (index != 14 && index != 42)
        setIndex(index - 1);
      else
        setIndex(index - 2);
      setFomart(-1);
    }
  }

  function goHome() {
    audioList.bodyAudio.pause();
    _setBackground(backgroundImageList[0])
    _clickedList = [];
    _setRender([])

    audioList.backAudio.pause();
    musicRef.current.className = 'hideObject'

    setsuccessList(0);
    setIndex(0);
    _showIntroTitle();
  }

  function _addClickedList(i) {
    _clickedList.push(i);
  }

  function _setBrushIndex(index) {
    _brushIndex = index;
  }
  function _setTowelIndex(index) {
    _towelIndex = index;
  }

  function _setPasteIndex(index) {
    _pasteIndex = index;
  }

  function _setClothIndex(index) {
    _clothIndex = index;
  }

  function _setShoeIndex(index) {
    _shoeIndex = index;
  }
  function _setCombIndex(index) {
    _combIndex = index;
  }

  return (
    <div >
      <div className="non-interact" style={{ display: (index > 1 && index != 23 && index != 24 && index < 43 ? 'inline-block' : 'none') }}>

        <div style={{
          position: "fixed", width: __geo.width * 0.15 + "px",
          right: (__geo.width * 0.02) + "px"
          , top: (__geo.height * 0.02) + "px",

        }}  >
          <img draggable={false} width={"100%"} src={prePathUrl() + 'images/icons/sb_14_bubble_progress_bar_icon_holder.svg'} />
        </div>

        <div style={{
          position: "fixed", width: __geo.width * 0.04 + "px",
          right: (__geo.width * 0.03) + "px"
          , top: (__geo.height * 0.03) + "px"
        }}  >
          <img draggable={false} width={"100%"} src={successList > 2 ? prePathUrl() + 'images/icons/sb_14_bubble_progress_bar_icon.svg' : prePathUrl() + 'images/icons/sb_14_bubble_grey_progress_bar_icon.svg'} />
        </div>
        <div style={{
          position: "fixed", width: __geo.width * 0.04 + "px",
          right: (__geo.width * 0.0725) + "px"
          , top: (__geo.height * 0.03) + "px"
        }} >
          <img draggable={false} width={"100%"} src={successList > 1 ? prePathUrl() + 'images/icons/sb_14_bubble_progress_bar_icon.svg' : prePathUrl() + 'images/icons/sb_14_bubble_grey_progress_bar_icon.svg'} />
        </div>
        <div style={{
          position: "fixed", width: __geo.width * 0.04 + "px",
          right: (__geo.width * 0.115) + "px"
          , top: (__geo.height * 0.03) + "px"
        }} >
          <img draggable={false} width={"100%"} src={successList > 0 ? prePathUrl() + 'images/icons/sb_14_bubble_progress_bar_icon.svg' : prePathUrl() + 'images/icons/sb_14_bubble_grey_progress_bar_icon.svg'} />
        </div>
      </div>
      {_isBackloaded &&
        <Switch test={index} >
          <Scene1 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={0} />
          <Scene2 nextFunc={nextFunc} startTransition={_startTransition} _baseGeo={baseGeo} _geo={__geo} value={1} />
          <Scene3 nextFunc={nextFunc} _geo={__geo} value={2} />
          <Scene4 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} __setBrushIndex={_setBrushIndex} value={3} />
          <Scene5 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} brushIndex={_brushIndex} __setPasteIndex={_setPasteIndex} value={4} />
          <Scene6 nextFunc={nextFunc} _geo={__geo} brushIndex={_brushIndex} pasteIndex={_pasteIndex} value={5} />
          <Scene7 setVolume={setVolume} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} brushIndex={_brushIndex} value={6} />
          <Scene8 setVolume={setVolume} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} value={7} />
          <Scene9 _audioList={audioList} nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={8} />
          <Scene10 _audioList={audioList} nextFunc={nextFunc} _geo={__geo} value={9} />
          <Scene11 nextFunc={nextFunc} startTransition={_startTransition} _geo={__geo} value={10} />
          <Scene12 nextFunc={nextFunc} _geo={__geo} value={11} />
          <Scene13 setVolume={setVolume} _audioList={audioList} _baseGeo={baseGeo} nextFunc={nextFunc} _geo={__geo} value={12} />

          <Scene15 _audioList={audioList} nextFunc={nextFunc} _geo={__geo} value={14} />
          <Scene16 startTransition={_startTransition} nextFunc={nextFunc} _geo={__geo} value={15} />
          <Scene17 _baseGeo={baseGeo} nextFunc={nextFunc} _geo={__geo} value={16} />
          <Scene18 _baseGeo={baseGeo} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} value={17} />
          <Scene19 setVolume={setVolume} _baseGeo={baseGeo} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} value={18} />
          <Scene20 _baseGeo={baseGeo} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} value={19} />
          <Scene21 _baseGeo={baseGeo} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} value={20} />
          <Scene22 _baseGeo={baseGeo} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} __setTowelIndex={_setTowelIndex} value={21} />
          <Scene23 setVolume={setVolume} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} towelIndex={_towelIndex} value={22} />
          <Scene24 _audioList={audioList} nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={23} />
          <Scene25 startTransition={_startTransition} _baseGeo={baseGeo} nextFunc={nextFunc} _geo={__geo} value={24} />
          <Scene26 _baseGeo={baseGeo} nextFunc={nextFunc} _geo={__geo} value={25} />
          <Scene27 nextFunc={nextFunc} _geo={__geo} value={26} />
          <Scene28 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={27} />
          <Scene29 _audioList={audioList} nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={28} />
          <Scene30 nextFunc={nextFunc} _geo={__geo} __setTowelIndex={_setTowelIndex} value={29} />
          <Scene31 setVolume={setVolume} _audioList={audioList} nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} towelIndex={_towelIndex} value={30} />
          <Scene32 startTransition={_startTransition} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} towelIndex={_towelIndex} value={31} />
          <Scene33 nextFunc={nextFunc} _geo={__geo} value={32} />
          <Scene34 nextFunc={nextFunc} _geo={__geo} __setClothFunc={_setClothIndex} value={33} />
          <Scene35 _audioList={audioList} nextFunc={nextFunc} _geo={__geo} clothIndex={_clothIndex} value={34} />
          <Scene36 nextFunc={nextFunc} _geo={__geo} __setShoeFunc={_setShoeIndex} clothIndex={_clothIndex} value={35} />
          <Scene37 _audioList={audioList} nextFunc={nextFunc} _geo={__geo} clothIndex={_clothIndex} shoeIndex={_shoeIndex} value={36} />
          <Scene38 _audioList={audioList} nextFunc={nextFunc} _geo={__geo} __setCombFunc={_setCombIndex} clothIndex={_clothIndex} shoeIndex={_shoeIndex} value={37} />
          <Scene39 setVolume={setVolume} _audioList={audioList} nextFunc={nextFunc} _geo={__geo} combIndex={_combIndex} clothIndex={_clothIndex} shoeIndex={_shoeIndex} value={38} />
          <Scene40 _audioList={audioList} nextFunc={nextFunc} _geo={__geo} combIndex={_combIndex} clothIndex={_clothIndex} shoeIndex={_shoeIndex} value={39} />
          <Scene41 _audioList={audioList} nextFunc={nextFunc} _geo={__geo} combIndex={_combIndex} clothIndex={_clothIndex} shoeIndex={_shoeIndex} value={40} />
          <Scene42 _audioList={audioList} nextFunc={nextFunc} _geo={__geo} combIndex={_combIndex} clothIndex={_clothIndex} shoeIndex={_shoeIndex} value={41} />
          <Scene43 _audioList={audioList} nextFunc={nextFunc} _geo={__geo} combIndex={_combIndex} clothIndex={_clothIndex} shoeIndex={_shoeIndex} value={42} />
          <Scene44 _audioList={audioList} nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={43} />

          <Scene45 setVolume={setVolume} __setIndex={setCurrentIndex} addClickedList={_addClickedList} checkedList={_clickedList} _geo={__geo} value={44} />

          <Scene46 nextFunc={goStar} _baseGeo={baseGeo} _geo={__geo} value={45} />
          <Scene47 nextFunc={goStar} _baseGeo={baseGeo} _geo={__geo} value={46} />
          <Scene48 nextFunc={goStar} _baseGeo={baseGeo} _geo={__geo} value={47} />
          <Scene49 nextFunc={goStar} _baseGeo={baseGeo} _geo={__geo} value={48} />
          <Scene50 nextFunc={goStar} _baseGeo={baseGeo} _geo={__geo} value={49} />
          <Scene51 nextFunc={goStar} _baseGeo={baseGeo} _geo={__geo} value={50} />
          <Scene52 _audioList={audioList} nextFunc={goHome} _baseGeo={baseGeo} _geo={__geo} value={51} />

        </Switch>
      }

      {/* {!nonArrowSceneNumList.includes(index) && index < 44 &&
        <div>
          <div
            className='commonButton'
            onClick={forwardFunc}
            style={{
              position: "fixed", width: __geo.width * 0.055 + "px",
              height: __geo.width * 0.055 + "px",
              right: '2%'
              , bottom: '2%'
              , cursor: "pointer",
              overflow: 'hidden',
              userSelect: 'none',
            }}>
            <img
              width={"100%"}
              draggable={false}
              className="playBtn"
              src={prePathUrl() + 'images/buttons/next_blue.svg'}
            />
          </div>
          <div
            className='commonButton'
            onClick={previousFunc}
            style={{
              position: "fixed", width: __geo.width * 0.055 + "px",
              height: __geo.width * 0.055 + "px",
              left: '2%'
              , bottom: '2%'
              , cursor: "pointer",
              overflow: 'hidden',
              userSelect: 'none',
            }}>
            <img
              width={"100%"}
              draggable={false}
              className="playBtn"
              src={prePathUrl() + 'images/buttons/previous_blue.svg'}
            />
          </div>
        </div>
      } */}

      <div
        ref={musicRef}
        className='hideObject'
        onClick={controlBacksound}
        style={{
          position: "fixed", width: __geo.width * 0.055 + "px",
          height: __geo.width * 0.055 + "px",
          left: 2 + "%",
          top: "46%",
          cursor: 'pointer',
        }}>
        <img

          width={"100%"}
          draggable={false}
          src={prePathUrl() + "images/Buttons/" + (!_isBackSoundPlaying ? "Audio_mute" : "Audio_unmute") + ".svg"}
        />
      </div>

    </div >
  );
}


export default React.forwardRef(App);
