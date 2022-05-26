import React from "react";
import { Grid, Container, CircularProgress, Typography } from "@mui/material";

import Weekday from "./Weekday";
import { useMediaQuery } from "@mui/material/";

const Schedule = ({
  schedule,
  isLoading,
  errorMessage = "Не удалось получить раписание на данную неделю",
  nonPairsMessage = "Пар нет! Можно отдыхать!",
}) => {
  const matches = useMediaQuery("(max-width: 40em)");
  const [nowDate, setNowDate] = React.useState(new Date());

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: matches ? `calc(30vh + 14vw)` : "calc(1.5vw + 1.5vh)",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Container
          style={{
            marginTop: matches ? `calc(10vh + 14vw)` : "calc(1.5vw + 1.5vh)",
            marginBottom: `calc(10vh + 5vw)`,
          }}
        >
          {schedule ? (
            <Grid
              container
              spacing={{
                xs: 1,
                sm: 2,
                md: 4,
              }}
            >
              {Object.entries(schedule).map(([key, pairs], index) => (
                <Weekday
                  key={key}
                  title={`${key} ${
                    index + 1 === nowDate.getDay() ? " (сегодня)" : ""
                  }`}
                  pairs={pairs}
                  nonPairsMessage={nonPairsMessage}
                />
              ))}
            </Grid>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={{ fontSize: "5vh" }}>{errorMessage}</Typography>
            </div>
          )}
        </Container>
      )}
    </>
  );
};

export default Schedule;
