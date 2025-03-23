// get year from date yyyy-mm-dd
export const getYearFromDate = (date: string) : string => {
    return date.split('-')[0];
}

// convert minutes to hours and minutes
export const convertMinutesToHoursAndMinutes = (minutes: number) : string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
}