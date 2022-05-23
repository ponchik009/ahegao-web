import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const Navbar = ({ animated = false }) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
    // <nav className="nav">
    //   <div
    //     className={`nav_item group ${animated ? "anim_group" : ""}`}
    //     onClick={() => navigate("/groups", { state: { animated: true } })}
    //   >
    //     Группы
    //   </div>
    //   <div
    //     className="nav_item teacher"
    //     onClick={() => navigate("/groups", { state: { animated: true } })}
    //   >
    //     Преподаватели
    //   </div>
    //   <div
    //     className="nav_item auditory"
    //     onClick={() => navigate("/groups", { state: { animated: true } })}
    //   >
    //     Аудитории
    //   </div>
    // </nav>
    <Box sx={{ width: '100%'}} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ marginTop:'15px'}} label="Расписание по группам" icon={<GroupIcon fontSize="large"/>} 
         className={`nav_item group ${animated ? "anim_group" : ""}`}
         onClick={() => navigate("/groups", { state: { animated: true } })}/>
        <BottomNavigationAction style={{ marginTop:'15px'}} label="Расписание по преподавателям" icon={<SchoolIcon fontSize="large"/>} 
        className={`nav_item group ${animated ? "anim_group" : ""}`}
        onClick={() => navigate("/teachers", { state: { animated: true } })}/>
        <BottomNavigationAction style={{ marginTop:'15px'}} label="Расписание по аудиториям" icon={<MeetingRoomIcon fontSize="large"/>} 
        className={`nav_item group ${animated ? "anim_group" : ""}`}
        onClick={() => navigate("/auditories", { state: { animated: true } })}/>
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;
