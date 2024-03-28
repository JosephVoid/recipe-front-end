import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Banner from "./components/banner";

function App() {
  return (
    <div className="flex h-screen">
      <Dashboard />
      <Banner />
    </div>
  );
}

export default App;
