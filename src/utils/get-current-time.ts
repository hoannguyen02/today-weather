import dayjs from 'dayjs';

export const getCurrentTime = (format = 'YYYY-MM-DD HH:mm A') => {
  return dayjs().format(format);
};
