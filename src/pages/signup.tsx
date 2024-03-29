import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { signUp } from "../api";
import { useLocation } from "wouter";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useLocation();

  function handleSubmit() {
    signUp(name, email, password).then((result) => {
      if (result) setLocation("/", { state: "Signed Up" });
    });
  }

  return (
    <div className="p-10 flex">
      <div className="w-1/2 flex flex-col">
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <form noValidate autoComplete="off" className="flex flex-col">
          <TextField
            label="Name"
            id="user-name"
            variant="standard"
            sx={{ marginBottom: "1rem" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            id="user-email"
            variant="standard"
            sx={{ marginBottom: "1rem" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            id="user-pass"
            type="password"
            variant="standard"
            sx={{ marginBottom: "1rem" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" size="small" onClick={handleSubmit}>
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
}
