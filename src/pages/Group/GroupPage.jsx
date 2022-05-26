import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Schedule from "../../components/Schedule/Schedule";
import { ApiSchedule } from "../../api/api";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/UseFetch";
import { formatDate, formatSchedule } from "../../utils/utils";

const GroupPage = () => {
  const [monday, setMonday] = React.useState(new Date());
  const [nowDate, setNowDate] = React.useState(new Date());

  const { groupName } = useParams();

  const [schedule, fetchSchedule, isLoading] = useFetch(
    () => ApiSchedule.getScheduleByGroup(formatDate(monday), groupName),
    []
  );
  const [parsedSchedule, setParsedSchedule] = React.useState();

  React.useEffect(() => {
    const date = new Date();
    if (date.getDay() == 0) date.setDate(date.getDate() - 6);
    else date.setDate(date.getDate() - date.getDay() + 1);
    setMonday(date);
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
        <Navbar size={0.5} active={0} />
      </div>
      <Schedule schedule={parsedSchedule} isLoading={isLoading} />
    </>
  );
};

export default GroupPage;
