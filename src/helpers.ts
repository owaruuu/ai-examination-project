const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;

export function getHour(dateString: string): string {
    const date = new Date(dateString);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${hour}:${minutes}`;
}

export function checkDates(
    lastDate: string | null,
    messageDate: string
): string | null {
    const todayString = new Date().toISOString();
    // const todayString = new Date("2024-03-14" + "T00:00:00Z").toISOString();
    let differenceWithToday = getDifference(todayString, messageDate);

    if (!lastDate) {
        differenceWithToday = getDifference(todayString, messageDate);
        return getDividerString(differenceWithToday, messageDate);
    } else {
        //get difference to know if a day has passed since the last message
        const differenceWithPreviousDay = getDifference(messageDate, lastDate);

        if (differenceWithPreviousDay >= day) {
            return getDividerString(
                getDifference(todayString, messageDate), //get difference from today to know what to show in divider
                messageDate
            );
        }
    }

    return null;
}

function getDifference(newerDate: string, olderDate: string) {
    const dateObject1 = getMidnightUTCDate(newerDate);
    const dateObject2 = getMidnightUTCDate(olderDate);
    const date1Time = dateObject1.getTime();
    const date2Time = dateObject2.getTime();

    const difference = date1Time - date2Time;
    return difference;
}

function getDividerString(difference: number, date: string) {
    if (difference > week) {
        return new Date(date).toLocaleDateString();
    } else if (difference > day * 2) {
        return "this week";
    } else if (difference >= day) {
        return "yesterday";
    } else {
        return "today";
    }
}

function getMidnightUTCDate(dateString: string): Date {
    const date = new Date(dateString);
    return new Date(
        Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
    );
}
