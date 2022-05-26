import React from "react";

import AppRouter from "./components/Router/AppRouter";
import { useMediaQuery } from "@mui/material/";

function App() {
  const matches = useMediaQuery("(max-width: 40em)");

  return (
    <div
      style={{
        backgroundImage: !matches ? "url(/img/bg.png)" : "url(/img/bg_mob.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        width: "100%",
        height: matches ? "100%" : "100vh",
        display: "flex",
        flexDirection: matches ? "column-reverse" : "column",
        justifyContent: matches ? "space-between" : "",
      }}
    >
      <AppRouter />
    </div>
  );
}

export default App;
