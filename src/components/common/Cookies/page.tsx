'use client'

import React from "react";

export default function Cookie() {
    const [ cookie, setCookie ] = React.useState(true);

    return(
        <span className="w-full fixed bottom-0">
            {cookie && (
                <div className="w-full h-[9em] bg-white flex justify-center items-center">cookies</div>
            )}
        </span>
    )
}