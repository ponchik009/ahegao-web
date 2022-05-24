import React from "react";
import { Container } from "@mui/material";

import ItemsList from "../../components/ItemsList/ItemsList";
import Navbar from "../../components/Navbar/Navbar";
import { ApiData } from "../../api/api";
import { useFetch } from "../../hooks/UseFetch";

const AuditoriesPage = () => {
  const [auditories, fetchAuditories, isLoading] = useFetch(
    ApiData.getAuditories
  );

  React.useEffect(() => {
    fetchAuditories();
  }, []);

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
        <ItemsList
          items={auditories}
          errorMessage="Аудиторий не найдено!"
          isLoading={isLoading}
        />
      </Container>
    </div>
  );
};

export default AuditoriesPage;
