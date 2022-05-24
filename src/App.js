import React from "react";

import AppRouter from "./components/Router/AppRouter";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.k50messut.fi/wp-content/uploads/2018/02/Muumimuseo_RGB_Vaaka_Nega_FIN.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right 10vw bottom -10vh",
        height: "100vh",
      }}
    >
      <AppRouter />
    </div>
  );
}

export default App;
