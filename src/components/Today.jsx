import classes from '../styles/Today.module.css';

import Axios from 'axios' 
import { useState } from 'react';
import { useEffect } from 'react';

import CloudDrizzle from '../svg/Cloud-Drizzle-Sun-Alt.svg';
import CloudDrizzleAlt from '../svg/Cloud-Drizzle-Alt.svg';
import CloudLightning from '../svg/Cloud-Lightning.svg';
import CloudSun from '../svg/Cloud-Sun.svg';

const cityName = "Dallas";
const apiKey = '31b837ade58a4fb0a1d191606213009';
const apiSource = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5&aqi=no&alerts=no`;

function Today(props){
    const [temperature, setTemperature] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [windSpeed, setWindSpeed] = useState("");

    useEffect(() => {
        Axios.get(apiSource).then((response) => {
            setTemperature(response.data.current.feelslike_c)
            setImg(getImg(response.data.current.condition.text));
            setDescription(response.data.current.condition.text);
            setWindSpeed(response.data.current.wind_mph + ' mph');

            var checkbox = document.querySelector('input[type="checkbox"]');

            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    setTemperature(response.data.current.feelslike_f);
                console.log('Checked');
                } else {
                    setTemperature(response.data.current.feelslike_c);
                console.log('Not checked');
                }
            });

        })
    }, []);

    const getImg = (imgText) => {
        if(imgText.includes("Light rain") || imgText.includes("Patchy rain")){
            return (CloudDrizzle);
        }
        else if(imgText.includes("rain")){
            return (CloudDrizzleAlt);
        }
        else if(imgText.includes("Thunder") || imgText.includes("Lighning") || imgText.includes("Thundery")){
            return (CloudLightning);
        }
        else{
            return (CloudSun);
        }
    }

    return (
        <div className={classes.today}>
            <h1 className={classes.temperature}> {temperature}&#176; </h1>
            <img className={classes.img} src={img}/>
            <div className={classes.descriptionWrapper}> 
                <p> {description} </p>
                <p> {windSpeed} </p> 
            </div>
        </div>
    );

}

export default Today;