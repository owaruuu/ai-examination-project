import React, { Suspense } from "react";
import Loading from "./loading";
import styles from "./page.module.css";

const page = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/messages`
    );

    const data = await response.json();

    if (!data.data) {
        throw new Error("No messages found");
    }

    console.log("🚀 ~ file: messages.tsx:7 ~ messages ~ data:", data);

    return (
        <>
            <Suspense fallback={<Loading></Loading>}>
                <div className={styles.page}>messages</div>
            </Suspense>
        </>
    );
};

export default page;
