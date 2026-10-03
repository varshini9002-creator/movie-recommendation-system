import React from "react";
import "../css/Pages.css";

function BookingHistory({ history }) {
  return (
    <div className="page-container">
      <h1>Booking History</h1>

      {history.length === 0 ? (
        <div className="no-bookings">
          <p>No bookings yet.</p>
        </div>
      ) : (
        <div>
          {history.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <h3>🎟️ Movie Ticket</h3>

              <p>Booking ID: {booking.id}</p>

             <p>Movie: {booking.movieTitle}</p>

              <p>Seats: {booking.seats.join(", ")}</p>

              <p>Total: ₹{booking.total}</p>

              <p>Date: {booking.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingHistory;