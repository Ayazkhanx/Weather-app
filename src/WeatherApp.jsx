import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Karachi",
        feelsLike: 24.04,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    };
    return(
        <div style={{textAlign: "center"}}>
            <h1> Weather App by Ayaz</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}