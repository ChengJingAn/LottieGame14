import React, { useEffect, useRef,useState } from 'react';
import "../stylesheets/styles.css";

export default function scene10({ nextFunc, _geo , startTransition }) {
    // const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 9000);
    }, [])

    function clickFunc() {
        startTransition(4)
        setTimeout(() => {
            nextFunc();
        }, 600);
    }
    

    return (
        <div >

            <div

                
                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    height: _geo.height * 0.07 + "px",
                    left: (_geo.width * 0.37 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.2 + _geo.top) + "px", cursor: "pointer",
                }}
                onClick={clickFunc}
            >
            </div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    height: _geo.height * 0.07 + "px",
                    left: (_geo.width * 0.54 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.2 + _geo.top) + "px", cursor: "pointer",
                    
                    cursor:'pointer'

                }}
                onClick={clickFunc}
            >
            </div>

        </div>
    );
}
