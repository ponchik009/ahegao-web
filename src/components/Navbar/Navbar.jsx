import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ animated = false }) => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div
        className={`nav_item group ${animated ? "anim_group" : ""}`}
        onClick={() => navigate("/groups", { state: { animated: true } })}
      >
        Группы
      </div>
      <div
        className="nav_item teacher"
        onClick={() => navigate("/groups", { state: { animated: true } })}
      >
        Преподаватели
      </div>
      <div
        className="nav_item auditory"
        onClick={() => navigate("/groups", { state: { animated: true } })}
      >
        Аудитории
      </div>
    </nav>
  );
};

export default Navbar;
