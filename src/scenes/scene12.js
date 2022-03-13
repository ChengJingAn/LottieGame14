import React, { useEffect, useRef, useState } from 'react';
import { prePathUrl } from "../components/commonfunctions"
import "../stylesheets/styles.css";

export default function scene12({ nextFunc, _geo }) {
    // const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 7000);
    }, [])



    return (
        <div className="aniObject">
            <div className='commonButton'
                style={{
                    position: "fixed", width: _geo.width * 0.13 + "px", cursor: "pointer"
                    , right: _geo.width * 0.15 + "px", bottom: _geo.height * 0.25 + "px",
                    // pointerEvents:isNextEnable?'':'none'
                }}
                onClick={() => {
                    setTimeout(() => {
                        nextFunc()
                    }, 200)
                }
                }
            >
                <img draggable={false} width={"100%"} className='brush1-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_brush_icon.svg"}
                />
            </div>


        </div >
    );
}
