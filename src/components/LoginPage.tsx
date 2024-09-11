import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button, Box, Paper, Group, Text } from '@mantine/core';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Array of valid username-password pairs
  const validUsers = [
    { username: "hikmet", password: "hikmet123" },
    { username: "hikmet06", password: "hikmet0606" },
    { username: "hkmt06", password: "1234hkmt" },
    { username: "Hikmet06", password: "hikmet0606" },
    { username: "denizozgun06", password: "deniz06" },
    { username: "admin", password: "admin" }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the entered username and password match a valid user
    const user = validUsers.find((user) => user.username === username && user.password === password);

    if (user) {
      navigate('/report-form'); // Navigate to the ReportForm page if credentials are correct
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        backgroundColor: '#2F4F4F', // Match the background color with ReportForm
        position: 'relative',
      }}
    >
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        style={{
          width: '100%',
          maxWidth: '400px', // Make it consistent with ReportForm
          backgroundColor: '#708090', // SlateGrey color like ReportForm
          borderRadius: '10px',
          minHeight: '30vh',
        }}
      >
        <form onSubmit={handleLogin}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px' }} mb="md">
            Login
          </Text>
          <TextInput
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            mb="md"
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            mb="md"
          />

          {error && (
            <Text color="red" size="sm" style={{ marginBottom: '10px' }}>
              {error}
            </Text>
          )}

          <Group mt="xl" style={{ justifyContent: 'center' }}>
            <Button type="submit" fullWidth color="blue">
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
