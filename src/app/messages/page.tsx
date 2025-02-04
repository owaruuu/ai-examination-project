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

    console.log("🚀 ~ file: messages.tsx:7 ~ messages ~ data:", data.data);

    return (
        <Suspense fallback={<Loading />}>
            <div className="max-h-screen w-10/12 grid grid-rows-[90%_1fr] items-center">
                <Messages messages={data.data}></Messages>
                <div className="flex flex-col items-center justify-items-center">
                    messages footer
                </div>
            </div>
        </Suspense>
    );
};

export default page;
