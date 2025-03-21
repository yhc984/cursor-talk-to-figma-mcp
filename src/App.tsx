import React from "react";
import ProductPage from "./components/ProductPage";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <ProductPage />
    </div>
  );
};

export default App;
