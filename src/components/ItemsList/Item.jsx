import React from "react";
import { Button, Typography } from "@mui/material";

const Item = ({ name }) => {
  return (
    <Button
      style={{ cursor: "pointer", width: "100%", height: `10vh` }}
      variant="outlined"
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {name}
      </Typography>
    </Button>
  );
};

export default Item;
