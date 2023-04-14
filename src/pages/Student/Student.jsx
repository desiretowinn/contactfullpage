import React from 'react';
import "./index.scss"
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { studentCard } from '../../constants/CardsInfo';
import StudentCard from '../../UI/Cards/StudentCard';


const Student = () => {
    return (
        <div>
            <div className='Student-main'>

                <Sidebar />

                <div className="Student-box">

                    <Header />

                    <div className="student__wrapper">

                        <div className="student__wrapper--box">

                            <h2 className="student__wrapper--box-title">Students List</h2>

                            <div className="student__wrapper--box-btns">
                                <button className="student__wrapper--box-btns-top"><i class='bx bx-up-arrow'></i></button>
                                <button className="student__wrapper--box-btns-buttom"><i class='bx bx-down-arrow' ></i></button>
                            </div>

                            <button className="student__wrapper--box-btn">ADD NEW STUDENT</button>

                        </div>

                        <hr />


                        <table>

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Enroll Number</th>
                                    <th>Date of admission</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    studentCard.map((item) => {
                                        return <StudentCard item={item} />
                                    })
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Student;