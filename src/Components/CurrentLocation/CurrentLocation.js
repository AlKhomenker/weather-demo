import React, {useEffect, useState} from 'react';
import styles from './CurrentLocation.module.css';
import {ImageSection} from "../ImageSection/ImageSection";
import {useSelector} from "react-redux";
import {ItemDay} from "../ItemDay/ItemDay";

import Fade from "react-reveal/Fade";

let list;
const CurrentLocation = (props) => {

    const [themeColor, setThemeColor] = useState({});
    const currentTheme = useSelector(state => state.themeStates.theme);


    useEffect(() => {
        if (currentTheme === 'light') {
            setThemeColor({
                background1: '#F5F5F5',
                background2: 'white',
                color: '#272E38'
            });
        } else {
            setThemeColor({
                background1: '#272E38',
                background2: '#313842',
                color: 'white'
            });
        }
    }, [currentTheme]);


    list = props.data.map((item, index) => {
        if(props.header === 'favorite'){
            if (index % 2 === 1) {
                return (
                    <ItemDay
                        key={index}
                        index={index}
                        city={item.city}
                        tempC={item.tempC}
                        tempF={item.tempF}
                        weatherText={item.weatherText}

                        background={themeColor.background1}
                        color={themeColor.color}/>
                )
            } else {
                return (
                    <ItemDay
                        key={index}
                        index={index}
                        city={item.city}
                        tempC={item.tempC}
                        tempF={item.tempF}
                        weatherText={item.weatherText}

                        background={themeColor.background2}
                        color={themeColor.color}/>
                )
            }
        }else{
            if (index % 2 === 1) {
                return (
                    <ItemDay
                        key={index}
                        index={index}
                        dayOfWeek={item.dayOfWeek}
                        date={item.date}
                        minTempF={item.minTempF}
                        maxTempF={item.maxTempF}
                        minTempC={item.minTempC}
                        maxTempC={item.maxTempC}
                        day={item.day}
                        night={item.night}
                        currentDate={props.currentWeather.LocalObservationDateTime}
                        currentWeatherText={props.currentWeather.WeatherText}

                        background={themeColor.background1}
                        color={themeColor.color}/>
                )
            } else {
                return (
                    <ItemDay
                        key={index}
                        index={index}
                        dayOfWeek={item.dayOfWeek}
                        date={item.date}
                        minTempF={item.minTempF}
                        maxTempF={item.maxTempF}
                        minTempC={item.minTempC}
                        maxTempC={item.maxTempC}
                        day={item.day}
                        night={item.night}
                        currentDate={props.currentWeather.LocalObservationDateTime}
                        currentWeatherText={props.currentWeather.WeatherText}

                        background={themeColor.background2}
                        color={themeColor.color}/>
                )
            }
        }
    });


    return (
        <div>
            <ImageSection header={props.header} quote={props.quote}/>
            {(props.data.length > 0) ?
                (<Fade left>
                    <div className={styles.weeksBlock}>
                         {list}
                    </div>
                </Fade>

                ) : (
                    <div className={styles.block} style={{color: `${themeColor.color}`}}>
                        <p>There are no saved locations in your list.</p>
                    </div>
                )}
        </div>
    );
};

export {CurrentLocation};
