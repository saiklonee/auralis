import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import IndexPage from "./pages/IndexPage";
import CategoryPage from "./pages/CategoryPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      {" "}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f2937",
            color: "white",
            border: "1px solid #374151",
          },
          success: {
            style: {
              background: "#065f46",
              color: "white",
              border: "1px solid #047857",
            },
          },
          error: {
            style: {
              background: "#7f1d1d",
              color: "white",
              border: "1px solid #dc2626",
            },
          },
          loading: {
            style: {
              background: "#1e40af",
              color: "white",
              border: "1px solid #3b82f6",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<IndexPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
