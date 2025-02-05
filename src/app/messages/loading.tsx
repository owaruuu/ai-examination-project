import React from "react";
import { Spinner } from "@heroui/spinner";

const Loading = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center place-self-center">
            <Spinner />
            loading messages
        </div>
    );
};

export default Loading;
