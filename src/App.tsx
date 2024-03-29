import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Banner from "./components/banner";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex h-screen">
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
      <Banner />
    </div>
  );
}

export default App;
