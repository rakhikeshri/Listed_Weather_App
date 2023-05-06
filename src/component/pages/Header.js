import React, { useState } from 'react'
import user_icon from './assets/user_icon.jpeg'
import search_icon from './assets/search_icon.jpeg'

const Header = ({ user, logout, city, setCity, handleSearch, cityName }) => {

    const [toggleUserIcon, setToggleUserIcon] = useState(false)
    return (
        <div className='flex md:justify-between flex-col md:flex-row w-full gap-4 '>
            <h2 className='text-black font-bold text-xl lg:text-4xl '>
                {cityName}
            </h2>

            <div className='flex gap-4 md:gap-2 lg:gap-4 justify-between'>
                <div className='flex gap-4'>
                    <input type='text' placeholder='search for city..' value={city} className='rounded-xl p-2 py-1 focus:outline-none h-9 w-44' onChange={(e) => setCity(e.currentTarget.value)} />

                    <img src={search_icon} alt="search" onClick={handleSearch} className='w-7 h-7 my-auto cursor-pointer' />
                </div>

                <div>
                    <img src={user.picture ? user.picture : user_icon} className='rounded-full w-8 cursor-pointer relative' onClick={() => setToggleUserIcon(!toggleUserIcon)} />
                    {
                        toggleUserIcon &&
                        <div className='absolute pt-2'>
                            <button onClick={logout} className='border p-2 py-1 bg-black text-white rounded-xl'>Logout</button>
                        </div>
                    }
                </div>


            </div>
        </div>
    )
}

export default Header
