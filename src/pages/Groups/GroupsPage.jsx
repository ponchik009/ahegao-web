import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import "./GroupsPage.css";

const GroupsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => navigate("/groups/Мумрики")}>Мумрики</div>
    </div>
  );
};

export default GroupsPage;
