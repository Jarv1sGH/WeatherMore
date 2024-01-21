export const formatDateString = (inputDateString: string, fromWeatherComponent = false): string => {
    const inputDate = new Date(inputDateString);
    const currentDate = new Date();
    if (
        fromWeatherComponent === false &&
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
export const timeStringConvertor = (dateStr: string) => {
    const timeStr = new Date(dateStr);
    const time = timeStr?.toLocaleTimeString([], {
        hour: '2-digit',
    });
    return time;
};
export const dayExtractor = (dateStr: string) => {
    const date = new Date(dateStr)
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
    };

    return date?.toLocaleDateString('en-US', options);
};