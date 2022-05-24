import React from "react";
import { Grid } from "@mui/material";

import Item from "./Item";

const ItemsList = ({ items = Array(16).fill("Проверка") }) => {
  return (
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
  );
};

export default ItemsList;
