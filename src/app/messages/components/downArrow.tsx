import React from "react";
import { PressEvent } from "@react-types/shared";
import { Button } from "@heroui/button";

type props = {
    fn: (e: PressEvent) => void;
};

const downArrow = (props: props) => {
    const onClick = props.fn;
    return (
        <Button
            className="place-self-center transition sticky bottom-0 mt-[-32px] min-h-[32px] min-w-[32px]"
            size="sm"
            isIconOnly
            radius="full"
            onPress={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
            </svg>
        </Button>
    );
};

export default downArrow;
