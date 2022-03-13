
import React, { useEffect } from 'react';
import "../stylesheets/styles.css";

const cwidthList = [0.155, 0.155, 0.14];
const cRightList = [0.415, 0.412, 0.416];
const cHeightList = [0.182, 0.196, 0.16];

export default function Scene35({ nextFunc, clothIndex, _geo, __setTimer, _audioList }) {

    // clothIndex = 2;
    useEffect(() => {
        const timer2 = setTimeout(() => {
            _audioList.clapAudio.play().catch(e => { });    
        }, 200);

        

        let interval
        let minVolume = 0.4;
        setTimeout(() => {
            interval = setInterval(() => {
                minVolume -= 0.03
                if (minVolume > 0)
                    _audioList.clapAudio.volume = minVolume
            }, 150);
        }, 3000);

        const timer =
            setTimeout(() => {
                nextFunc();
                
            }, 5800);


        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);

            _audioList.clapAudio.volume = 0.4
            _audioList.clapAudio.pause();
            _audioList.clapAudio.currentTime = 0;

        }
    }, [])


    return (
        <div className="aniObject">

        </div>
    );
}
