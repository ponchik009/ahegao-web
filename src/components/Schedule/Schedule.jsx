import React from "react";
import { Grid, Container, CircularProgress, Typography } from "@mui/material";

import Weekday from "./Weekday";

const Schedule = ({
  schedule,
  isLoading,
  errorMessage = "Не удалось получить раписание на данную неделю",
  nonPairsMessage = "Пар нет! Можно отдыхать!",
}) => {
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Container
          style={{
            marginTop: `calc(2vh + 5vw)`,
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
              {Object.entries(schedule).map(([key, pairs]) => (
                <Weekday
                  key={key}
                  title={key}
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
