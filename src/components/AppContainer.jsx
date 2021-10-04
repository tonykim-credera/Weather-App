import { useEffect , useState } from 'react';
import classes from '../styles/AppContainer.module.css';
import CardContainer from './CardContainer';
import Masthead from './Masthead';
import locationSVG from '../svg/location.svg';

function AppContainer(){
    const [today, setToday] = useState("");
    const [thisMonth, setThisMonth] = useState("");

    useEffect(() => {
        setToday(getDayOfWeek(d));
        setThisMonth(getMonthName(d));
    })

    let d = new Date();
    let dayNumber = d.getDate();
    let year = d.getFullYear();

    const getDayOfWeek= (d) => {
        let day = (d.getDay() % 7);

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

    const getMonthName= (d) => {
        let month = (d.getMonth()% 12);

        switch (month){
            case 0: month = 'January';
                break;
            case 1: month = 'February';
                break;
            case 2:  month = 'March';
                break;
            case 3:  month = 'April';
                break;
            case 4: month = 'May';
                break;
            case 5: month = 'June';
                break;
            case 6: month = 'July';
                break;
            case 7: month = 'August';
                break;
            case 8: month = 'September';
                break;
            case 9: month = 'October';
                break;
            case 10: month = 'November';
                break;
            case 11: month = 'December';
                break;
            default: console.log("Not a month"); 
                break;  
        }

        return (month);
    }

    return (
        <div className={classes.appContainer}>
            <h1 className={classes.location}> <img src={locationSVG}/> Dallas, TX</h1>
            <p className={classes.date}> {today}, {thisMonth} {dayNumber}, {year} </p>
            <Masthead />
            <CardContainer />
        </div>
    );

}

export default AppContainer;