import React from "react";

import AppRouter from "./components/Router/AppRouter";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://psv4.userapi.com/c537232/u349779404/docs/d3/48c1c57a5d6e/fon.png?extra=mRu1rpNTn6mEeig7qiGIVeVumISB-yWS68Iy1K2H87pAJ8VQCzFCliY1vKhiA4ms_8aRP_PslvqA_rbYr9USOmvG_c0GjsQu3A6dYxEOo2zCdaSEDVjyYJpUKtkYJV__sVADPSwIoDfN8CbPL6CETMwy)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        
        width: '100%',
        height: "100vh",
      }}
    >
      <AppRouter />
    </div>
  );
}

export default App;
