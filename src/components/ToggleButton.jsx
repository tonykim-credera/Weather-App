import classes from '../styles/ToggleButton.module.css';

function ToggleButton(){
    return (
        <div className={classes.toggleButton}>
            <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
            </label>
        </div>
    );

}

export default ToggleButton;