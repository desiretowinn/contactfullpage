import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./index.scss"
import DashboardCard from '../../UI/Cards/DashboardCard';
import { dashboardCard } from '../../constants/CardsInfo';
import Header from '../../components/Header/Header';


const Dishboard = () => {
    return (
        <div className='Dash-main'>
            <Sidebar />

            <div className="Dishboard-box">

                <Header />
                
                <div className="dishboard-wrapper">
                    {
                        dashboardCard.map((item) => {
                            return <DashboardCard item={item} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Dishboard;