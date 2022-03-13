import React, { useEffect, useState } from 'react';

import "../stylesheets/styles.css";
export default function Scene40({ nextFunc, clothIndex, shoeIndex, _geo }) {
    useEffect(() => {
        const timer =
            setTimeout(() => {
                nextFunc();
            }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [])


    return (
        <div >
        </div>
    );
}
