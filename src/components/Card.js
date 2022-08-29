import React from 'react';
import bed from '../Images/bed.jpg';
import bathroom from '../Images/bathroom.jpg';
import area from '../Images/area.jpg';
import heart from '../Images/heart.jpg';


export default function card(props) {
    const val = props.House;
    return (
        <div className='property-component'>
            <div className='property-component-display'><img className="img-component" src={val.src} /></div>

            <div className='property-component-data'>
                <div className='data'>
                    <div className='price'>
                        <div className='price1'>{val.price}</div>
                        <div className='month'>{val.month}</div>
                    </div>
                    <div><img className="img-heart" src={val.heart_icon} /></div>
                </div>

                <div className='data-title'>{val.name}</div>

                <div className='data-address'>{val.address}</div>

                <div><hr /></div>

                <div className='data-details'>
                    <div className='data-details-subsection'><img className="img-bed" src={val.bed_icon} />{val.bed}</div>
                    <div className='data-details-subsection'><img className="img-bed" src={val.bathroom_icon} />{val.bathroom}</div>
                    <div className='data-details-subsection'><img className="img-bed" src={val.area_icon} />{val.area}</div>
                </div>

            </div>
        </div>
    )
}
