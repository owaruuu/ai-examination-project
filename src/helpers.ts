export function getHour(dateString: string): string {
    const date = new Date(dateString);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${hour}:${minutes}`;
}
