import React from "react";
import {
  Grid,
  Card,
  Image,
  Text,
  Button,
  Group,
  Center,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faFileLines,
  faFlask,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        marginTop: "30px",
        borderRadius: "10px",
        backgroundColor: "#B0C4DE", // LightSteelBlue
      }}
    >
      <div style={{ width: "80%", maxWidth: "800px" }}>
        <Center>
          <Title
            order={1}
            style={{
              marginBottom: "30px",
              fontStyle: "italic", // Italic text
              fontWeight: "bold", // Bold for extra emphasis
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Subtle shadow for depth
              color: "#FFB6C1", // lightPink
            }}
          >
            Lab Management System
          </Title>
        </Center>
        <Grid>
          {/* Create a Report Card */}
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                {/* Replacing Image with FontAwesome Icon */}
                <div
                  style={{
                    height: "160px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FFB6C1",
                  }}
                >
                  <FontAwesomeIcon icon={faFileLines} size="6x" />
                </div>
              </Card.Section>
              <Group
                style={{
                  marginTop: "md",
                  marginBottom: "xs",
                  justifyContent: "center",
                }}
              >
                <Text fw={500}>Create a Report</Text>
              </Group>
              <Text size="sm" color="dimmed">
                Start creating a new patient report by filling out the necessary
                details.
              </Text>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => navigate("/report-form")}
              >
                Create Report
              </Button>
            </Card>
          </Grid.Col>

          {/* Patient's Reports Card */}
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <div
                  style={{
                    height: "160px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FFB6C1",
                  }}
                >
                  <FontAwesomeIcon icon={faBoxArchive} size="6x" />
                </div>
              </Card.Section>
              <Group
                style={{
                  marginTop: "md",
                  marginBottom: "xs",
                  justifyContent: "center",
                }}
              >
                <Text fw={500}>Patient's Reports</Text>
              </Group>
              <Text size="sm" color="dimmed">
                View or manage previously created reports for all patients.
              </Text>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                View Reports
              </Button>
            </Card>
          </Grid.Col>

          {/* View Lab Tests Card */}
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <div
                  style={{
                    height: "160px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FFB6C1",
                  }}
                >
                  <FontAwesomeIcon icon={faFlask} size="6x" />
                </div>
              </Card.Section>
              <Group
                style={{
                  marginTop: "md",
                  marginBottom: "xs",
                  justifyContent: "center",
                }}
              >
                <Text fw={500}>View Lab Tests</Text>
              </Group>
              <Text size="sm" color="dimmed">
                View available lab tests and manage the tests in the system.
              </Text>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                View Lab Tests
              </Button>
            </Card>
          </Grid.Col>

          {/* Submit Results Card */}
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <div
                  style={{
                    height: "160px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FFB6C1",
                  }}
                >
                  <FontAwesomeIcon icon={faShareFromSquare} size="6x" />
                </div>
              </Card.Section>
              <Group
                style={{
                  marginTop: "md",
                  marginBottom: "xs",
                  justifyContent: "center",
                }}
              >
                <Text fw={500}>Submit Results</Text>
              </Group>
              <Text size="sm" color="dimmed">
                Submit results for lab tests and manage test submissions.
              </Text>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Submit Results
              </Button>
            </Card>
          </Grid.Col>

          {/* Logout Button */}
          <Grid.Col span={12}>
            <Center mt="md">
              <Button
                size="md"
                color="red"
                //variant="outline"
                onClick={() => navigate("/")}
              >
                Logout
              </Button>
            </Center>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
