import React from "react";
import { Container, IconButton, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material/";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { getWeekdayAsKey } from "../../utils/utils";

const Calendar = ({
  monday,
  sunday,
  title,
  handleNextWeekClick,
  handlePrevWeekClick,
}) => {
  const matches = useMediaQuery("(max-width: 40em)");

  return (
    <Container
      sx={{
        paddingBottom: "1vh",
        paddingTop: "1vh",
        position: matches ? "fixed" : "",
        marginTop: !matches ? "4vw" : "",
        top: matches ? 0 : "",
        zIndex: 9999,
        backgroundColor: matches ? "#F4CD8A" : "#F5F5DC",
      }}
    >
      <>
        <Typography sx={{ textAlign: "center", fontSize: "calc(2vh + 1vw)" }}>
          {title}
        </Typography>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handlePrevWeekClick}>
            <ArrowBackIosIcon />
          </IconButton>
          <div style={{ fontSize: "calc(2vh + 1vw)" }}>
            {`${getWeekdayAsKey(monday).split(", ")[1]} -
        ${getWeekdayAsKey(sunday).split(", ")[1]}`}
          </div>
          <IconButton onClick={handleNextWeekClick}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Container>
      </>
    </Container>
  );
};

export default Calendar;
