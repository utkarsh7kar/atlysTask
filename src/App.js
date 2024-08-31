import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MainFeed from "./components/MainFeed";
import RegisterPage from "./components/RegisterPage";
import UserProvider  from './contexts/user.context';

import "./App.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<LandingPage />} />
          <Route path="/main-feed" element={<MainFeed />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<RegisterPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
