import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Sidebar: React.FC<{
  coordinates: number[];
  type: string | undefined;
  gap: number | undefined;
  place: string | undefined;
  rms: number | undefined;
  sig: number | undefined;
  pageUrl: string | undefined;
}> = ({ coordinates, type, gap, place, rms, sig, pageUrl }) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.300", mb: "10px" }}>
        <Typography variant="h6" gutterBottom>
          <b>Coordinates</b>
        </Typography>
        {coordinates?.map((coordinate: number) => (
          <Typography key={coordinate}>{coordinate}</Typography>
        ))}
      </Paper>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.300", mb: "10px" }}>
        <Typography variant="h6" gutterBottom>
          <b>Place</b>
        </Typography>
        <Typography>{place}</Typography>
      </Paper>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.300", mb: "10px" }}>
        <Typography variant="h6" gutterBottom>
          <b>Type</b>
        </Typography>
        <Typography>{type}</Typography>
      </Paper>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.300", mb: "10px" }}>
        <Typography variant="h6" gutterBottom>
          <b>Gap</b>
        </Typography>
        <Typography>{gap}</Typography>
      </Paper>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.300", mb: "10px" }}>
        <Typography variant="h6" gutterBottom>
          <b>RMS</b>
        </Typography>
        <Typography>{rms}</Typography>
      </Paper>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.300", mb: "10px" }}>
        <Typography variant="h6" gutterBottom>
          <b>SIG</b>
        </Typography>
        <Typography>{sig}</Typography>
      </Paper>

      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.300", mb: "10px" }}>
        <Typography variant="h6" gutterBottom>
          Earthquake Official Page!
        </Typography>
        <Typography>
          <a href={pageUrl} target="_blank" rel="noreferrer">
            Official Page!
          </a>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
