import React, { useEffect, useState } from 'react';
import "../stylesheets/styles.css";

export default function Scene41({ nextFunc, _audioList }) {
    useEffect(() => {
        const timer =
            setTimeout(() => {
                nextFunc();
            }, 9800);

        const timer1 =
            setTimeout(() => {
                _audioList.clapAudio.play().catch(e=>{});
            }, 800);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer1);

            _audioList.clapAudio.pause();
            _audioList.clapAudio.currentTime = 0
        }
    }, [])

    return (
        <div>
        </div>
    );
}
