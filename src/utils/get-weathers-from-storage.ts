import { WEATHERS_STORAGE_KEY } from '@/constants';
import { getFromLocalStorage } from '@/services/localstorage';

export const getWeathersFromStorage = () =>
  getFromLocalStorage(WEATHERS_STORAGE_KEY) as Weather[];
