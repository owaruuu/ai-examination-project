"use client";
import React from "react";

type props = {
    messageDate: string | null;
    id: number;
};

const Divider = (props: props) => {
    const { messageDate, id } = props;
    return (
        <div
            key={id}
            className="bg-message-divider rounded-xl px-4 py-2 m-1 place-self-center"
        >
            {messageDate}
        </div>
    );
};

export default Divider;
