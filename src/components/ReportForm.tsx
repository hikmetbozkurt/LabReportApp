import React, { useState } from "react";
import {
  TextInput,
  Textarea,
  Button,
  Group,
  Box,
  Paper,
  Grid,
  Modal,
  Select,
  ActionIcon,
  Loader,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconMaximize, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const ReportForm = () => {
  const [fileNumber, setFileNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [diagnosisTitle, setDiagnosisTitle] = useState<string | null>(null);
  const [diagnosisDetails, setDiagnosisDetails] = useState("");
  const [reportDate, setReportDate] = useState<Date | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for submit button
  const [logoutModalOpened, setLogoutModalOpened] = useState(false); // Logout confirmation modal
  const [resetModalOpened, setResetModalOpened] = useState(false); // Reset confirmation modal
  const [deleteModalOpened, setDeleteModalOpened] = useState(false); // Delete confirmation modal

  const navigate = useNavigate();

  // Prevent numbers and special characters in First Name and Last Name (except for Turkish characters and spaces)
  const handleNameInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    const allowedKeys = /^[a-zA-ZğüşöçıİĞÜŞÖÇ ]+$/; // Allow letters, Turkish characters, and spaces
    if (
      !allowedKeys.test(key) &&
      key !== "Backspace" &&
      key !== "Delete" &&
      key !== "Tab"
    ) {
      event.preventDefault(); // Block invalid characters
    }
  };

  // Prevent non-numeric input in Patient ID and File Number
  const handleNumericInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    if (!/^\d$/.test(key) && key !== "Backspace" && key !== "Delete") {
      event.preventDefault(); // Block non-numeric characters
    }
  };

  // Handle form reset after confirmation
  const confirmReset = () => {
    setFileNumber("");
    setFirstName("");
    setLastName("");
    setPatientId("");
    setDiagnosisTitle(null);
    setDiagnosisDetails("");
    setReportDate(null);
    setResetModalOpened(false); // Close the modal after reset
  };

  // Handle form reset with confirmation modal
  const handleReset = () => {
    setResetModalOpened(true); // Open the reset confirmation modal
  };

  // Handle full screen toggle
  const handleToggleFullscreen = () => {
    setIsFullscreen((prevState) => !prevState);
  };

  // Handle delete action after confirmation
  const confirmDelete = () => {
    setFileNumber("");
    setFirstName("");
    setLastName("");
    setPatientId("");
    setDiagnosisTitle(null);
    setDiagnosisDetails("");
    setReportDate(null);
    setDeleteModalOpened(false); // Close the delete confirmation modal
  };

  // Handle delete with confirmation modal
  const handleDelete = () => {
    setDeleteModalOpened(true); // Open the delete confirmation modal
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    // Simulate network delay (e.g., form submission to server)
    setTimeout(() => {
      setIsLoading(false); // Hide loading spinner
      console.log({
        fileNumber,
        firstName,
        lastName,
        patientId,
        diagnosisTitle,
        diagnosisDetails,
        reportDate,
      });
    }, 1000); // Simulate a 1-second network delay
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        backgroundColor: "#2F4F4F",
        position: "relative",
      }}
    >
      <Group
        style={{
          position: "absolute",
          top: "-40px",
          right: "0",
          zIndex: 10,
        }}
      >
        <ActionIcon
          onClick={handleToggleFullscreen}
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          <IconMaximize size={20} />
        </ActionIcon>
        <ActionIcon onClick={handleDelete} title="Delete">
          <IconTrash size={20} color="red" />
        </ActionIcon>
        <Button size="m" color="red" onClick={() => setLogoutModalOpened(true)}>
          Log out
        </Button>
      </Group>

      {/* Logout confirmation modal */}
      <Modal
        opened={logoutModalOpened}
        onClose={() => setLogoutModalOpened(false)}
        title="Confirm Logout"
        centered
      >
        <p>Are you sure you want to log out?</p>
        <Group mt="md">
          <Button color="red" onClick={() => navigate("/")}>
            Yes
          </Button>
          <Button onClick={() => setLogoutModalOpened(false)}>No</Button>
        </Group>
      </Modal>

      {/* Reset confirmation modal */}
      <Modal
        opened={resetModalOpened}
        onClose={() => setResetModalOpened(false)}
        title="Confirm Reset"
        centered
      >
        <p>Are you sure you want to reset the form?</p>
        <Group mt="md">
          <Button color="red" onClick={confirmReset}>
            Yes, Reset
          </Button>
          <Button onClick={() => setResetModalOpened(false)}>No, Cancel</Button>
        </Group>
      </Modal>

      {/* Delete confirmation modal */}
      <Modal
        opened={deleteModalOpened}
        onClose={() => setDeleteModalOpened(false)}
        title="Confirm Delete"
        centered
      >
        <p>Are you sure you want to delete all data?</p>
        <Group mt="md">
          <Button color="red" onClick={confirmDelete}>
            Yes, Delete
          </Button>
          <Button onClick={() => setDeleteModalOpened(false)}>
            No, Cancel
          </Button>
        </Group>
      </Modal>

      <Paper
        shadow="md"
        radius="md"
        p="xl"
        style={{
          width: isFullscreen ? "100%" : "80%", // Toggle between full width and 80%
          maxWidth: isFullscreen ? "100%" : "800px", // Adjust the max width based on fullscreen
          backgroundColor: "#708090", // SlateGrey
          padding: "40px",
          borderRadius: "10px",
          minHeight: "40vh",
          transition: "width 0.3s ease", // Smooth transition when toggling fullscreen
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="First Name"
                placeholder="Enter patient's first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyDown={handleNameInput} // Input validation for names
                required
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Last Name"
                placeholder="Enter patient's last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onKeyDown={handleNameInput} // Input validation for names
                required
              />
            </Grid.Col>
          </Grid>

          <Grid mt="md">
            <Grid.Col span={6}>
              <TextInput
                label="File Number"
                placeholder="Enter file number"
                value={fileNumber}
                onChange={(e) => setFileNumber(e.target.value)}
                onKeyDown={handleNumericInput} // Numeric validation for file number
                required
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Patient ID"
                placeholder="Enter patient ID"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                onKeyDown={handleNumericInput} // Numeric validation for patient ID
                required
              />
            </Grid.Col>
          </Grid>

          <Select
            label="Diagnosis Title"
            placeholder="Select diagnosis title"
            value={diagnosisTitle}
            onChange={setDiagnosisTitle}
            data={[
              { value: "Complete Blood Count", label: "Complete Blood Count" },
              { value: "Liver Function Test", label: "Liver Function Test" },
              { value: "Kidney Function Test", label: "Kidney Function Test" },
              { value: "Urinalysis", label: "Urinalysis" },
              {
                value: "Thyroid Function Test",
                label: "Thyroid Function Test",
              },
              { value: "Lipid Panel", label: "Lipid Panel" },
              { value: "Blood Glucose Test", label: "Blood Glucose Test" },
              { value: "Electrolyte Panel", label: "Electrolyte Panel" },
              { value: "Coagulation Profile", label: "Coagulation Profile" },
              {
                value: "Inflammatory Marker Test",
                label: "Inflammatory Marker Test",
              },
            ]}
            required
            mt="md"
          />

          <Textarea
            label="Diagnosis Details"
            placeholder="Enter diagnosis details"
            value={diagnosisDetails}
            onChange={(e) => setDiagnosisDetails(e.target.value)}
            required
            mt="md"
            minRows={5}
            autosize
          />

          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Select a Date
          </p>
          <DateInput
            value={reportDate}
            onChange={setReportDate}
            required
            placeholder="Select a Date"
          />

          <Group mt="xl" style={{ justifyContent: "center" }}>
            <Button type="submit" fullWidth color="blue" disabled={isLoading}>
              {isLoading ? <Loader color="white" size="sm" /> : "Submit Report"}
            </Button>
          </Group>

          <Group mt="md" style={{ justifyContent: "center" }}>
            <Button
              //variant="light"
              color="red"
              fullWidth
              onClick={() => navigate("/home")}
            >
              Go Back
            </Button>
          </Group>
        </form>
      </Paper>
    </Box>
  );
};

export default ReportForm;
