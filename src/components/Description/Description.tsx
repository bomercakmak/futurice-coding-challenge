import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Description: React.FC<{
  title: string | undefined;
}> = ({ title }) => {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        <b>{title ? title + " Earthquake Description" : ""}</b>
      </Typography>
      <Divider />
      <Typography className="markdown">
        An earthquake is caused by a sudden slip on a fault. The tectonic plates
        are always slowly moving, but they get stuck at their edges due to
        friction. When the stress on the edge overcomes the friction, there is
        an earthquake that releases energy in waves that travel through the
        earth's crust and cause the shaking that we feel. In California there
        are two plates - the Pacific Plate and the North American Plate. The
        Pacific Plate consists of most of the Pacific Ocean floor and the
        California Coast line. The North American Plate comprises most the North
        American Continent and parts of the Atlantic Ocean floor. The primary
        boundary between these two plates is the San Andreas Fault. The San
        Andreas Fault is more than 650 miles long and extends to depths of at
        least 10 miles. Many other smaller faults like the Hayward (Northern
        California) and the San Jacinto (Southern California) branch from and
        join the San Andreas Fault Zone.
      </Typography>
    </Grid>
  );
};

export default Description;
