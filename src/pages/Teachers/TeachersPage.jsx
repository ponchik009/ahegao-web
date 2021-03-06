import React from "react";
import { Container } from "@mui/material";

import ItemsList from "../../components/ItemsList/ItemsList";
import Navbar from "../../components/Navbar/Navbar";
import { useFetch } from "../../hooks/UseFetch";
import { ApiData } from "../../api/api";

const TeachersPage = () => {
  const [teachers, fetchTeachers, isLoading] = useFetch(
    ApiData.getTeachers,
    []
  );

  React.useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <Navbar size={0.5} active={1} />
      </div>
      <Container
        sx={{
          marginTop: `calc(2vh + 2vw)`,
        }}
      >
        <ItemsList
          items={teachers}
          errorMessage="Преподавателей не найдено!"
          isLoading={isLoading}
        />
      </Container>
    </>
  );
};

export default TeachersPage;
