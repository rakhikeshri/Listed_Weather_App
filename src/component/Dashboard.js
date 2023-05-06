import React, { useState } from 'react'
import SideBar from './SideBar'
import DashboardBody from './pages/DashboardBody'
import Users from './pages/Users'
import Schedules from './pages/Schedules'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'
import sidebar from './assets/sidebar_2.jpg'
import { Route, Routes } from 'react-router-dom'

const Dashboard = ({ user, logout }) => {

    const [toggle, setToggle] = useState(true)

    return (
        <div className='p-8 h-full grid md:grid-cols-4  lg:grid-cols-5 gap-8' style={{ background: '#F5F5F5' }}>
            <img src={sidebar} alt='sidebar toggle' onClick={() => setToggle(!toggle)} className='w-8 h-8 right-8 z-20 fixed md:hidden' />
            {
                toggle &&
                <div className='md:col-span-1 '>
                    <SideBar />
                </div>
            }

            <div className='md:col-span-3 lg:col-span-4'>
                <Routes>
                    <Route path="/dashBoard" element={<DashboardBody user={user} logout={logout} />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/schedules" element={<Schedules />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>

        </div>

    )
}

export default Dashboard
