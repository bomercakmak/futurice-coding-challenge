import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer: React.FC = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      style={{ margin: "30px 0" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://cakmak.netlify.app/">
        Bahadir Omer Cakmak
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
