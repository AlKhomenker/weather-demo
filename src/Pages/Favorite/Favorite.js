import React, {useEffect, useState} from 'react';
import {CurrentLocation} from "../../Components/CurrentLocation/CurrentLocation";
import {useSelector} from "react-redux";

const Favorite = () => {

    const [favorite, setfavorite] = useState([]);
    const favoriteLocation = useSelector(state => state.favoritesLocationsState.favoriteLocation);
    const currentWeather = useSelector(state => state.weatherState.currentWeather);

    useEffect(() => {
        addNewFavoriteLocation(favoriteLocation);
    }, [favoriteLocation]);


    const addNewFavoriteLocation = (data) => {
        let arr = [];
        let newDataLocation = {};
        if(Object.keys(data).length > 0){
            for (let i = 0; i< data.length; i++) {
                newDataLocation = {
                    tempC: currentWeather[0].Temperature.Metric.Value,
                    tempF: currentWeather[0].Temperature.Imperial.Value,
                    weatherText: currentWeather[0].WeatherText,
                    city: data[i].LocalizedName
                };
                arr.push(newDataLocation)
            }
        }
        setfavorite(arr);
    }


    return (
        <div>
            <CurrentLocation header='favorite' quote='Traveling we get to know not only the world, but also ourselves' data={favorite}/>
        </div>
    );
};

export default Favorite;
