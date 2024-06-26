export const getDayMonthYear = (date: string | Date): { day: string; month: string; year: number } => {
    const dateToFormat = new Date(date);

    const day = dateToFormat.getUTCDate().toString().padStart(2, '0');
    const month = (dateToFormat.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = dateToFormat.getUTCFullYear();

    return { day, month, year };
};

export const formatDate = (date: string | Date): string => {
    const { day, month, year } = getDayMonthYear(date);

    return `${day}.${month}.${year} r.`;
};
