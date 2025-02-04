import React from "react";

type props = {
    messageDate: string;
};

const divider = (props: props) => {
    const messageData = props.messageDate;
    return (
        <div className="bg-message-divider rounded-xl px-4 py-2 my-8 mx-20 place-self-center">
            {messageData}
        </div>
    );
};

export default divider;
