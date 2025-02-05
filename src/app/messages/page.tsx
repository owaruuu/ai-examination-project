import React, { Suspense } from "react";
import Messages from "./components/messages";
import Loading from "./loading";

const page = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/messages`
    );

    const data = await response.json();

    if (!data.data) {
        throw new Error("No messages found");
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className="max-h-screen max-w-3xl w-10/12 grid grid-rows-[90%_1fr] items-center bg-chat-background">
                <Messages messages={data.data}></Messages>
                <div className="h-full flex flex-col items-center justify-items-center border-t-2">
                    Messages footer for later use
                </div>
            </div>
        </Suspense>
    );
};

export default page;
