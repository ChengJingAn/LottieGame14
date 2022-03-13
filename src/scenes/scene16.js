import React, { useEffect, useRef, useState } from 'react';
import "../stylesheets/styles.css";

export default function scene16({ nextFunc, _geo, startTransition }) {


    // const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 6000);
    }, [])

    function clickFunc() {
        startTransition(3)
        setTimeout(() => {
            nextFunc();
        }, 600);
    }

    return (
        <div className="aniObject">
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px", height: _geo.height * 0.35 + "px",
                    left: (_geo.width * 0.42 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.16 + _geo.top) + "px", cursor: "pointer",
                    // pointerEvents:isNextEnable?'':'none'
                }}
                onClick={clickFunc}
            >
            </div>
        </div>
    );
}
