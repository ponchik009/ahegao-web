import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "10vw", marginTop: `calc(4vw + 4vh)` }}>
        Расписание
      </Typography>
      <Navbar />
    </div>
  );
};

export default HomePage;
