import { useState } from "react";
import { Button, Input, Modal, Toast, Loader } from "../components/ui";

function Showcase() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#f4f6f8",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1 style={{ textAlign: "center" }}>
        EcoStay AI Component Showcase
      </h1>

      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Reusable UI Components for Week 3 Deliverable
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
          maxWidth: "700px",
          margin: "auto",
        }}
      >
        <div
          style={{
            padding: "20px",
            background: darkMode ? "#333" : "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Button Component</h3>
          <Button text="Book Stay" />
        </div>

        <div
          style={{
            padding: "20px",
            background: darkMode ? "#333" : "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Input Component</h3>
          <Input placeholder="Search EcoStay" />
        </div>

        <div
          style={{
            padding: "20px",
            background: darkMode ? "#333" : "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Modal Component</h3>
          <Modal />
        </div>

        <div
          style={{
            padding: "20px",
            background: darkMode ? "#333" : "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Toast Component</h3>
          <Toast />
        </div>

        <div
          style={{
            padding: "20px",
            background: darkMode ? "#333" : "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Loader Component</h3>
          <Loader />
        </div>
      </div>
    </div>
  );
}

export default Showcase;