import React, { useEffect, useRef,useState } from 'react';
import "../stylesheets/styles.css";
import {prePathUrl} from "../components/commonfunctions"

export default function Scene26({ nextFunc, _geo }) {

//    const [isNextEnable, setNextEnable] = useState(false)
    useEffect(() => {
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 6000);
    }, [])


    return (
        <div className="aniObject">
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.26 + "px",
                    right: _geo.left + 0.38 * _geo.width + "px",
                    bottom: _geo.top + _geo.height * 0.07 + "px"
                }}
            >
                <img draggable = {false} width={"100%"}
                    src={prePathUrl() + "images/svg/cleangirl.svg"}
                />
            </div>


            <div
                style={{
                    position: "fixed", width: _geo.width * 0.025 + "px",
                     height: _geo.height * 0.14,
                    left: (_geo.width * 0.425 + _geo.left) + "px"
                    , top: (_geo.height * 0.64 + _geo.top) + "px", cursor: "pointer",
                    transform:'rotateZ(15deg)'

                }}
                onClick={nextFunc}
            >
            </div>
        </div>
    );
}
