import { useState, useContext } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import axios from "axios";
import { Context } from "../../App.jsx";
import config from "../../config.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  const url = config.apiUrl + "user/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        url,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.message) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      setError("Ha ocurrido un error: " + error);
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Typography variant="h4" gutterBottom>
            Book Shop Admin
          </Typography>
          {error && (
            <Typography variant="body1" color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Ingresar
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
