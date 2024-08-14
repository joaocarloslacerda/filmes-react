import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Page/Home";
import { MovieDetails } from "../Page/MovieDetails";

export const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home /> } />

    <Route path="/MovieDetails" element={<MovieDetails />} />

    <Route path="*" element={<Navigate to='/'/>} />
  </Routes>
  );
};