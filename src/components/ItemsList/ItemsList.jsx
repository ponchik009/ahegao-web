import React from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";

import Item from "./Item";

const ItemsList = ({
  items = Array(16).fill("Проверка"),
  errorMessage = "Ошибка! Данных нет!",
  isLoading = false,
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
      ) : items.length ? (
        <Grid
          container
          spacing={{
            xs: 1,
            sm: 2,
            md: 4,
          }}
          alignItems="center"
        >
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={`${item}_${index}`}>
              <Item name={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "10vh" }}>{errorMessage}</Typography>
        </div>
      )}
    </>
  );
};

export default ItemsList;
