import "../stylesheets/styles.css";
import React, { useEffect } from 'react';
import { prePathUrl } from "../components/commonfunctions";


export default function Scene33({ nextFunc, _geo }) {

    //    const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 7000);
    }, [])


    return (
        <div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.15 + "px",
                    height: _geo.height * 0.24,
                    right: _geo.left + 0.415 * _geo.width + "px",
                    top: _geo.top + _geo.height * 0.55 + "px",
                    cursor: "pointer",
                    // background: 'black',
                    WebkitMaskImage: 'url(' + prePathUrl() + 'images/recent/cloth.svg)',
                    WebkitMaskRepeat: 'no-repeat'
                }}
                onClick={nextFunc}
            >
            </div>

            <div
                style={{
                    position: "fixed", width: _geo.width * 0.025 + "px",
                    height: _geo.height * 0.14,
                    left: (_geo.width * 0.425 + _geo.left) + "px"
                    , top: (_geo.height * 0.64 + _geo.top) + "px",
                    transform: 'rotateZ(15deg)',
                    zIndex: 100
                }}
            >
            </div>
        </div>
    );
}
