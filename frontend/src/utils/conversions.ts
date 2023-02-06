export const padTo2Digits = (num: number) => {
    return String(num).padStart(2, '0');
};

export const formatTimestamp = (val: Date) => {
    return (
        padTo2Digits(val.getDate()) +
        '/' +
        padTo2Digits(val.getMonth() + 1) +
        ' ' +
        padTo2Digits(val.getHours()) +
        ':' +
        padTo2Digits(val.getMinutes()) +
        ':' +
        padTo2Digits(val.getSeconds())
    );
};

export const formatBytes = (bytes: number, decimals = 2): number => {
    if (bytes === 0) return 0;
    const dm = decimals < 0 ? 0 : decimals;

    return parseFloat((bytes / Math.pow(10, 9)).toFixed(dm));
};
