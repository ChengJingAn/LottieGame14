
import React, { useEffect, useState } from 'react';
import "../stylesheets/styles.css";


export default function Scene37({ nextFunc, _audioList }) {
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
            _audioList.clapAudio.pause()
            _audioList.clapAudio.currentTime = 0
        }
    }, [])

    return (
        <div className="aniObject">
        </div>

    );
}
