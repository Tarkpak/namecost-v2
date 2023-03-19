import dayjs from "dayjs"


export const dateTimeFormat = (timeString, format = 'YYYY-MM-DD hh:mm:ss', isUnix = false) => isUnix ? dayjs.unix(timeString).format(format) : dayjs(timeString).format(format)