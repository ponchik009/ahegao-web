import React from "react";
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
    </div>
  );
};

export default TeachersPage;
