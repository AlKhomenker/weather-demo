import React from 'react';
import styles from './CurrentWeather.module.css';
import {ItemDayForecast} from "../ItemDayForecast/ItemDayForecast";

const CurrentWeather = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1>Tel-aviv</h1>
            </div>
            <div>
                <ItemDayForecast/>
            </div>
        </div>
    );
};

export {CurrentWeather};
