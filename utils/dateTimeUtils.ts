import { hourType } from "../ReduxToolkit/Reducers/hourlyWeatherSlice";

const { DateTime } = require('luxon');
export const formatDateString = (inputDateString: string,): string => {
    const inputDate = new Date(inputDateString);
    const currentDate = new Date();
    if (
        inputDate.getDate() === currentDate.getDate() &&
        inputDate.getMonth() === currentDate.getMonth() &&
        inputDate.getFullYear() === currentDate.getFullYear()
    ) {
        return 'Today';
    } else {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
        };

        return inputDate.toLocaleDateString('en-US', options);
    }
}


export const uvIndexString = (uvIndex: number) => {
    let uvIndexStr = ''
    if (uvIndex > 0 && uvIndex <= 2) {
        uvIndexStr = 'Low'
    }
    if (uvIndex > 2 && uvIndex <= 5) {
        uvIndexStr = 'Moderate'
    }
    if (uvIndex > 5 && uvIndex <= 7) {
        uvIndexStr = 'High'
    }
    if (uvIndex > 7 && uvIndex <= 10) {
        uvIndexStr = 'Very High'
    }
    if (uvIndex > 10) {
        uvIndexStr = 'Extreme'
    }

    return uvIndexStr;
}

export const capitalizeFirstLetter = (string: string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const timeStringConvertor = (dateStr: string, options: Intl.DateTimeFormatOptions): string => {
    if (dateStr !== undefined) {

        const timeStr = new Date(dateStr);
        const formatter = new Intl.DateTimeFormat('en-US', options);
        return formatter.format(timeStr);
    }
    return '';
};

export const dayExtractor = (dateStr: string) => {
    const date = new Date(dateStr)
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
    };

    return date?.toLocaleDateString('en-US', options);
};

export const tomorrowHoursExtractor = (dataArray: Array<hourType>, timezone: string) => {
    const tomorrowStart = DateTime.now()
        .setZone(timezone)
        .plus({ days: 1 })
        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    const tomorrowEnd = tomorrowStart.plus({ days: 1 });

    const filteredArray = dataArray.filter(item => {
        const itemDateTime = DateTime.fromISO(item.time, { zone: timezone });
        return itemDateTime >= tomorrowStart && itemDateTime < tomorrowEnd;
    });

    return filteredArray;
};