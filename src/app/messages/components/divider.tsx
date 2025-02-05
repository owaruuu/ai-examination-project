"use client";
import React, { forwardRef } from "react";

type props = {
    messageDate: string | null;
};

const Divider = forwardRef<HTMLDivElement, props>((props: props, ref) => {
    const { messageDate } = props;
    return (
        <div
            ref={ref}
            className="bg-message-divider rounded-xl px-4 py-2 m-1 place-self-center"
        >
            {messageDate}
        </div>
    );
});

Divider.displayName = "Divider";

export default Divider;
