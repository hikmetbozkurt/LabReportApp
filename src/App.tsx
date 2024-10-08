import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Title, Center } from "@mantine/core";
import ReportForm from "./components/ReportForm";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage"; // Import the new HomePage
import "./App.css";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex", // Use Flexbox for centering
          justifyContent: "center", // Horizontally center the Container
          alignItems: "center", // Vertically center the Container
          minHeight: "100vh", // Ensure the div takes up the full viewport height
          backgroundColor: "#FFF8DC", // Page background color : Cornsilk
        }}
      >
        <Container
          style={{
            backgroundColor: "#2F4F4F", // Dark green background color for consistency
            padding: "20px",
            borderRadius: "10px",
            height: "90vh", // Consistent container height for pages
            margin: "20px",
            maxWidth: "800px", // Maintain 800px width for consistency
            width: "100%",
          }}
        >
          <Center mt="md">
            <Title
              order={1}
              style={{
                //fontStyle: "italic", // Italic text
                fontWeight: "bold", // Bold for extra emphasis
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Subtle shadow for depth
                color: "#FFB6C1", // lightPink
                fontFamily: "sans-serif",
              }}
            >
              {" "}
              {/* White text for better contrast */}
              Laborant Report App
            </Title>
          </Center>
          <Routes>
            {/* Default route is the login page */}
            <Route path="/" element={<LoginPage />} />

            {/* Route for the home page */}
            <Route path="/home" element={<HomePage />} />

            {/* Route for the report form page */}
            <Route path="/report-form" element={<ReportForm />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
