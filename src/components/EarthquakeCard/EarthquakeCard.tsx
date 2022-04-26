import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const images = [
  "https://render.fineartamerica.com/images/rendered/search/print/8/4.5/break/images-medium-5/1-seismograph-earthquake-activity-allan-swart.jpg",
  "https://dailyinvestorhub.com/wp-content/uploads/2020/08/Google-wants-to-make-Android-the-biggest-earthquake-detector-in-the-world.jpg",
  "https://c.files.bbci.co.uk/171FA/production/_123741749_mediaitem123741748.jpg",
  "https://www.themayor.eu/web/files/articles/6706/main_image/thumb_1024x663_earthquake-1665878_1920.jpg",
  "https://media.nature.com/lw800/magazine-assets/d41586-018-07705-2/d41586-018-07705-2_16323566.jpg",
  "https://static.toiimg.com/photo/msid-76232723/76232723.jpg?1218919",
  "https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0251785%20%281%29.jpg?itok=kmyjJG69",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHXbeK0bY97pQaYSauPtJMItf9pRosq4IKA&usqp=CAU",
  "https://ec.europa.eu/research-and-innovation/sites/default/files/styles/w1108/public/hm/field/image/2Marco%20Iacobucci%20Epp%2C%20Shutterstock_473628328.jpg?itok=WNCRIMSz",
];
const EarthquakeCard: React.FC<{
  title: string;
  time: number;
  code: string;
  status: string;
  gap: number;
  id: string;
  sig: number;
}> = ({ title, time, code, status, gap, id, sig }) => {
  return (
    <>
      <Card sx={{ maxWidth: 300, minHeight: 400 }}>
        <CardMedia
          component="img"
          height="140"
          image={images[Math.floor(Math.random() * 9)]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Date:</b> {new Date(time).toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Code:</b> {code}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Status:</b> {status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Gap:</b> {gap ? gap : "Unkown"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Sig:</b> {sig ? sig : "Unkown"}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/earthquakeDetails/${id}`}
          >
            <Button size="small">See more details... </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
export default EarthquakeCard;
