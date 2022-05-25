import React from "react";

import AppRouter from "./components/Router/AppRouter";
import { useMediaQuery } from "@mui/material/";

function App() {
  const matches = useMediaQuery("(max-width: 40em)");

  console.log(matches);
  return (
    <div
      style={{
        backgroundImage: "url(/img/bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: matches ? "center" : "bottom",
        width: "100%",
        height: matches ? "" : "100vh",
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
