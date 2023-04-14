import React from 'react';

const PaymentCard = (props) => {

    const { item: { title, paymentSchedule, billNumber, amountPaid, balanceAmount, data } } = props;


    return (
        <>
            <tr>
                <td>{title}</td>
                <td>{paymentSchedule}</td>
                <td>{billNumber}</td>
                <td>{amountPaid}</td>
                <td>{balanceAmount}</td>
                <td>{data}</td>
                <td><button className='custom-btn'><i class='bx bx-low-vision' ></i></button></td>
            </tr>
        </>
    );
};

export default PaymentCard;