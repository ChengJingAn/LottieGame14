import React, { useEffect, useRef, useState } from 'react';
import {prePathUrl} from "../components/commonfunctions"
import "../stylesheets/styles.css";


export default function scene17({ nextFunc, _geo }) {

    // const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 4000);
    }, [])

    return (
        <div className="aniObject" >
            <div
                className='commonButton'
                style={{
                    position: "fixed", width: _geo.width * 0.11 + "px",
                    userSelect: 'none',
                    left: (_geo.width * 0.6 + _geo.left) + "px"
                    , top: (_geo.height * 0.4 + _geo.top) + "px", cursor: "pointer",
                    // pointerEvents:isNextEnable?'':'none'

                }}
                onClick={
                    () => {
                        setTimeout(() => {
                            nextFunc()
                        }, 200);
                    }
                }
            >
                <img draggable={false}
                    width={"100%"}
                    className='water-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_shower_icon.svg"}
                />
            </div>
        </div>
    );
}
