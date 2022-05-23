import { Button, Typography } from "@mui/material";
import React from "react";

const ItemsList = () => {
  return (
    <Button style ={{width: 200, height: 100, cursor:'pointer'}} variant="outlined">
        <Typography sx={{ display: "flex",
          justifyContent: "space-around",
          alignItems: "center" }}>Проверка</Typography>
    </Button>
  );
};

export default ItemsList;