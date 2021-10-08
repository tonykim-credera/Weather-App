import Card from './Card';
import classes from '../styles/CardContainer.module.css';

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



function CardContainer(props){

    const [temperature1, setTemperature1] = useState("");
    const [temperature2, setTemperature2] = useState("");
    const [temperature3, setTemperature3] = useState("");
    const [temperature4, setTemperature4] = useState("");
    const [temperature5, setTemperature5] = useState("");

    const [day1, setDay1] = useState("");
    const [day2, setDay2] = useState("");
    const [day3, setDay3] = useState("");
    const [day4, setDay4] = useState("");
    const [day5, setDay5] = useState("");

    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");
    const [img5, setImg5] = useState("");


    useEffect(() => {
        Axios.get(apiSource).then((response) => {
            setTemperature1(response.data.forecast.forecastday[0].day.avgtemp_c);
            setTemperature2(response.data.forecast.forecastday[1].day.avgtemp_c);
            setTemperature3(response.data.forecast.forecastday[2].day.avgtemp_c);
            setTemperature4(response.data.forecast.forecastday[0].day.avgtemp_c);
            setTemperature5(response.data.forecast.forecastday[1].day.avgtemp_c);
            setDay1(getDayOfWeek(1));
            setDay2(getDayOfWeek(2));
            setDay3(getDayOfWeek(3));
            setDay4(getDayOfWeek(4));
            setDay5(getDayOfWeek(5));
            setImg1(getImg(response.data.forecast.forecastday[0].day.condition.text));
            setImg2(getImg(response.data.forecast.forecastday[1].day.condition.text));
            setImg3(getImg(response.data.forecast.forecastday[2].day.condition.text));
            setImg4(getImg(response.data.forecast.forecastday[0].day.condition.text));
            setImg5(getImg(response.data.forecast.forecastday[1].day.condition.text));

            var checkbox = document.querySelector('input[type="checkbox"]');

            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    setTemperature1(response.data.forecast.forecastday[0].day.avgtemp_f);
                    setTemperature2(response.data.forecast.forecastday[1].day.avgtemp_f);
                    setTemperature3(response.data.forecast.forecastday[2].day.avgtemp_f);
                    setTemperature4(response.data.forecast.forecastday[0].day.avgtemp_f);
                    setTemperature5(response.data.forecast.forecastday[1].day.avgtemp_f);
                console.log('Checked');
                } else {
                    setTemperature1(response.data.forecast.forecastday[0].day.avgtemp_c);
                    setTemperature2(response.data.forecast.forecastday[1].day.avgtemp_c);
                    setTemperature3(response.data.forecast.forecastday[2].day.avgtemp_c);
                    setTemperature4(response.data.forecast.forecastday[0].day.avgtemp_c);
                    setTemperature5(response.data.forecast.forecastday[1].day.avgtemp_c);
                console.log('Not checked');
                }
            });

            console.log(response.data);
        })
    }, []);

    const getDayOfWeek= (prop) => {
        let d = new Date();
        let day = (d.getDay() + prop) % 7;

        switch (day){
            case 0: day = 'Sun';
                break;
            case 1: day = 'Mon';
                break;
            case 2:  day = 'Tue';
                break;
            case 3:  day = 'Wed';
                break;
            case 4: day = 'Thu';
                break;
            case 5: day = 'Fri';
                break;
            case 6: day = 'Sat';
                break;
            default: console.log("Not a day"); 
                break;  
        }

        return (day);
    }

    const getImg = (imgText) => {
        if(imgText.includes("Light rain") || imgText.includes("Patchy rain")){
            return (CloudDrizzle);
        }
        else if(imgText.includes("rain")){
            return (CloudDrizzleAlt);
        }
        else if(imgText.includes("thunder") || imgText.includes("lighning") || imgText.includes("thundery")){
            return (CloudLightning);
        }
        else{
            return (CloudSun);
        }
    }


    return (
        <div className={classes.container}>

            <Card title={day1} img={img1} temp={temperature1}/> 
            <Card title={day2}img={img2} temp={temperature2}/> 
            <Card title={day3} img={img3} temp={temperature3}/> 
            <Card title={day4} img={img4} temp={temperature4}/> 
            <Card title={day5} img={img5} temp={temperature5}/> 

        </div>
    );

}

export default CardContainer;
