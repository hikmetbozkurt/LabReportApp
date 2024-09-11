import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Title, Center } from '@mantine/core';
import ReportForm from './components/ReportForm';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',             // Use Flexbox for centering
          justifyContent: 'center',    // Horizontally center the Container
          alignItems: 'center',        // Vertically center the Container
          minHeight: '100vh',          // Ensure the div takes up the full viewport height
          backgroundColor: '#f0f4f8',  // Page background color
        }}
      >
        <Container
          style={{
            backgroundColor: '#2F4F4F',  // Dark green background color
            padding: '20px',            // Optional padding for spacing
            borderRadius: '10px',       // Rounded corners for the Container
            height: '90vh',             // Set the Container height to 90% of viewport height
            margin: '20px',             // Add margin to ensure some space around the form
            maxWidth: '800px',          // Set a maximum width for the form
            width: '100%',              // Let the form take up the available width within max-width
          }}
        >
          <Center mt="md">
            <Title order={1} style={{ color: '#FFFFFF' }}> {/* White text for better contrast */}
              Laborant Report Form
            </Title>
          </Center>
          <Routes>
            {/* Default route is the login page */}
            <Route path="/" element={<LoginPage />} />

            {/* Route for the report form page */}
            <Route path="/report-form" element={<ReportForm />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
