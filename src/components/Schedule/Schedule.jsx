import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Container } from "@mui/material";

const Schedule = () => {
  return (
    <Container
      style={{
        marginTop: `calc(2vh + 5vw)`,
        marginBottom: `calc(1vh + 1vw)`,
      }}
    >
      <Grid
        container
        spacing={{
          xs: 1,
          sm: 2,
          md: 4,
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Accordion style={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Понедельник</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Расписание на понедельник</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Accordion style={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Вторник</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Расписание на вторник</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Accordion style={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Среда</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Расписание на среду</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Accordion style={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Четверг</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Расписание на четверг</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Accordion style={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Пятница</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Расписание на пятницу</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Accordion style={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Суббота</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Расписание на субботу</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Schedule;
