"use client";
import React, { useEffect, useRef, useState } from "react";
import { message } from "@/app/types";
import { checkDates, getHour } from "@/helpers";
import Divider from "./divider";
import FloatingDivider from "./floatingDivider";
import DownArrow from "./downArrow";

type props = {
    messages: [message];
};

const Messages = (props: props) => {
    const { messages } = props;
    console.log("🚀 ~ Messages ~ messages:", messages);
    let lastDate: string | null = null;
    let lastDateString: string | null = null;
    const parentRef = useRef<HTMLDivElement | null>(null);
    const childrenRef = useRef<(HTMLDivElement | null)[]>([]);
    const [floatingDate, setFloatingDate] = useState<string | null>("null");
    const [atBottom, setAtBottom] = useState(false);

    function scrollToBottom() {
        if (parentRef.current) {
            parentRef.current.scrollTo(0, parentRef.current.scrollHeight);
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, []);

    useEffect(() => {
        const checkPositions = () => {
            if (!parentRef.current) return;

            let nextDate: string | null = "";

            for (const child of childrenRef.current) {
                const offset = child?.getBoundingClientRect().top;
                if (offset === undefined) {
                    continue;
                }

                if (offset >= 25) break;

                nextDate = child?.textContent ?? "";
            }

            setFloatingDate(nextDate);
        };

        const checkBottom = () => {
            if (!parentRef.current) return;

            setAtBottom(isAtBottom(parentRef.current));
        };

        const isAtBottom = (container: HTMLDivElement | null) => {
            if (!container) return false;
            return (
                container.scrollTop + container.clientHeight >=
                container.scrollHeight
            );
        };

        checkPositions();
        checkBottom();

        const parent = parentRef?.current;

        parent?.addEventListener("scroll", checkPositions);
        parent?.addEventListener("scroll", checkBottom);

        return () => {
            parent?.removeEventListener("scroll", checkPositions);
            parent?.removeEventListener("scroll", checkBottom);
        };
    }, []);

    const messagesComponent = messages.map((m: message, index: number) => {
        //date check
        let dateString = checkDates(lastDate, m.message_date);

        //special case for messages that are between 2 days and 7 days old
        //if the divider 'this week' has already been shown skip it
        if (dateString === lastDateString) {
            dateString = null;
        } else {
            if (dateString) {
                //neccessary since the array is filled with nulls for now
                lastDateString = dateString;
            }
        }

        lastDate = m.message_date;

        //bot or user
        let classString =
            "p-2 md:p-4 pt-2 m-1 rounded-md min-w-24 max-w-md flex flex-col";
        const userName =
            m.bot_sender === 1 ? "AI agent" : `+${m.sender_number}`;
        let userNameClassString = "font-bold text-sm md:text-base";

        if (m.bot_sender === 1) {
            classString += " bg-bot-message self-end ml-5";
            userNameClassString += " self-end";
        } else {
            classString += " bg-user-message self-start mr-5";
        }

        return (
            <>
                {dateString && (
                    <Divider
                        ref={(el) => {
                            childrenRef.current[index] = el;
                        }}
                        messageDate={dateString}
                        key={`${m.id}-divider`}
                    />
                )}

                <div key={m.id} className={classString}>
                    <p className={userNameClassString}>{userName}</p>
                    <p className="text-xs md:text-sm">{m.message_text}</p>
                    <p className="text-xs self-end text-hour-text">
                        {getHour(m.message_date)}
                    </p>
                </div>
            </>
        );
    });
    return (
        <div
            ref={parentRef}
            className="scroll-smooth scrollbar scrollbar-w-3 scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full overflow-scroll overflow-x-auto max-h-full flex flex-col p-0 md:p-5 mx-1"
        >
            {floatingDate && <FloatingDivider content={floatingDate} />}
            {messagesComponent}
            {!atBottom && <DownArrow fn={scrollToBottom} />}
        </div>
    );
};

export default Messages;
