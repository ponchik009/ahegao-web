import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

function Groupss() {
  const [value, setValue] = React.useState(0);
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.k50messut.fi/wp-content/uploads/2018/02/Muumimuseo_RGB_Vaaka_Nega_FIN.png)",
        backgroundSize: "cover",
        width: "100%",
        height: "90vh",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            style={{ marginTop: "15px" }}
            label="Расписание по группам"
            icon={<GroupIcon fontSize="large" />}
          />
          <BottomNavigationAction
            style={{ marginTop: "15px" }}
            label="Расписание по преподавателям"
            icon={<SchoolIcon fontSize="large" />}
          />
          <BottomNavigationAction
            style={{ marginTop: "15px" }}
            label="Расписание по аудиториям"
            icon={<MeetingRoomIcon fontSize="large" />}
          />
        </BottomNavigation>
      </Box>

      <div>
        <Container maxWidth="md" style={{ marginTop: "130px" }}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} md={4}>
              <Accordion style={{ width: "250px" }}>
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
              <Accordion style={{ width: "250px" }}>
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
              <Accordion style={{ width: "250px" }}>
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
              <Accordion style={{ width: "250px" }}>
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
              <Accordion style={{ width: "250px" }}>
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
              <Accordion style={{ width: "250px" }}>
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
      </div>
    </div>
  );
}

export default Groupss;
