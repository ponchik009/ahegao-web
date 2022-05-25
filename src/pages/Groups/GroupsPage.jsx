import React from "react";
import { CircularProgress, Container } from "@mui/material";

import ItemsList from "../../components/ItemsList/ItemsList";
import Navbar from "../../components/Navbar/Navbar";
import { ApiData } from "../../api/api";
import { useFetch } from "../../hooks/UseFetch";

const GroupsPage = () => {
  const [groups, fetchGroups, isLoading] = useFetch(ApiData.getGroups, []);

  React.useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar size={0.5} active={0} />
      </div>
      <Container
        sx={{
          marginTop: `calc(2vh + 2vw)`,
          marginBottom: `calc(1vh + 1vw)`,
        }}
      >
        <ItemsList
          items={groups}
          errorMessage="Групп не найдено!"
          isLoading={isLoading}
        />
      </Container>
    </>
  );
};

export default GroupsPage;
