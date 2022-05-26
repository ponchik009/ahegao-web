import { axios } from "./instance";

export class ApiSchedule {
  static getScheduleByGroup(weekBegining, group) {
    return axios
      .get(
        `/schedule?week_begining=${weekBegining}&groups_like=${group}&_sort=day`
      )
      .then((response) => response.data);
  }

  static getScheduleByTeacher(weekBegining, teacher) {
    return axios
      .get(
        `/schedule?week_begining=${weekBegining}&teachers_like=${teacher}&_sort=day`
      )
      .then((response) => response.data);
  }

  static getScheduleByAuditory(weekBegining, auditory) {
    return axios
      .get(
        `/schedule?week_begining=${weekBegining}&auditories_like=${auditory}&_sort=day`
      )
      .then((response) => response.data);
  }

  static getFullScheduleByGroup(weekBegining, weekEnding, group) {
    const schedulePromise = axios.get(
      `/schedule?week_begining=${weekBegining}&groups_like=${group}&_sort=day`
    );
    const queriesPromise = axios.get(
      `/queries?groups_like=${group}&dt_gte=${weekBegining}&dt_lte=${weekEnding}&_sort=dt`
    );

    return Promise.all([schedulePromise, queriesPromise]).then(
      ([schedule, queries]) => {
        return schedule.data.concat(queries.data);
      }
    );
  }

  static getFullScheduleByTeacher(weekBegining, weekEnding, teacher) {
    const schedulePromise = axios.get(
      `/schedule?week_begining=${weekBegining}&teachers_like=${teacher}&_sort=day`
    );
    const queriesPromise = axios.get(
      `/queries?teachers_like=${teacher}&dt_gte=${weekBegining}&dt_lte=${weekEnding}&_sort=dt`
    );

    return Promise.all([schedulePromise, queriesPromise]).then(
      ([schedule, queries]) => {
        return schedule.data.concat(queries.data);
      }
    );
  }

  static getFullScheduleByAuditory(weekBegining, weekEnding, auditory) {
    const schedulePromise = axios.get(
      `/schedule?week_begining=${weekBegining}&auditories_like=${auditory}&_sort=day`
    );
    const queriesPromise = axios.get(
      `/queries?auditories_like=${auditory}&dt_gte=${weekBegining}&dt_lte=${weekEnding}&_sort=dt`
    );

    return Promise.all([schedulePromise, queriesPromise]).then(
      ([schedule, queries]) => {
        return schedule.data.concat(queries.data);
      }
    );
  }
}

export class ApiData {
  static getGroups() {
    return axios.get(`/groups`).then((response) => response.data);
  }

  static getTeachers() {
    return axios.get(`/teachers`).then((response) => response.data);
  }

  static getAuditories() {
    return axios.get(`/auditories`).then((response) => response.data);
  }
}
