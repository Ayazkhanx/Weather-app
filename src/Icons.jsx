import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Icons() {
    return (
        <div>
            {city.info} {
                info.humidity > 80 ? <ThunderstormIcon/>
                : info.temp > 15 ? <WbSunnyOutlinedIcon/>
                :<AcUnitIcon/>
            }
        </div>
    )
}