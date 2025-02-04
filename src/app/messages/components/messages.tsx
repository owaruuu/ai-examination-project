import React from "react";
import { message } from "@/app/types";
import { checkDates, getHour } from "@/helpers";
import Divider from "./divider";

type props = {
    messages: [message];
};

const messages = (props: props) => {
    const { messages } = props;
    const messagesComponent = messages.map((m: message) => {
        //date check

        let lastDate = null;

        const dateString = checkDates(lastDate, m.message_date);
        console.log(
            "🚀 ~ file: messages.tsx:18 ~ messagesComponent ~ dateString:",
            dateString
        );

        lastDate = m.message_date;

        //bot or user
        let classString = "p-4 m-1 rounded-md min-w-24 max-w-md flex flex-col";

        if (m.bot_sender === 1) {
            classString += " bg-bot-message self-end";
        } else {
            classString += " bg-user-message self-start";
        }

        return (
            <>
                <Divider messageDate="ayer" />
                <div key={m.id} className={classString}>
                    <p>{m.message_text}</p>
                    <p className="text-xs self-end">
                        {getHour(m.message_date)}
                    </p>
                </div>
            </>
        );
    });
    return (
        <div className="overflow-scroll overflow-x-auto max-h-full flex flex-col">
            {messagesComponent}
        </div>
    );
};

export default messages;
