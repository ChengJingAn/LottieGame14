import "../stylesheets/styles.css";
import { useEffect } from "react";

export default function Scene3({ nextFunc, _geo }) {

    // const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        // setTimeout(() => {
        //     setNextEnable(true);
        // }, 7000);
    }, [])

    return (
        <div>
            <div
                style={{
                    position: "fixed", width: _geo.width * 0.13 + "px", height: _geo.height * 0.08 + "px",
                    left: (_geo.width * 0.42 + _geo.left) + "px"
                    , bottom: (_geo.height * 0.55 + _geo.top) + "px", cursor: "pointer",
                    cursor:'pointer'
                }}
                onClick={nextFunc}
            >
            </div>
        </div>
    );
}
