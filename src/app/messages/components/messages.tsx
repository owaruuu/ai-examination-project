"use client";
import React from "react";
import { message } from "@/app/types";
import { checkDates, getHour } from "@/helpers";
import Divider from "./divider";
import FloatingDivider from "./floatingDivider";

type props = {
    messages: [message];
};

const messages = (props: props) => {
    const { messages } = props;
    let lastDate: string | null = null;
    const messagesComponent = messages.map((m: message) => {
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
                {dateString && <Divider messageDate={dateString} id={m.id} />}
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
        <div className="overflow-scroll overflow-x-auto max-h-full flex flex-col  p-5">
            <FloatingDivider content="null" />
            {messagesComponent}
        </div>
    );
};

export default messages;
