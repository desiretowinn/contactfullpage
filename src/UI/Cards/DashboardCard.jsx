import React from 'react';

const DashboardCard = (props) => {

    const { item: { title, data, img } } = props;

    return (
        <div>

            <div className="Dash__cards">

                <div className="Dash__cards--card">
                    <img className='Dash__cards--card-img' src={img} alt="" />
                    <h3 className="Dash__cards--card-title">{title}</h3>
                    <p className="Dash__cards--card-data">{data}</p>
                </div>

            </div>

        </div>
    );
};

export default DashboardCard;