import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./InfoBox.css";



export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1545134969-8debd725b007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHl8ZW58MHx8MHx8fDA%3D";

    let HOT_URL = "https://media.istockphoto.com/id/1471184975/photo/sydney-sunrise.webp?b=1&s=170667a&w=0&k=20&c=ZaRK9zmAAs8u60FQhdKRo3dGkNfZXKeg6JyMFmMauYs=";
    let COLD_URL = "https://images.unsplash.com/photo-1533420896084-06d2bce5365f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    let  RAINY_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";
    

    return (
        <div className="InfoBox">
          <h1> Weather Info</h1>
           <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img" height="140" image={ info.humidity > 80 ? RAINY_URL
            : info.temp > 15 ? HOT_URL
            : COLD_URL
        }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Temp max = {info.tempMax}&deg;C</p>
            <p>Temp min = {info.tempMin}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like{info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </div>
 </div>
    );
};