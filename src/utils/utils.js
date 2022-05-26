export const formatDate = (date) => {
  if (!date) return;

  let year = date.getFullYear();
  let month = String(date.getMonth() + 1);
  if (month.length === 1) month = "0" + month;
  let day = String(date.getDate());
  if (day.length === 1) day = "0" + day;

  return `${year}-${month}-${day}`;
};

const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const daysOfWeek = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
};

export const formatSchedule = (startDate, schedule) => {
  const result = getScheduleObject(startDate);
  Object.entries(result).forEach(([key, value], index) => {
    schedule.forEach((pair) => {
      if (pair.day === index + 1) value.push(pair);
    });
  });
  Object.entries(result).forEach(([key, value]) => {
    value.sort((pair1, pair2) => pair1.pair - pair2.pair);
  });

  return result;
};

export const getWeekdayAsKey = (date) =>
  `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;

const getScheduleObject = (startDate) => {
  const result = {};
  const currentDate = new Date(startDate);
  Object.entries(daysOfWeek).forEach(([key, value]) => {
    result[getWeekdayAsKey(currentDate)] = [];
    currentDate.setDate(currentDate.getDate() + 1);
  });
  return result;
};

export const getPairByType = (type) =>
  type === 1 ? "Лекция" : type === 2 ? "Практика" : "Лабораторная работа";
