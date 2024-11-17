import AsyncStorage from '@react-native-async-storage/async-storage';

export const leftPad = (value: number) => {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
};

export const getDate = (long: number | string): string => {
  const weekday = ['일', '월', '화', '수', '목', '금', '토'];

  const date = new Date(long);

  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const calDate = leftPad(date.getDate());
  const day = weekday[date.getDay()];

  const hours = leftPad(date.getHours());
  const minutes = leftPad(date.getMinutes());
  const seconds = leftPad(date.getSeconds());

  return `${year}.${month}.${calDate}(${day}) ${hours}:${minutes}:${seconds}`;
};

export const getIsDone = async (id: number) => {
  const result = await AsyncStorage.getItem('isDone');
  if(result){
    const doneMap = new Map(JSON.parse(result));
    return !!doneMap.get(id);
  }
  return false;
};

export const setIsDone = async (id: number,isDone:boolean) => {
  const result = await AsyncStorage.getItem('isDone');
  let tempMap = result!==null?new Map(JSON.parse(result)):new Map();
  tempMap.set(id,isDone);
  const save = JSON.stringify(Array.from(tempMap.entries()));
  await AsyncStorage.setItem('isDone',save);
};
