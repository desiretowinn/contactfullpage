import React from 'react';
import "./index.scss";
import img2 from '.././../assets/images/Logo-sidebar.svg'
import img3 from '.././../assets/images/avatar-sidebar.png'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className="side__wrapper">

            <a className="side__wrapper--link" href="#"><img className="Side--wrapper--link-img" src={img2} alt="Logo of website" /></a>
            <img src={img3} alt="avatar" className='side__wrapper--img'/>

            <h2 className="side__wrapper--title">Karthi Madesh</h2>
            <NavLink to='/' className="side__wrapper--text">Admin</NavLink>

            <NavLink to="/dishboard" className="side__wrapper--pages"><i className='bx bx-home'></i>Home</NavLink>
            <a href="#" className="side__wrapper--pages"><i className='bx bx-bookmark' ></i>Course</a>
            <NavLink to="/student" className="side__wrapper--pages"><i className='bx bxs-graduation' ></i>Students</NavLink>
            <NavLink to="/payment" className="side__wrapper--pages"><i className='bx bx-dollar-circle' ></i>Payment</NavLink>
            <a href="#" className="side__wrapper--pages"><i className='bx bx-file' ></i>Report</a>
            <a href="#" className="side__wrapper--pages"><i className='bx bx-slider' ></i>Settings</a>

            <button className='side__wrapper--btn'>Logout<i className='bx bx-log-in-circle' ></i></button>

            </div>
        </div>
    );
};

export default Sidebar;