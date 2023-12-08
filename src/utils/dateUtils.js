const getCurrentTime = () => {
    const currentToday = new Date();
    const currentYear = currentToday.getFullYear();
    const currentMonth = String(currentToday.getMonth() + 1).padStart(2, '0');
    const currentDay = String(currentToday.getDate()).padStart(2, '0');
    const currentSeconds = String(currentToday.getSeconds()).padStart(2, '0');
    const currentHours = ('0' + currentToday.getHours()).slice(-2);
    const currentMinutes = ('0' + currentToday.getMinutes()).slice(-2);

    return {
        currentToday,
        currentYear,
        currentMonth,
        currentDay,
        currentSeconds,
        currentHours,
        currentMinutes,
    };
};
export default getCurrentTime