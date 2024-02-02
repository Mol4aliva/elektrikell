import moment from "moment";

export const getDefaultFrom = () => moment().subtract(10, 'hours').format();
export const getDefaultUntil = () => moment().add(1, 'day').format();

export const convertToInputFormat = (dateTime) =>
    moment(dateTime).format("YYYY-MM-DDTHH:mm");
export const convertToRequestFormat = (dateTime) => moment(dateTime).format();

export const currentTimeStamp = () => moment().minutes(0).seconds(0).unix();

export const addHourToCurrentTSML = () => moment().add(1, 'hour');
