import React from 'react';


export default function setPrecio({price: {amount, decimals}}) {
    let int = Math.trunc(amount);
    int = int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    let decimal = decimals > 0 ? amount.toString().substr(decimals * -1) : '';

    return (
        <>
            <span className="price-symbol">$</span>
            <span>{int}</span>
            <span className="price-decimal">{decimal}</span>
        </>
    );
}
