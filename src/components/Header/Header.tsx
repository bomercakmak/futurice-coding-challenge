import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Header: React.FC<{
  title: string | undefined;
  image: string | undefined;
  imageText: string | undefined;
  date: number | undefined;
  pageUrl: string | undefined;
}> = ({ title, image, imageText, date, pageUrl }) => {
  return (
    <Paper
      sx={{
        minHeight: "25rem",
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url("${image}")`,
      }}
    >
      <Grid item md={6}>
        {<img style={{ display: "none" }} src={image} alt={imageText} />}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
      </Grid>
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {date && new Date(date).toLocaleString()}
            </Typography>
            <Button variant="contained">
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href={pageUrl}
                target="_blank"
              >
                Go To Official Page!
              </a>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
