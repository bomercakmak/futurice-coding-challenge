import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "30px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to="/home"
            >
              Recent Earthquakes
            </Link>
          </Typography>
          <Link style={{ color: "inherit", textDecoration: "none" }} to="/home">
            <Button color="inherit">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
