import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFilm, FaHome, FaTicketAlt } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 onClick={() => navigate("/")}>
        <FaFilm /> MovieHub
      </h2>

      <div className="nav-links">
        <button onClick={() => navigate("/")}>
          <FaHome /> Home
        </button>

        <button onClick={() => navigate("/history")}>
          <FaTicketAlt /> Booking History
        </button>
      </div>
    </nav>
  );
}

export default Navbar;