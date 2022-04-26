import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { Earthquake } from "../../store/storeModel";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import Grid from "@mui/material/Grid";
import Sidebar from "../../components/Sidebar/Sidebar";

const EarthquakeDetails: React.FC = () => {
  const { id } = useParams();

  const [earthquake, setEarthquake] = useState<Earthquake>();
  console.log(earthquake);
  const theme = createTheme();
  useEffect(() => {
    async function fetchEarthquake() {
      const response = await axios.get(`/detail/${id}.geojson`);
      setEarthquake(response.data);
    }
    fetchEarthquake();
  }, [id]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Header
              title={earthquake?.properties.title}
              image={
                "https://static.toiimg.com/photo/msid-76232723/76232723.jpg?1218919"
              }
              imageText={earthquake?.properties.title}
              date={earthquake?.properties.time}
              pageUrl={earthquake?.properties.url}
            />
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Description title={earthquake?.properties.title} />
              <Sidebar
                coordinates={earthquake ? earthquake.geometry.coordinates : []}
                type={earthquake?.geometry.type}
                gap={earthquake?.properties.gap}
                place={earthquake?.properties.place}
                rms={earthquake?.properties.rms}
                sig={earthquake?.properties.sig}
                pageUrl={earthquake?.properties.url}
              />
            </Grid>
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default EarthquakeDetails;
