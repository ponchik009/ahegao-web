import { useState } from "react";
import { getSchedule } from "./api/api";
import React from "react";
import "./App.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { useSpring } from "react-spring";
import { animated } from "react-spring";
import { Paper, Typography } from "@mui/material";

function App() {
  const [monday, setMonday] = React.useState(new Date());
  const [nowDate, setNowDate] = React.useState(new Date());
  const [schedule, setSchedule] = React.useState([]);

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const date = new Date();
    if (date.getDay() == 0) date.setDate(date.getDate() - 6);
    else date.setDate(date.getDate() - date.getDay() + 1);
    setMonday(date);
  }, []);

  React.useEffect(() => {
    if (monday.getDay() !== 1) return;

    getScheduleByGroup(monday.toISOString().split("T")[0], "Мумрики").then(
      (data) => {
        console.log(data);
        setSchedule(data);
      }
    );
  }, [monday]);

  return (
    <div>
      {/* <div>Текущая дата: {nowDate.toISOString().split("T")[0]}</div>
      <div>Начало недели: {monday.toISOString().split("T")[0]}</div> */}

      <Typography mt={2} ml={62} variant="h1" gutterBottom component="div">Расписание</Typography>

    <Box sx={{ width: '100%'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{marginLeft:'50px', marginTop:'230px'}} label="Расписание по группам" icon={<GroupIcon sx={{ fontSize: 100 }}/> } />
        <BottomNavigationAction style={{marginLeft:'100px', marginTop:'230px'}} label="Расписание по преподавателям" icon={<SchoolIcon sx={{ fontSize: 100 }}/>} />
        <BottomNavigationAction style={{marginLeft:'150px', marginTop:'230px'}} label="Расписание по аудиториям" icon={<MeetingRoomIcon sx={{ fontSize: 100 }}/>} />
      </BottomNavigation>
    </Box>
    <div className="App">
      <div>Текущая дата: {nowDate.toISOString().split("T")[0]}</div>
      <div>Начало недели: {monday.toISOString().split("T")[0]}</div>
      {schedule.length ? (
        <ul>
          {schedule.map((pair) => (
            <li key={pair.id} style={{ border: "1px solid black" }}>
              <div>{pair.discipline}</div>
              <div>День недели: {pair.day}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>Пар на эту неделю не найдено :C</div>
      )}
    </div>
    </div>
  );
}

export default App;
