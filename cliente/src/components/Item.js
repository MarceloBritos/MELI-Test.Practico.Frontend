import React from 'react';
import {useHistory} from 'react-router-dom';
import Price from '../components/Precio';
import shipping from '../assets/ic_shipping.png';
import shippingx2 from '../assets/ic_shipping@2x.png.png';
import '../styles/item.scss';


export default function Item({item: {id, title, picture, price, free_shipping, address}}) {
    
    const history = useHistory();

    return (
        <div className="item" onClick={() => history.push(`/item/${id}`)}>
            <div className="item-container">
                <div className="item-picture">
                    <img src={picture} alt={title} />
                </div>
                <div className="item-resume">
                    <div className="item-resume--title">
                        <div className="item-resume--price">
                            <Price price={price} />
                            {free_shipping ? (
                                <img src={shipping} srcSet={`${shipping} 1x, ${shippingx2} 2x`} alt="Envío gratis" />
                            ) : null}
                        </div>
                    </div>
                    <h2>{title}</h2>
                </div>
                <span className="item-resume--address">{address}</span>
            </div>
        </div>
    );
}
