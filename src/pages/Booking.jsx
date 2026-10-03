import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SeatSelection from "../components/SeatSelection";
import "../css/Pages.css";

function Booking({ confirmBooking }) {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

const movieId = params.get("movieId");
const movieTitle = params.get("movieTitle");

  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = (seats, total) => {
   confirmBooking({
  movieId,
  movieTitle,
  seats,
  total,
  date: new Date().toLocaleString()
});

    setConfirmed(true);
  };

  return (
    <div className="page-container">
      <h1>Book Your Tickets</h1>

      {confirmed ? (
        <div className="confirmation">
          <h2>✓ Booking Confirmed!</h2>

          <p>Your tickets have been booked successfully.</p>

          <button onClick={() => navigate("/history")}>
            View Booking History
          </button>
        </div>
      ) : (
        <SeatSelection onConfirm={handleConfirm} />
      )}
    </div>
  );
}

export default Booking;