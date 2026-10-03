import React, { useState } from "react";
import "../css/SeatSelection.css";

function SeatSelection({ onConfirm }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 20 }, (_, index) => index + 1);
  const price = 150;

  const selectSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const total = selectedSeats.length * price;

  return (
    <div className="seat-container">
      <h2>Select Your Seats</h2>

      <div className="screen">SCREEN</div>

      <div className="seat-grid">
        {seats.map((seat) => (
          <button
            key={seat}
            className={selectedSeats.includes(seat) ? "selected" : "seat"}
            onClick={() => selectSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>

      <p>
        Selected Seats: {selectedSeats.join(", ") || "None"}
      </p>

      <h3>Total: ₹{total}</h3>

      <button
        disabled={selectedSeats.length === 0}
        onClick={() => onConfirm(selectedSeats, total)}
      >
        Confirm Seats
      </button>
    </div>
  );
}

export default SeatSelection;