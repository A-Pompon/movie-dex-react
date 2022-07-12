import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LikedList from "./pages/LikedList";
import WatchedList from "./pages/WatchedList";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/liked-list" element={<LikedList />} />
        <Route path="/watched-list" element={<WatchedList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
