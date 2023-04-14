import React from 'react';
import "./index.scss";
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { paymentCard, studentCard } from '../../constants/CardsInfo';
import PaymentCard from '../../UI/Cards/PaymentCard';

const Payment = () => {
    return (
        <div>
            <div className='Payment-main'>

                <Sidebar />

                <div className="Payment-box">

                    <Header />

                    <div className="payment__wrapper">

                        <div className="payment__wrapper--box">

                            <h2 className="payment__wrapper--box-title">Payments Details</h2>

                            <div className="payment__wrapper--box-btns">
                                <button className="payment__wrapper--box-btns-top"><i class='bx bx-up-arrow'></i></button>
                                <button className="payment__wrapper--box-btns-buttom"><i class='bx bx-down-arrow' ></i></button>
                            </div>

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
                                </tr>
                            </thead>

                            <tbody>

                            {
                                    paymentCard.map((item) => {
                                        return <PaymentCard item={item} />
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

export default Payment;