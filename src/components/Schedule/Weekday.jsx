import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider, Grid } from "@mui/material";
import { getPairByType } from "../../utils/utils";

const Weekday = ({ title, pairs, nonPairsMessage }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Accordion style={{ width: "100%", backgroundColor: "#F5F5DC	" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: "calc(3vh + 0.05vw)" }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {pairs && pairs.length ? (
            pairs.map((pair) => (
              <div key={pair.id}>
                {/* Название пары */}
                <Typography
                  sx={{ fontWeight: "bold" }}
                >{`${pair.pair}. ${pair.discipline}`}</Typography>
                {/* Преподавател(ь/и) */}
                <Typography>
                  {pair.teachers
                    ? `${
                        pair.teachers.length > 1
                          ? "Преподаватели"
                          : "Преподаватель"
                      }: ${pair.teachers.join(", ")}`
                    : "Самостоятельная пара"}
                </Typography>
                {/* Аудитори(я/и) */}
                <Typography>{`${
                  pair.auditories.length > 1 ? "Места" : "Место"
                } проведения: ${pair.auditories.join(", ")}`}</Typography>
                {/* Групп(а/ы) */}
                <Typography>{`${
                  pair.groups.length > 1 ? "Группы" : "Группа"
                }: ${pair.groups.join(", ")}`}</Typography>
                <Typography>{`${getPairByType(pair.type)} ${
                  pair.subgroup_number
                    ? `, подгруппа ${pair.subgroup_number}`
                    : ""
                }`}</Typography>
                <Divider />
              </div>
            ))
          ) : (
            <Typography>{nonPairsMessage}</Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default Weekday;
