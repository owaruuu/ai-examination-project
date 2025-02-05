import React from "react";

type props = {
    content: string | null;
};

const FloatingDivider = (props: props) => {
    const { content } = props;
    return (
        <div className="fixed shadow-xl bg-message-divider rounded-xl px-4 py-2 m-1 place-self-center">
            {content}
        </div>
    );
};

export default FloatingDivider;
