import React from "react";
import { Container } from "@mui/material";

import ItemsList from "../../components/ItemsList/ItemsList";
import Navbar from "../../components/Navbar/Navbar";

const AuditoriesPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar size={0.5} active={2} />
      </div>
      <Container
        sx={{
          marginTop: `calc(2vh + 2vw)`,
          marginBottom: `calc(1vh + 1vw)`,
        }}
      >
        <ItemsList />
      </Container>
    </div>
  );
};

export default AuditoriesPage;
