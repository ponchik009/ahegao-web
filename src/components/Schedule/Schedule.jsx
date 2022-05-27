import React from "react";
import {
  Grid,
  Container,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";

import Weekday from "./Weekday";
import { useMediaQuery } from "@mui/material/";
import { isToday } from "../../utils/utils";

const Schedule = ({
  schedule,
  isLoading,
  errorMessage = "Не удалось получить раписание на данную неделю",
  nonPairsMessage = "Пар нет! Можно отдыхать!",
}) => {
  const matches = useMediaQuery("(max-width: 40em)");
  const [allOpen, setAllOpen] = React.useState([]);

  const handleAllOpen = () => {
    if (allOpen.length === 6) {
      setAllOpen([]);
    } else setAllOpen(Object.keys(schedule));
  };

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
          <Button onClick={handleAllOpen}>{`${
            allOpen.length === 6 ? "Закрыть все" : "Открыть все"
          }`}</Button>
          {Object.values(schedule).some((val) => val.length > 0) ? (
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
                  title={`${key} ${isToday(key) ? " (сегодня)" : ""}`}
                  pairs={pairs}
                  nonPairsMessage={nonPairsMessage}
                  expanded={allOpen.some((val) => val === key)}
                  onChange={(event, isExpanded) => {
                    !isExpanded
                      ? setAllOpen(allOpen.filter((val) => val !== key))
                      : setAllOpen([...allOpen, key]);
                  }}
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
