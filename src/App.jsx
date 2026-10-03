import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Booking from "./pages/Booking";
import BookingHistory from "./pages/BookingHistory";
import "./App.css";
import movieBg from "./assets/movie-bg.jpg";

function App() {
  const [history, setHistory] = useState([]);

  const confirmBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: Date.now()
    };

    setHistory((previousHistory) => [
      ...previousHistory,
      newBooking
    ]);
  };

return (
  <BrowserRouter>
    <div
  className="app-background"
  style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.45)), url(${movieBg})` }}
>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route
          path="/booking"
          element={<Booking confirmBooking={confirmBooking} />}
        />

        <Route
          path="/history"
          element={<BookingHistory history={history} />}
        />
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App;