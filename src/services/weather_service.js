const API_KEY = '0283978172435ad5118d34fc15a1afe4'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'


const getWeatherData = ( infoType, searchParams ) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY, units: 'metric' })

    return fetch(url).then(res => res.json())
}

const formatCurrentData = (data) => {
    const {
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data
    const {main: details, icon} = weather[0]

    return{ temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, speed, details, icon }
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentData)

    return formattedCurrentWeather
}

export default getFormattedWeatherData