import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { styled } from "@mui/material";
import { useMediaQuery } from "@mui/material/";

// import "./Navbar.css";

const Navbar = ({ size = 1, active }) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(active);
  const matches = useMediaQuery("(max-width: 40em)");

  const StyledAction = styled(BottomNavigationAction)`
    & .MuiBottomNavigationAction-label {
      font-size: calc((1.5vh + 1.5vw) * ${matches ? 0.6 : size});
    }
    & .Mui-selected {
      font-size: calc((1.5vh + 2vw) * ${matches ? 0.6 : size});
    }
  `;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: () => (size == 1 ? "15vh" : "5vh"),
          px: "10vw",
          "@media screen and (max-width: 40em)": {
            flexDirection: "row",
            // height: () => size == 1 && "80vh",
            paddingBottom: "2vh",
            paddingTop: "2vh",
            position: "fixed",
            bottom: 0,
            zIndex: 9999,
            backgroundColor: "#F4CD8A",
          },
        }}
      >
        <StyledAction
          label="Расписание по группам"
          icon={
            <GroupIcon
              sx={{ fontSize: `calc((5vh + 3vw) * ${matches ? 0.6 : size})` }}
            />
          }
          onClick={() => {
            navigate("/groups");
          }}
        />
        <StyledAction
          label="Расписание по преподавателям"
          icon={
            <SchoolIcon
              sx={{ fontSize: `calc((5vh + 3vw) * ${matches ? 0.6 : size})` }}
            />
          }
          onClick={() => navigate("/teachers")}
        />
        <StyledAction
          label="Расписание по аудиториям"
          icon={
            <MeetingRoomIcon
              sx={{ fontSize: `calc((5vh + 3vw) * ${matches ? 0.6 : size})` }}
            />
          }
          onClick={() => navigate("/auditories")}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;
