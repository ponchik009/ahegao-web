import { Container, Grid } from "@mui/material";
import React from "react";
import ItemsList from "../../components/ItemsList/ItemsList";
import Navbar from "../../components/Navbar/Navbar";

const TeachersPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar size={0.5} active={1} />
      </div>
      <div>
      <Container maxWidth="md" style={{ marginTop: "130px" }}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemsList/>
            </Grid>
          </Grid>
      </Container>
      </div>
    </div>
  );
};

export default TeachersPage;
