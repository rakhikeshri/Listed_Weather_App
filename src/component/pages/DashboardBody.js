import React, { useEffect, useState } from 'react'
import celsius from './assets/celsius.png'
import humidity from './assets/humidity.png'
import speed from './assets/speed.jpg'
import weather_icon from './assets/weather.png'
import getFormattedWeatherData from '../../services/weather_service';
import LineChart from '../charts/LineChart';
import Header from './Header'


const DashboardBody = ({ user, logout }) => {
    const [searchCity, setSearchCity] = useState({ q: "bangalore" })
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState('')

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData(searchCity).then((data) => {
                setWeather(data)
            })
        }
        fetchWeather()

        console.log(weather)
    }, [searchCity])

    const handleSearch = () => {
        if (city !== '') setSearchCity({ q: city })
    }

    return (
        <div className='w-full'>

            <Header user={user} logout={logout} city={city} setCity={setCity} cityName={weather?.name} handleSearch={handleSearch} />

            {
                weather &&
                <>

                    <div className='grid grid-cols-2 gap-4 lg:gap-8 mt-8'>

                        <div className='grid lg:grid-cols-2 gap-4 lg:gap-8'>
                            <div className='flex gap-4 justify-between p-4 rounded-2xl' style={{ background: '#DDEFE0' }}>
                                <div>
                                    <p className='text-sm md:text-lg font-bold mb-2'>Temperature</p>
                                    <p className='text-2xl md:text-2xl lg:text-4xl'>{weather.temp} °C</p>
                                </div>
                                <div className="my-auto">
                                    <img src={celsius} className='w-6 md:w-8' />
                                </div>
                            </div>
                            <div className='flex gap-4 justify-between p-4 rounded-2xl' style={{ background: '#F4ECDD' }}>
                                <div>
                                    <p className='text-sm md:text-lg font-bold mb-2'>Humidity</p>
                                    <p className='text-2xl md:text-2xl lg:text-4xl'>{weather.humidity} %</p>
                                </div>
                                <div className="my-auto">
                                    <img src={humidity} className='w-6 md:w-8' />
                                </div>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2 gap-4 lg:gap-8'>
                            <div className='flex gap-4 justify-between p-4 rounded-2xl' style={{ background: '#EFDADA' }}>
                                <div>
                                    <p className='text-sm md:text-lg font-bold mb-2'>Wind</p>
                                    <p className='text-2xl md:text-2xl lg:text-4xl'>{weather.speed}km/h</p>
                                </div>
                                <div className="my-auto">
                                    <img src={speed} className='w-6 md:w-8' />
                                </div>
                            </div>

                            <div className=' flex gap-4 justify-between p-4 rounded-2xl' style={{ background: '#DEE0EF' }}>
                                <div>
                                    <p className='text-sm md:text-lg font-bold mb-2'>Weather</p>
                                    <p className='text-2xl md:text-2xl lg:text-4xl'>{weather.details}</p>
                                </div>
                                <div className="my-auto">
                                    <img src={weather_icon} className='w-6 md:w-8' />
                                </div>
                            </div>

                        </div>
                    </div>

                    <LineChart weather={weather} />

                    <div className='mt-8 gap-8 md:gap-4 lg:gap-8 grid md:grid-cols-2 '>
                        
                        <div className='bg-white flex-col p-5 rounded-xl'>
                            <div className='flex justify-between w-full'>
                                <p className='font-bold lg:text-lg'>Today’s schedule</p>
                                <p className='text-gray-400 '>See All <span className='font-bold'>></span></p>
                            </div>
                            <div className='mt-3 border-l-4  pl-2 border-green-400'>
                                <p className='text-gray-500 font-bold'>Meeting with suppliers from Kuta Bali</p>
                                <p className='text-gray-500 text-sm'>14.00-15.00</p>
                                <p className='text-gray-500 text-sm'>at Sunset Road, Kuta, Bali </p>
                            </div>
                            <div className='mt-3 border-l-4  pl-2 border-purple-700' >
                                <p className='text-gray-500 font-bold'>Check operation at Giga Factory 1</p>
                                <p className='text-gray-500 text-sm'>14.00-15.00</p>
                                <p className='text-gray-500 text-sm'>at Sunset Road, Kuta, Bali </p>
                            </div>
                        </div>
                        
                        <div className='bg-white flex-col p-5 rounded-xl'>
                            <div className='flex justify-between w-full'>
                                <p className='font-bold lg:text-lg'>Today’s schedule</p>
                                <p className='text-gray-400 '>See All <span className='font-bold'>></span></p>
                            </div>
                            <div className='mt-3 border-l-4  pl-2 border-green-400'>
                                <p className='text-gray-500 font-bold'>Meeting with suppliers from Kuta Bali</p>
                                <p className='text-gray-500 text-sm'>14.00-15.00</p>
                                <p className='text-gray-500 text-sm'>at Sunset Road, Kuta, Bali </p>
                            </div>
                            <div className='mt-3 border-l-4  pl-2 border-purple-700' >
                                <p className='text-gray-500 font-bold'>Check operation at Giga Factory 1</p>
                                <p className='text-gray-500 text-sm'>14.00-15.00</p>
                                <p className='text-gray-500 text-sm'>at Sunset Road, Kuta, Bali </p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default DashboardBody


