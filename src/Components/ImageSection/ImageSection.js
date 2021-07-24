import React from 'react';
import styles from './CurrentLocation.module.css';
import global from '../../Models/Global.css';
import {ItemDayForecast} from "../ItemDayForecast/ItemDayForecast";
import {SearchLocation} from "../SearchLocation/SearchLocation";

import sun from '../../Assets/weatherTheme/peoples.png';
import rain from '../../Assets/weatherTheme/rain.png';

const CurrentLocation = () => {
    return (
        <div>
            <div className={styles.header} style={{background:`url(${rain})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'}}>
                <div className={styles.txt}>
                    <h1>Tel-aviv</h1>
                    <div className={styles.quote}>
                        <p>Be the first to know the weather and be in trend!</p>
                        <hr/>
                    </div>

                    <SearchLocation/>
                </div>

            </div>
            <div className={styles.weeksBlock}>
                <ItemDayForecast/>
                <ItemDayForecast/>
                <ItemDayForecast/>
                <ItemDayForecast/>
                <ItemDayForecast/>
            </div>
        </div>
    );
};

export {CurrentLocation};
