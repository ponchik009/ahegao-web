import React from "react";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material/";

import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  const matches = useMediaQuery("(max-width: 40em)");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "calc(3vh + 3vw)",
          marginTop: `calc(1vw - 1vh)`,
          color: "#0E5157",
          marginTop: matches ? "30vh" : "0",
          marginBottom: matches ? "42vh" : "0",
          textAlign: "center",
        }}
      >
        Расписание университета мумми-дола
      </Typography>
      <Navbar />
    </div>
  );
};

export default HomePage;
