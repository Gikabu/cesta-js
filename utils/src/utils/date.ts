export const unixDaysToDate = (days: number) => {
    return new Date(days * 86400)
}

const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

export const toDateString = (millis: number) => {
    return formatDate(new Date(millis))
}
