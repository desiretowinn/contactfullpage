import React from 'react';

const StudentCard = (props) => {

    const { item: { title, img, email, phone, enrollNumber, admissionDate } } = props;


    return (
        <>
            <tr>
                <td><img src={img} alt="" className="td-img" /></td>
                <td>{title}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{enrollNumber}</td>
                <td>{admissionDate}</td>
                <td><button className='custom-btn'><i class='bx bx-trash-alt' ></i></button></td>
                <td><button className='delete-btn'><i class='bx bx-pencil' ></i></button></td>
            </tr>
        </>
    );
};

export default StudentCard;