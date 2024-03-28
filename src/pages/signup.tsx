import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function SignUp() {
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
          />
          <TextField
            label="Email"
            id="user-email"
            variant="standard"
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Password"
            id="user-pass"
            type="password"
            variant="standard"
            sx={{ marginBottom: "1rem" }}
          />
          <Button variant="contained" size="small">
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
}
