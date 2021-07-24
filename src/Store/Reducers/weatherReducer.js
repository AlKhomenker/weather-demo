import {SET_CURRENT_WEATHER, SET_WEATHER_ON5_DAYS} from '../types'

const defaultState = {
    currentWeather: [/*{
        LocalObservationDateTime: "2021-07-23T13:31:00+03:00",
        EpochTime: 1627036260,
        WeatherText: "Clouds and sun",
        WeatherIcon: 4,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
            Metric: {
                Value: 30.6,
                Unit: "C",
                UnitType: 17
            },
            Imperial: {
                Value: 87,
                Unit: "F",
                UnitType: 18
            }
        },
        MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    }*/],
    weatherOn5Days: {
   /*     Headline: {
            EffectiveDate: "2021-07-24T08:00:00+03:00",
            EffectiveEpochDate: 1627102800,
            Severity: 4,
            Text: "Pleasant this weekend",
            Category: "mild",
            EndDate: null,
            EndEpochDate: null,
            MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
        },
        DailyForecasts: [
            {
                Date: "2021-07-23T07:00:00+03:00",
                EpochDate: 1627012800,
                Temperature: {
                    Minimum: {
                        Value: 75,
                        Unit: "F",
                        UnitType: 18
                    },
                    Maximum: {
                        Value: 82,
                        Unit: "F",
                        UnitType: 18
                    }
                },
                Day: {
                    Icon: 3,
                    IconPhrase: "Partly sunny", HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Light"
                },
                Night: {
                    Icon: 36,
                    IconPhrase: "Intermittent clouds",
                    HasPrecipitation: false
                },
                Sources: [
                    "AccuWeather"
                ],
                MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
            },
            {
                Date: "2021-07-24T07:00:00+03:00",
                EpochDate: 1627012800,
                Temperature: {
                    Minimum: {
                        Value: 85,
                        Unit: "F",
                        UnitType: 18
                    },
                    Maximum: {
                        Value: 97,
                        Unit: "F",
                        UnitType: 18
                    }
                },
                Day: {
                    Icon: 3,
                    IconPhrase: "Partly sunny", HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Light"
                },
                Night: {
                    Icon: 36,
                    IconPhrase: "Intermittent clouds",
                    HasPrecipitation: false
                },
                Sources: [
                    "AccuWeather"
                ],
                MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
            },
            {
                Date: "2021-07-25T07:00:00+03:00",
                EpochDate: 1627012800,
                Temperature: {
                    Minimum: {
                        Value: 55,
                        Unit: "F",
                        UnitType: 18
                    },
                    Maximum: {
                        Value: 107,
                        Unit: "F",
                        UnitType: 18
                    }
                },
                Day: {
                    Icon: 3,
                    IconPhrase: "Partly sunny", HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Light"
                },
                Night: {
                    Icon: 36,
                    IconPhrase: "Intermittent clouds",
                    HasPrecipitation: false
                },
                Sources: [
                    "AccuWeather"
                ],
                MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
            },
            {
                Date: "2021-07-26T07:00:00+03:00",
                EpochDate: 1627012800,
                Temperature: {
                    Minimum: {
                        Value: 85,
                        Unit: "F",
                        UnitType: 18
                    },
                    Maximum: {
                        Value: 87,
                        Unit: "F",
                        UnitType: 18
                    }
                },
                Day: {
                    Icon: 3,
                    IconPhrase: "Partly sunny", HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Light"
                },
                Night: {
                    Icon: 36,
                    IconPhrase: "Intermittent clouds",
                    HasPrecipitation: false
                },
                Sources: [
                    "AccuWeather"
                ],
                MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
            },
            {
                Date: "2021-07-27T07:00:00+03:00",
                EpochDate: 1627012800,
                Temperature: {
                    Minimum: {
                        Value: 85,
                        Unit: "F",
                        UnitType: 18
                    },
                    Maximum: {
                        Value: 87,
                        Unit: "F",
                        UnitType: 18
                    }
                },
                Day: {
                    Icon: 3,
                    IconPhrase: "Partly sunny", HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Light"
                },
                Night: {
                    Icon: 36,
                    IconPhrase: "Intermittent clouds",
                    HasPrecipitation: false
                },
                Sources: [
                    "AccuWeather"
                ],
                MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
            }
        ]*/
    }
};


export const setCurrentWeather = (weather) => ({
    type: SET_CURRENT_WEATHER,
    payload: weather
});

export const setWeatherOn5Days = (weather) => ({
    type: SET_WEATHER_ON5_DAYS,
    payload: weather
});


export default function weatherReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload
            }
        case SET_WEATHER_ON5_DAYS:
            return {
                ...state,
                weatherOn5Days: action.payload
            }
        default:
            return state
    }
}


