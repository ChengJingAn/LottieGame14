import React, { useEffect } from 'react';
import Lottie from "react-lottie";
import loadAnimation from '../utils/loadanimation'
import {prePathUrl} from "../components/commonfunctions"
let animationData6
new loadAnimation('shot48/sh48brush_paste.json').then(result => {
    animationData6 = result;
}, () => { });

import "../stylesheets/styles.css";

export default function Scene47({ nextFunc, _geo, __setTimer, _baseGeo }) {

    useEffect(() => {
        const timer =
            setTimeout(() => {
                nextFunc();

            }, 6500);

        return () => {
            clearTimeout(timer);
        }
    }, [])

    const showSourceList = [
        animationData6
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


    return (
        <div className='aniObject'>

            <div
                style={{
                    backgroundColor: '#77780c61',
                    position: "fixed",
                    width: _baseGeo.width * 1 + "px",
                    height: _baseGeo.height * 1 + "px",
                    left: 0 + "px",
                    bottom: 0 + "px",
                }}
            >
            </div>


            <div

                style={{
                    position: "fixed",
                    width: _baseGeo.width * 0.5 + "px",
                    left: _baseGeo.left + _baseGeo.width * 0.25 + "px",
                    bottom: _baseGeo.height * 0.42 + _baseGeo.bottom + "px",
                }}
            >
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                    isStopped={true}
                />
            </div>
            <div className='subText'

                style={{
                    position: "fixed",
                    width: _baseGeo.width * 0.35 + "px",
                    right: _baseGeo.left + _baseGeo.width * 0.325 + "px",
                    bottom: '5%',
                    cursor: "pointer"
                }}

            >
                <img draggable = {false} src={prePathUrl() + 'images/icons/sb_14_ti_brush_your_teeth.svg'}
                    width={'100%'} />
            </div>
        </div>
    );
}
