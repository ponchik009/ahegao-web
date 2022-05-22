import axios from "axios";

const url = "http://localhost:3001/";

export const getScheduleByGroup = (weekBegining, group) => {
  return axios
    .get(
      `${url}schedule?week_begining=${weekBegining}&groups_like=${group}&_sort=day`
    )
    .then((response) => response.data);
};

export const getScheduleByTeacher = (weekBegining, teacher) => {
  return axios
    .get(
      `${url}schedule?week_begining=${weekBegining}&teachers_like=${teacher}&_sort=day`
    )
    .then((response) => response.data);
};

export const getScheduleByAuditory = (weekBegining, auditory) => {
  return axios
    .get(
      `${url}schedule?week_begining=${weekBegining}&auditories_like=${auditory}&_sort=day`
    )
    .then((response) => response.data);
};
