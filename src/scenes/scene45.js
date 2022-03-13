import React, { useEffect, useRef, useState } from 'react';
import {prePathUrl} from "../components/commonfunctions"
import "../stylesheets/styles.css";

let loadCount = 0;
export default function Scene45({ __setIndex, _geo, checkedList, addClickedList, setVolume }) {

    const refBaseDiv = useRef()

    function loadedImage() {
        loadCount++;
        if (loadCount > 5) {
            refBaseDiv.current.className = 'show'
        }
    }

    // const [isNextEnable, setNextEnable] = useState(false)

    useEffect(() => {
        setVolume(3)
        loadCount = 0;
        let timer = setTimeout(() => {
            refBaseDiv.current.className = 'show'
        }, 3000);

        return () => {
            clearTimeout(timer)
            setVolume(1)
        }
        // let timer = 6500;
        // if (checkedList.length == 0)
        //     setTimeout(() => {
        //         setNextEnable(true);
        //     }, timer);
        // else
        //     setNextEnable(true);
    }, [])


    function setStarFunc(index) {
        addClickedList(index);
        setTimeout(() => {
            __setIndex(index + 45);    
        }, 200);
        

    }

    return (
        <div
            ref={refBaseDiv}
            className='hide'
        >
            {!checkedList.includes(0) && <div className='starBtn1'
                style={{
                    position: "fixed",
                    width: _geo.width * 0.12 + "px",
                    right: _geo.left + _geo.width * 0.65 + "px",
                    top: _geo.top + _geo.height * 0.27 + "px",
                    cursor: "pointer"
                }}
                onClick={() => { setStarFunc(0) }}
            >


                <div className='commonButton'>

                    <img draggable={false} width={"100%"} className='star-scaleBtn'
                        src={prePathUrl() + "images/icons/sb_14_star_icon_1.svg"}
                        onLoad={loadedImage}
                    />
                </div>

            </div>}
            {!checkedList.includes(1) && <div className='starBtn2'

                style={{
                    position: "fixed",
                    width: _geo.width * 0.12 + "px",
                    right: _geo.left + _geo.width * 0.45 + "px",
                    top: _geo.top + _geo.height * 0.27 + "px",
                    cursor: "pointer"
                }}

                onClick={() => { setStarFunc(1) }}

            >
                <div className='commonButton'>
                    <img draggable={false} width={"100%"} className='star-scaleBtn'
                        src={prePathUrl() + "images/icons/SB_14_Star_Icon_1.svg"}
                        onLoad={loadedImage}
                    />
                </div>
            </div>
            }
            {!checkedList.includes(2) &&
                <div className='starBtn3'
                    style={{
                        position: "fixed",
                        width: _geo.width * 0.12 + "px",
                        right: _geo.left + _geo.width * 0.25 + "px",
                        top: _geo.top + _geo.height * 0.27 + "px",
                        cursor: "pointer"
                    }}
                    onClick={() => { setStarFunc(2) }}


                >
                    <div className='commonButton'>
                        <img draggable={false} width={"100%"} className='star-scaleBtn'
                            src={prePathUrl() + "images/icons/sb_14_star_icon_1.svg"}
                            onLoad={loadedImage}
                        />
                    </div>
                </div>}
            {
                !checkedList.includes(3) &&
                <div
                    className='starBtn4'
                    style={{
                        position: "fixed",
                        width: _geo.width * 0.12 + "px",
                        right: _geo.left + _geo.width * 0.65 + "px",
                        top: _geo.top + _geo.height * 0.57 + "px",
                        cursor: "pointer"
                    }}
                    onClick={() => { setStarFunc(3) }}
                >
                    <div className='commonButton'>
                        <img draggable={false} width={"100%"} className='star-scaleBtn'
                            src={prePathUrl() + "images/icons/sb_14_star_icon_1.svg"}
                            onLoad={loadedImage}
                        />
                    </div>
                </div>
            }
            {
                !checkedList.includes(4) && <div
                    className='starBtn5'
                    style={{
                        position: "fixed",
                        width: _geo.width * 0.12 + "px",
                        right: _geo.left + _geo.width * 0.45 + "px",
                        top: _geo.top + _geo.height * 0.57 + "px",
                        cursor: "pointer"
                    }}
                    onClick={() => { setStarFunc(4) }}
                >
                    <div className='commonButton'>
                        <img draggable={false} width={"100%"} className='star-scaleBtn'
                            src={prePathUrl() + "images/icons/sb_14_star_icon_1.svg"}
                            onLoad={loadedImage}
                        />
                    </div>
                </div>
            }
            {
                !checkedList.includes(5) && <div
                    className='starBtn6'
                    style={{
                        position: "fixed",
                        width: _geo.width * 0.12 + "px",
                        right: _geo.left + _geo.width * 0.25 + "px",
                        top: _geo.top + _geo.height * 0.57 + "px",
                        cursor: "pointer"
                    }}
                    onClick={() => { setStarFunc(5) }}
                    onLoad={loadedImage}
                >
                    <div className='commonButton'>
                        <img draggable={false} width={"100%"} className='star-scaleBtn'
                            src={prePathUrl() + "images/icons/sb_14_star_icon_1.svg"}
                        />
                    </div>
                </div>
            }


            {checkedList.includes(0) && <div
                style={{
                    position: "fixed", opacity: "0.8",
                    width: _geo.width * 0.12 + "px",
                    right: _geo.left + _geo.width * 0.65 + "px",
                    top: _geo.top + _geo.height * 0.27 + "px",
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_star_icon_2.svg"}
                    onLoad={loadedImage}
                />
            </div>
            }
            {checkedList.includes(1) && <div
                style={{
                    position: "fixed", opacity: "0.8",
                    width: _geo.width * 0.12 + "px",
                    right: _geo.left + _geo.width * 0.45 + "px",
                    top: _geo.top + _geo.height * 0.27 + "px",
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_star_icon_2.svg"}
                    onLoad={loadedImage}
                />
            </div>
            }
            {checkedList.includes(2) && <div
                style={{
                    position: "fixed", opacity: "0.8",
                    width: _geo.width * 0.12 + "px",
                    right: _geo.left + _geo.width * 0.25 + "px",
                    top: _geo.top + _geo.height * 0.27 + "px",
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_star_icon_2.svg"}
                    onLoad={loadedImage}
                />
            </div>
            }
            {checkedList.includes(3) && <div
                style={{
                    position: "fixed", opacity: "0.8",
                    width: _geo.width * 0.12 + "px",
                    right: _geo.left + _geo.width * 0.65 + "px",
                    top: _geo.top + _geo.height * 0.57 + "px",
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_star_icon_2.svg"}
                    onLoad={loadedImage}
                />
            </div>
            }
            {checkedList.includes(4) && <div
                style={{
                    position: "fixed", opacity: "0.8",
                    width: _geo.width * 0.12 + "px",
                    right: _geo.left + _geo.width * 0.45 + "px",
                    top: _geo.top + _geo.height * 0.57 + "px",
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_star_icon_2.svg"}
                    onLoad={loadedImage}
                />
            </div>
            }
            {checkedList.includes(5) && <div
                style={{
                    position: "fixed", opacity: "0.8",
                    width: _geo.width * 0.12 + "px",
                    right: _geo.left + _geo.width * 0.25 + "px",
                    top: _geo.top + _geo.height * 0.57 + "px",
                }}
            >
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/icons/sb_14_star_icon_2.svg"}
                    onLoad={loadedImage}
                />
            </div>
            }

        </div>
    );
}
