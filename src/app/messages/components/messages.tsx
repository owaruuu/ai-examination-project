"use client";
import React, { useEffect, useRef, useState } from "react";
import { message } from "@/app/types";
import { checkDates, getHour } from "@/helpers";
import Divider from "./divider";
import FloatingDivider from "./floatingDivider";

type props = {
    messages: [message];
};

const Messages = (props: props) => {
    const { messages } = props;
    let lastDate: string | null = null;
    const parentRef = useRef<HTMLDivElement | null>(null);
    const childrenRef = useRef<(HTMLDivElement | null)[]>([]);
    const [floatingDate, setFloatingDate] = useState<string | null>("null");
    console.log("🚀 ~ Messages ~ childrenRef:", childrenRef);
    const [positions, setPositions] = useState<number[]>([]);
    console.log("🚀 ~ Messages ~ positions:", positions);

    useEffect(() => {
        const checkPositions = () => {
            if (!parentRef.current) return;

            let nextDate: string | null = "";

            for (const child of childrenRef.current) {
                const offset = child?.getBoundingClientRect().top;
                console.log("🚀 ~ checkPositions ~ offset:", offset);
                if (offset === undefined) {
                    console.log("offset is undefined, continuing");

                    continue;
                }

                if (offset >= 25) break;

                nextDate = child?.textContent ?? "";
                console.log("🚀 ~ checkPositions ~ nextDate:", nextDate);
            }

            const newPositions = childrenRef.current.map(
                (child) => child?.getBoundingClientRect().top ?? 0
            );
            setFloatingDate(nextDate);
            setPositions(newPositions);
        };

        checkPositions();

        const parent = parentRef?.current;

        parent?.addEventListener("scroll", checkPositions);

        return () => {
            parent?.removeEventListener("scroll", checkPositions);
        };
    }, []);

    const messagesComponent = messages.map((m: message, index: number) => {
        //date check
        const dateString = checkDates(lastDate, m.message_date);

        lastDate = m.message_date;

        //bot or user
        let classString =
            "p-4 pt-2 m-1 rounded-md min-w-24 max-w-md flex flex-col";
        const userName =
            m.bot_sender === 1 ? "AI agent" : `+${m.sender_number}`;
        let userNameClassString = "font-bold";

        if (m.bot_sender === 1) {
            classString += " bg-bot-message self-end";
            userNameClassString += " self-end";
        } else {
            classString += " bg-user-message self-start";
        }

        return (
            <>
                {dateString && (
                    <Divider
                        ref={(el) => (childrenRef.current[index] = el)}
                        messageDate={dateString}
                        key={`${m.id}-divider`}
                    />
                )}

                <div key={m.id} className={classString}>
                    <p className={userNameClassString}>{userName}</p>
                    <p>{m.message_text}</p>
                    <p className="text-xs self-end">
                        {getHour(m.message_date)}
                    </p>
                </div>
            </>
        );
    });
    return (
        <div
            ref={parentRef}
            className="overflow-scroll overflow-x-auto max-h-full flex flex-col  p-5"
        >
            <FloatingDivider content={floatingDate} />
            {messagesComponent}
        </div>
    );
};

export default Messages;
