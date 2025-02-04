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
): string {
    //ej. return 'ayer'
    const today = new Date();

    if (!lastDate) {
        const difference = getDifference(today.toISOString(), messageDate);
        return getDividerString(difference);
    }

    const todayString = today.toISOString();

    return "null";
}

function getDifference(newerDate: string, olderDate: string) {
    const dateObject1 = new Date(newerDate);
    const dateObject2 = new Date(olderDate);
    const difference = dateObject1.getTime() - dateObject2.getTime();
    return difference;
}

function getDividerString(difference: number) {
    if (difference > week) {
        return "fecha completa";
    } else if (difference > day * 2) {
        return "this week";
    } else if (difference > day) {
        return "yesterday";
    } else {
        return "today";
    }
}
