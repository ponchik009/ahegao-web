import axios from "axios";

const url = "http://localhost:3001/";

export const getSchedule = (weekBegining, group) => {
  axios
    .get(`${url}schedule?week_begining=${weekBegining}&groups_like=${group}`)
    .then((response) => response.data);
};
