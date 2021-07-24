import React, {useState} from 'react';
import styles from './ItemDay.module.css';
import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";

import {useDispatch, useSelector} from "react-redux";
import {setNewLocation} from "../../Store/Reducers/locationReducer";
import {NavLink} from "react-router-dom";
import {setNewPageUrl} from "../../Store/Reducers/themeReducer";


const ItemDay = (props) => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.themeStates.page);
    const currentDegrees = useSelector(state => state.themeStates.degrees);

    const [status, setStatus] = useState(false);

    const getChooseLocation = async (location,page) => {
        dispatch(setNewPageUrl(page));
       /* await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09xrWzkJzTkGOGl6mYcWcDrE5tn9djaGlK&q=${location}`)
            .then(res => {
                dispatch(setNewLocation(res.data[0]))
               // localStorage.setItem('currentLocation',JSON.stringify(res.data[0]));
            }).catch(err => {
                console.log(err)
            });*/
    }


    const changeDayState = (value) => {
        setStatus(value);
    }


    if (currentPage === '/') {
        if (new Date(props.date).toLocaleDateString() === new Date(props.currentDate).toLocaleDateString()) {
            return (
                <div className={styles.wrapper}
                     style={{background: (status) ? (`${props.background}`) : ('linear-gradient(to bottom right, #FFDBC6, #1F5CAE)')}}
                     onMouseEnter={() => changeDayState(true)}
                     onMouseLeave={() => changeDayState(false)}>
                    {(status) ? (
                        <div style={{color: `${props.color}`}}>
                            <div className={styles.description}>
                                <h4>{props.dayOfWeek}</h4>
                                {(currentDegrees === 'fahrenheit')?(
                                    <h3>{props.minTempF}&#8457; - {props.maxTempF}&#8457;</h3>
                                ):(
                                    <h3>{props.minTempC}&#8451; - {props.maxTempC}&#8451;</h3>
                                )}
                            </div>
                            <div className={styles.description}>
                                <p><FontAwesomeIcon icon={faSun}/> : {props.day}</p>
                                <p><FontAwesomeIcon icon={faMoon}/> : {props.night}</p>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.description} style={{color: 'white'}}>
                            <h4>{props.dayOfWeek}, {new Date(props.currentDate).toLocaleDateString()} </h4>
                            <h3>{props.currentWeatherText}</h3>
                        </div>
                    )}
                </div>
            )
        } else {
            return (
                <div className={styles.wrapper}
                     style={{background: (status) ? ('linear-gradient(to bottom right, #FFDBC6, #1F5CAE)') : (`${props.background}`)}}
                     onMouseEnter={() => changeDayState(true)}
                     onMouseLeave={() => changeDayState(false)}>
                    {(status) ? (
                        <div className={styles.description} style={{color: 'white'}}>
                            <h4>{props.dayOfWeek}</h4>
                            <h3>{props.currentWeatherText}</h3>
                        </div>
                    ) : (
                        <div style={{color: `${props.color}`}}>
                            <div className={styles.description}>
                                <h4>{props.dayOfWeek}</h4>
                                {(currentDegrees === 'fahrenheit')?(
                                    <h3>{props.minTempF}&#8457; - {props.maxTempF}&#8457;</h3>
                                ):(
                                    <h3>{props.minTempC}&#8451; - {props.maxTempC}&#8451;</h3>
                                )}
                            </div>
                            <div className={styles.description}>
                                <p><FontAwesomeIcon icon={faSun}/> : {props.day}</p>
                                <p><FontAwesomeIcon icon={faMoon}/> : {props.night}</p>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
    } else {
        return (
            <div className={styles.wrapper} style={{backgroundColor: `${props.background}`}}>
                <div className={styles.description} style={{color: `${props.color}`}}>
                    <h3>{props.city}</h3>
                    {(currentDegrees === 'fahrenheit')?(
                        <h4>{props.tempF}&#8457;</h4>
                    ):(
                        <h4>{props.tempC}&#8451;</h4>
                    )}
                    <h4>{props.weatherText}</h4>
                    <NavLink to='/'>
                        <Button variant="outline-light" className={styles.btn} onClick={() => getChooseLocation(props.city,'/')}>see more</Button>
                    </NavLink>
                </div>
                <span className={styles.id} style={{color: `${props.color}`}}>{props.index + 1}</span>
            </div>
        )
    }
};

export {ItemDay};
