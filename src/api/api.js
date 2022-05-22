import { axios } from "./instance";

export const getScheduleByGroup = (weekBegining, group) => {
  return axios
    .get(
      `/schedule?week_begining=${weekBegining}&groups_like=${group}&_sort=day`
    )
    .then((response) => response.data);
};

export const getScheduleByTeacher = (weekBegining, teacher) => {
  return axios
    .get(
      `/schedule?week_begining=${weekBegining}&teachers_like=${teacher}&_sort=day`
    )
    .then((response) => response.data);
};

export const getScheduleByAuditory = (weekBegining, auditory) => {
  return axios
    .get(
      `/schedule?week_begining=${weekBegining}&auditories_like=${auditory}&_sort=day`
    )
    .then((response) => response.data);
};
