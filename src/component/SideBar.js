import React from 'react'
import dashboard_icon_1 from './assets/dashboard_icon_1.png'
import dashboard_icon_2 from './assets/dashboard_icon_2.png'
import dashboard_icon_3 from './assets/dashboard_icon_3.png'
import dashboard_icon_4 from './assets/dashboard_icon_4.png'
import dashboard_icon_5 from './assets/dashboard_icon_5.png'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

  return (
    <div className=' h-full bg-black rounded-2xl flex flex-col justify-between lg:p-9 md:p-4 p-7'>
      <div className='gap-5 flex items-start flex-col'>

        <p className='text-white font-bold text-2xl md:text-xl lg:text-3xl mx-auto md:mx-0 mb-5'>Board.</p>

        <NavLink to="/dashBoard">
          <div className='flex gap-4 items-center mx-auto md:mx-0'>
            <div>
              <img src={dashboard_icon_1} alt="dashboard" />
            </div>
            <p className='text-white text-sm md:text-xs lg:text-lg'>Dashboard</p>
          </div>
        </NavLink>

        <NavLink to="/transactions">
          <div className='flex gap-4 items-center mx-auto md:mx-0'>
            <div>
              <img src={dashboard_icon_2} alt="dashboard" />
            </div>
            <p className='text-white text-sm md:text-xs lg:text-lg'>Transactions</p>
          </div>
        </NavLink>

        <NavLink to="/schedules">
          <div className='flex gap-4 items-center mx-auto md:mx-0'>
            <div>
              <img src={dashboard_icon_3} alt="dashboard" />
            </div>
            <p className='text-white text-sm md:text-xs lg:text-lg'>Schedules</p>
          </div>
        </NavLink>

        <NavLink to="/users">
          <div className='flex gap-4 items-center mx-auto md:mx-0'>
            <div>
              <img src={dashboard_icon_4} alt="dashboard" />
            </div>
            <p className='text-white text-sm md:text-xs lg:text-lg'>Users</p>
          </div>
        </NavLink>

        <NavLink to="/settings">
          <div className='flex gap-4 items-center mx-auto md:mx-0'>
            <div>
              <img src={dashboard_icon_5} alt="dashboard" />
            </div>
            <p className='text-white text-sm md:text-xs lg:text-lg'>Settings</p>
          </div>
        </NavLink>

      </div>
      <div className='mt-8 flex flex-col gap-3'>
        <p className='text-white text-xs '>Help</p>
        <p className='text-white text-xs '>Contact Us</p>
      </div>
    </div>
  )
}

export default SideBar
