import React, { useEffect } from 'react';
import "../stylesheets/styles.css";

export default function scene32({ nextFunc, _audioList, startTransition }) {

    useEffect(() => {
        const timer1 = setTimeout(() => {
            _audioList.clapAudio.play().catch(e=>{});
        }, 200);

        const timer = setTimeout(() => {
            startTransition(4)
            setTimeout(() => {
                nextFunc();
            }, 600);
        }, 11000);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer1);

            _audioList.clapAudio.pause();
            _audioList.clapAudio.currentTime = 0;
        }
    }, [])

    return (
        <div>
        </div>
    );
}
