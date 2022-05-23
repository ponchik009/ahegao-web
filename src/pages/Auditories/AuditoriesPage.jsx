import React from "react";

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
    </div>
  );
};

export default AuditoriesPage;
