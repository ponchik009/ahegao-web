import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Schedule from "../../components/Schedule/Schedule";
import { ApiSchedule } from "../../api/api";
import { useFetch } from "../../hooks/UseFetch";
import { formatDate, formatSchedule } from "../../utils/utils";
import Calendar from "../../components/Calendar/Calendar";

const AuditoryPage = () => {
  const [monday, setMonday] = React.useState(new Date());
  const [sunday, setSunday] = React.useState(new Date());

  const handleNextWeekClick = () => {
    setMonday(new Date(monday.getTime() + 60 * 60 * 24 * 7 * 1000));
    setSunday(new Date(sunday.getTime() + 60 * 60 * 24 * 7 * 1000));
  };
  const handlePrevWeekClick = () => {
    setMonday(new Date(monday.getTime() - 60 * 60 * 24 * 7 * 1000));
    setSunday(new Date(sunday.getTime() - 60 * 60 * 24 * 7 * 1000));
  };

  const { auditoryName } = useParams();

  const [schedule, fetchSchedule, isLoading] = useFetch(
    () => ApiSchedule.getScheduleByAuditory(formatDate(monday), auditoryName),
    []
  );
  const [parsedSchedule, setParsedSchedule] = React.useState();

  React.useEffect(() => {
    const date = new Date();
    if (date.getDay() === 0) date.setDate(date.getDate() - 6);
    else date.setDate(date.getDate() - date.getDay() + 1);
    setMonday(date);
    setSunday(new Date(date.getTime() + 60 * 60 * 24 * 6 * 1000));
  }, []);

  React.useEffect(() => {
    if (monday.getDay() !== 1) return;
    fetchSchedule();
  }, [monday]);

  React.useEffect(() => {
    setParsedSchedule(formatSchedule(monday, schedule));
  }, [schedule]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar size={0.5} active={2} />
      </div>
      {monday.getDay() === 1 && (
        <Calendar
          monday={monday}
          sunday={sunday}
          title={`Расписание аудитории ${auditoryName}`}
          handleNextWeekClick={handleNextWeekClick}
          handlePrevWeekClick={handlePrevWeekClick}
        />
      )}
      <Schedule
        schedule={parsedSchedule}
        isLoading={isLoading}
        nonPairsMessage="В этот день в аудитории нет пар!"
      />
    </>
  );
};

export default AuditoryPage;
