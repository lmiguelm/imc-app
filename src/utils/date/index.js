function formatDay(day) {
    return date.getDate();
}

function formatMonth(month) {
    return date.getMonth() + 1;
}

function formatDate(date) {
    return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
}

export {
    formatDate,
    formatMonth,
    formatDay
}

