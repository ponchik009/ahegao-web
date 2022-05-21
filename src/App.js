import React from "react";
import { getSchedule } from "./api/api";
import "./App.css";

function App() {
  const [monday, setMonday] = React.useState(new Date());
  const [nowDate, setNowDate] = React.useState(new Date());

  const [schedule, setSchedule] = React.useState([]);

  React.useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + 1);
    setMonday(date);
  }, []);

  React.useEffect(() => {
    setSchedule(getSchedule(monday.toISOString().split("T")[0], "Мумрики"));
  }, [monday]);

  return (
    <div className="App">
      <div>Текущая дата: {nowDate.toISOString().split("T")[0]}</div>
      <div>Начало недели: {monday.toISOString().split("T")[0]}</div>
    </div>
  );
}

export default App;
