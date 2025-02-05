"use client";
import React from "react";

const error = () => {
    return (
        <div className="flex flex-col items-center text-center">
            There was an error trying to load the messages, try refreshing the
            page.
        </div>
    );
};

export default error;
