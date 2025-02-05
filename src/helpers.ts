const second = 1000;
const minute = second * 60; //60,000
const hour = minute * 60; //3,600,000
const day = hour * 24; //86,400,000
const week = day * 7; //604,800,000

/**
 * Get the hour of the date in the follwing format 'hh:mm'
 * @param {string} dateString the date in ISO string format
 * @returns {string}
 */
export function getHour(dateString: string): string {
    const date = new Date(dateString);
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hour}:${minutes}`;
}

/**
 * Compares two dates to determine if the day has changed since the last message, if it has changed
 * determine what to put in the divider
 * @param {string} lastDate the date in string format of the previous message processed
 * @param {string} messageDate the date in string format of the current message being processed
 * @returns {string} the text that the divider will display
 */
export function checkDates(
    lastDate: string | null,
    messageDate: string
): string | null {
    // const todayString = new Date().toISOString();

    //fake today date for testing, based on the newest message date I get from the API
    const todayString = new Date("2024-03-14" + "T00:00:00Z").toISOString();
    const startWeek = getStartOfWeek(todayString).toISOString();
    const timeUntilPreviousWeek = getDifference(todayString, startWeek);

    //get the amount of time difference from today to the date of the message
    //get it now since it is used in both places
    const differenceWithToday = getDifference(todayString, messageDate);

    //if no lastDate is provided just return the date from the message
    //this means it is the first message being processed
    if (!lastDate) {
        return getDividerString(
            differenceWithToday,
            messageDate,
            timeUntilPreviousWeek
        );
    } else {
        //get difference to know if a day has passed since the last message
        const differenceWithPreviousDay = getDifference(messageDate, lastDate);

        if (differenceWithPreviousDay >= day) {
            //get difference from today to know what to show in divider
            return getDividerString(
                differenceWithToday,
                messageDate,
                timeUntilPreviousWeek
            );
        }
    }

    return null;
}

/**
 * Get the difference between two dates, it converts them to UTC dates at midnight first
 * @param newerDate the newer (bigger number) date in string format
 * @param olderDate the older date (smaller number) date in string format
 * @returns
 */
function getDifference(newerDate: string, olderDate: string) {
    const dateObject1 = getMidnightUTCDate(newerDate);
    const dateObject2 = getMidnightUTCDate(olderDate);
    const date1Time = dateObject1.getTime();
    const date2Time = dateObject2.getTime();

    const difference = date1Time - date2Time;
    return difference;
}

/**
 * Get the string for the date divider
 * @param {number} difference amount of difference between today and the message's date
 * @param {string} date the message's date in string format for when it's needed to show the full date in the divider
 * @param {number} timeUntilPreviousWeek the amount of time until it's not this week
 * @returns {string} the text for the divider
 */
function getDividerString(
    difference: number,
    date: string,
    timeUntilPreviousWeek: number
) {
    if (difference > timeUntilPreviousWeek) {
        return new Date(date).toLocaleDateString();
    } else if (difference >= day * 2) {
        return "this week";
    } else if (difference >= day) {
        return "yesterday";
    } else {
        return "today";
    }
}

/**
 * Convert the date to midnight UTC to be able to compare dates and know if a full day has passed
 * @param {string} dateString the date in string format
 * @returns {Date} a new date converted to midnight UTC
 */
function getMidnightUTCDate(dateString: string): Date {
    const date = new Date(dateString);
    return new Date(
        Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
    );
}

/**
 * Gets the date of the first day of the week of a given date
 * @param {string} date a random date
 * @returns {Date} midnight UTC monday of the given date
 */
function getStartOfWeek(date: string): Date {
    const givenDate = getMidnightUTCDate(date);
    const day = givenDate.getDay();
    const startWeek = new Date(givenDate);
    startWeek.setDate(startWeek.getDate() - day);
    return startWeek;
}
