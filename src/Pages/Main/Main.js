import React, {useEffect, useState} from 'react';
import {CurrentLocation} from "../../Components/CurrentLocation/CurrentLocation";

import axios from "axios";
import API_KEY from '../../Store/apiKey';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentWeather, setWeatherOn5Days} from "../../Store/Reducers/weatherReducer";
import {ModalPopUp} from "../../Components/ModalPopUp/ModalPopUp";

const Main = () => {

    const [days, setDays] = useState([]);
    const [weather, setWeather] = useState([]);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const currentLocation = useSelector(state => state.locationState.location);
    const currentWeather = useSelector(state => state.weatherState.currentWeather);
    const weatherOn5Days = useSelector(state => state.weatherState.weatherOn5Days);


    useEffect(() => {
        let locationKey = currentLocation.Key;
        getCurrentWeather(locationKey);
        getWeatherOn5Days(locationKey);
    }, [currentLocation]);


    const getCurrentWeather = async (key) => {
        await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`)
             .then(res => {
                 dispatch(setCurrentWeather(res.data))
             }).catch(err => {
                 console.log(err);
                 setShow(true);
             });
    }

    useEffect(() => {
        weatherChanges(currentWeather);
    }, [currentWeather]);


    const weatherChanges = (data) => {
        if(Object.keys(data).length > 0){
            setWeather(data[0])
        }
    }

    const getWeatherOn5Days = async (key) => {
        await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
            .then(res => {
                dispatch(setWeatherOn5Days(res.data))
            }).catch(err => {
                console.log(err);
                 setShow(true);
            });
    }

    useEffect(() => {
        dateChanges(weatherOn5Days);
    }, [weatherOn5Days]);


    const dateChanges = (data) => {
        let arrayWeather = [];
        let newDay = [];
        let daysArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        if(Object.keys(data).length > 0){
            for (let i = 0; i< data.DailyForecasts.length; i++){
                let day = new Date(data.DailyForecasts[i].Date).toDateString().substring(0,3);
                let dayOfWeek = '';

                daysArr.map((item,index) => {
                    if(item.includes(day)){
                        dayOfWeek = item;
                    }
                    return dayOfWeek;
                });

                newDay[i] = {
                    dayOfWeek: dayOfWeek,
                    date: data.DailyForecasts[i].Date,
                    minTempF: data.DailyForecasts[i].Temperature.Minimum.Value,
                    maxTempF: data.DailyForecasts[i].Temperature.Maximum.Value,
                    minTempC: Math.round((5/9) * (data.DailyForecasts[i].Temperature.Minimum.Value - 32)),
                    maxTempC: Math.round((5/9) * (data.DailyForecasts[i].Temperature.Maximum.Value - 32)),
                    day: data.DailyForecasts[i].Day.IconPhrase,
                    night: data.DailyForecasts[i].Night.IconPhrase
                }
                arrayWeather.push( newDay[i])
            }
            setDays(arrayWeather);
        }
    }


    return (
            <div>
                <CurrentLocation header={currentLocation.LocalizedName} quote='Be the first to know the weather and be in trend!' data={days} currentWeather={weather}/>
                <ModalPopUp show={show} title={'Something went wrong!'} message={'Please reload the page or try again later.'}/>
            </div>
    );
};

export default Main;
