import classes from '../styles/Masthead.module.css';
import Today from './Today';
import ToggleButton from './ToggleButton';

const cityName = "Dallas";
const apiKey = '31b837ade58a4fb0a1d191606213009';
const apiSource = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5&aqi=no&alerts=no`;

function Masthead(props){

    return (
        <div className={classes.masthead}>
            <Today /> 
            <ToggleButton />
        </div>
    );

}

export default Masthead;