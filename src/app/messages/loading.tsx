import React from "react";
import { Spinner } from "@heroui/spinner";

const Loading = () => {
    return (
        <div className="flex flex-col items-center">
            <Spinner />
            loading messages
        </div>
    );
};

export default Loading;
