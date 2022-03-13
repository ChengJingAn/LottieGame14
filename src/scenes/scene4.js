import React, { useEffect, useRef } from 'react';
import "../stylesheets/styles.css";
import {prePathUrl} from "../components/commonfunctions"

let loadCount = 0;
export default function Scene4({ nextFunc, __setBrushIndex, _geo, _baseGeo }) {

    // const [isNextEnable, setNextEnable] = useState(false)

    const refBaseDiv = useRef();

    useEffect(() => {
        loadCount = 0;
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 7000);
        let timer = setTimeout(() => {
            refBaseDiv.current.className = 'show'
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, [])

    function loadedImage() {
        loadCount++;
        if (loadCount == 3) {
            refBaseDiv.current.className = 'show'
        }
    }

    function setBrushFunc(index) {
        __setBrushIndex(index);
        setTimeout(() => {
            nextFunc();    
        }, 200);
        
    }

    return (
        <div
            ref={refBaseDiv}
            className="show" >
            <div

                className="commonButton"
                style={{
                    position: "fixed", width: _geo.width * 0.17 + "px",
                    right: "6%"
                    , top: (_geo.height * 0.17 + _geo.top) + "px",
                    cursor: "pointer",
                }}
                onClick={() => { setBrushFunc(0) }}
            >
                <img draggable={false} width={"100%"} className='brush-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_brush_icon_1.svg"}
                    onLoad={loadedImage}
                />
            </div>

            <div
                className="commonButton"
                style={{
                    cursor: "pointer",
                    position: "fixed", width: _geo.width * 0.18 + "px",
                    right: "6%"
                    , top: (_geo.height * 0.42 + _geo.top) + "px",

                }}
                onClick={() => { setBrushFunc(1) }}

            >
                <img draggable={false} width={"100%"} className='brush-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_brush_icon_3.svg"}
                    onLoad={loadedImage}
                />
            </div>

            <div
                className="commonButton"
                style={{
                    cursor: "pointer",
                    position: "fixed", width: _geo.width * 0.17 + "px",
                    right: "6%"
                    , top: (_geo.height * 0.67 + _geo.top) + "px",
                }}
                onClick={() => { setBrushFunc(2) }}

            >
                <img draggable={false} width={"100%"} className='brush-scaleBtn'
                    src={prePathUrl() + "images/icons/sb_14_brush_icon_2.svg"}
                    onLoad={loadedImage}
                />
            </div>

        </div>
    );
}
