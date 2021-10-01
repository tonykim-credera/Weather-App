import classes from '../styles/Card.module.css';

function Card(props){
    return (
        <div className={classes.card}>
            <div className={classes.title}> {props.title }</div>
            <div className={classes.img}> <img src={props.img}/>  </div>
            <div className={classes.temp}> {props.temp} </div>
        </div>
    );

}

export default Card;