import React, {useState} from 'react';
import styles from './ItemDayForecast.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon, faHeart} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";

import {useDispatch, useSelector} from "react-redux";
import {setFavoriteLocation} from "../../Store/Reducers/favoriteLocationReducer";
import {setNewLocation} from "../../Store/Reducers/locationReducer";

const ItemDayForecast = (props) => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.themeStates.page);

    const [currentDay, setCurrentDay] = useState({});
    const currentWeather = useSelector(state => state.weatherState.currentWeather);

    const currentLocation = useSelector(state => state.locationState.location);

    const getCurrentLocation = () => {
        dispatch(setNewLocation({Key: 111111,City:'Moscow'})); // props
    }


    if(currentPage === '/'){
        if(new Date(props.date).toLocaleDateString() === new Date(currentWeather.LocalObservationDateTime).toLocaleDateString()){
            return (
                <div className={styles.wrapper} style={{backgroundColor:`${props.background}`}}>
                    <div className={styles.defaultBlock} style={{color:`${props.color}`}}>
                        <div className={styles.description}>
                            <h4>{props.dayOfWeek}, {new Date(currentWeather.LocalObservationDateTime).toLocaleDateString()} </h4>
                            <h3>{currentWeather.WeatherText}</h3>
                        </div>
                    </div>

                    <div className={styles.active}>
                        <div className={styles.description}>
                            <h4>{props.dayOfWeek}</h4>
                            <h3>{props.minTempC}&#8451; - {props.maxTempC}&#8451;</h3>
                        </div>
                        <div className={styles.description}>
                            <p><FontAwesomeIcon icon={faSun}/> : {props.day}</p>
                            <p><FontAwesomeIcon icon={faMoon}/> : {props.night}</p>
                        </div>
                    </div>
                </div>
            )
        }else {
            return (
                <div className={styles.wrapper} style={{backgroundColor:`${props.background}`}}>
                    <div className={styles.defaultBlock} style={{color:`${props.color}`}}>
                        <div className={styles.description}>
                            <h4>{props.dayOfWeek}</h4>
                            <h3>{props.minTempC}&#8451; - {props.maxTempC}&#8451;</h3>
                        </div>
                        <div className={styles.description}>
                            <p><FontAwesomeIcon icon={faSun}/> : {props.day}</p>
                            <p><FontAwesomeIcon icon={faMoon}/> : {props.night}</p>
                        </div>
                    </div>

                    <div className={styles.active}>
                        <div className={styles.description}>
                            <h4>{props.dayOfWeek}</h4>
                            <h3>{props.minTempF}&#8457; - {props.maxTempF}&#8457;</h3>
                        </div>
                    </div>
                </div>
            )
        }
    }else {
        return (
            <div className={styles.wrapper} style={{backgroundColor:`${props.background}`}}>
                {/*<div className={styles.defaultBlock} style={{color:`${props.color}`}}>
                    <div className={styles.description}>
                        <h4>{props.dayOfWeek}</h4>
                        <h3>{props.minTempF}&#8457; - {props.maxTempF}&#8457;</h3>
                    </div>
                </div>

                <div className={styles.active}>
                    <div className={styles.description}>

                        <h3>{props.minTempC}&#8451; - {props.maxTempC}&#8451;</h3>
                        <Button variant="outline-light" className={styles.btn} onClick={getCurrentLocation}>see more</Button>
                    </div>
                </div>*/}
            </div>
        )
    }
};

export {ItemDayForecast};
