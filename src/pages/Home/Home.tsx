import { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EarthquakeCard from "../../components/EarthquakeCard/EarthquakeCard";
import { useSelector, useDispatch } from "react-redux";
import {
  setEarthquakes,
  sortEarthquakes,
} from "../../store/slices/earthquakesSlice";
import { selectEarthquakes } from "../../store/store";
import axios from "../../api/axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Home: React.FC = () => {
  const earthquakes = useSelector(selectEarthquakes);
  console.log(earthquakes);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/summary/all_day.geojson").then((response) => {
      console.log(response);
      dispatch(setEarthquakes(response.data.features));
    });
  }, [dispatch]);

  return (
    <>
      {earthquakes.length === 0 && <h1>Loading...</h1>}

      <Box sx={{ flexGrow: 1 }}>
        {earthquakes.length > 0 && (
          <div style={{ textAlign: "center" }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Sort By
              </FormLabel>
              <RadioGroup
                defaultValue="Date"
                onChange={(e) => {
                  dispatch(sortEarthquakes(e.target.value));
                }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Date"
                  control={<Radio />}
                  label="Date"
                />
                <FormControlLabel value="Gap" control={<Radio />} label="Gap" />
                <FormControlLabel value="Sig" control={<Radio />} label="Sig" />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {earthquakes.length > 0 &&
            earthquakes.map((earthquake) => {
              return (
                <Grid item xs={2} sm={4} md={3} key={earthquake.id}>
                  <EarthquakeCard
                    title={earthquake.properties.title}
                    time={earthquake.properties.time}
                    code={earthquake.properties.code}
                    status={earthquake.properties.status}
                    gap={earthquake.properties.gap}
                    id={earthquake.id}
                    sig={earthquake.properties.sig}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
};
export default Home;
