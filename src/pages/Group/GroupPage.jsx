import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Schedule from "../../components/Schedule/Schedule";
import { ApiSchedule } from "../../api/api";

const GroupPage = () => {
  const [monday, setMonday] = React.useState(new Date());
  const [nowDate, setNowDate] = React.useState(new Date());

  const [schedule, setSchedule] = React.useState([]);

  React.useEffect(() => {
    const date = new Date();
    if (date.getDay() == 0) date.setDate(date.getDate() - 6);
    else date.setDate(date.getDate() - date.getDay() + 1);
    setMonday(date);
  }, []);

  React.useEffect(() => {
    if (monday.getDay() !== 1) return;

    ApiSchedule.getScheduleByGroup(
      monday.toISOString().split("T")[0],
      "Мумрики"
    ).then((data) => {
      setSchedule(data);
    });
  }, [monday]);

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
      <Schedule />
    </>
  );
};

export default GroupPage;
