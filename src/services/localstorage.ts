export const saveToLocalStorage = (data: any, key: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to set data to localStorage', error);
  }
};

export const getFromLocalStorage = (key: string): any => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Failed to get data from localStorage', error);
    return null;
  }
};
