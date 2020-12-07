const getDecimals = (value) => {
    if (Math.floor(value) === value) return 0;
    return value.toString().split('.')[1].length || 0;
};

const author = {
    name: 'Marcelo',
    lastname: 'Britos',
};

const mapItemBusq = ({id, title, currency_id, price, thumbnail, pictures, condition, shipping, address }) => {
    return {
        id,
        title,
        price: {
            currency: currency_id,
            amount: price,
            decimals: getDecimals(price),
        },
        picture: pictures && pictures.length ? pictures[0].url : thumbnail ? thumbnail : '',
        condition: condition === 'new' ? 'Nuevo' : 'Usado',
        free_shipping: shipping.free_shipping,
        address: address ? address.state_name : null,
    };
};

const mapRespBusq = (items, categories) => {
    return {
        author,
        categories: categories ? categories.values[0].path_from_root.map((category) => category.name) : [],
        items: items.slice(0, 4).map((item) => mapItemBusq(item)),
    };
};

const mapItemDetalle = ({
    id,
    title,
    currency_id,
    price,
    thumbnail,
    pictures,
    condition,
    shipping,
    sold_quantity,
    description,
    categories,
    
}) => {
    return {
        id,
        title,
        price: {
            currency: currency_id,
            amount: price,
            decimals: getDecimals(price),
        },
        picture: pictures && pictures.length ? pictures[0].url : thumbnail ? thumbnail : '',
        condition: condition === 'new' ? 'Nuevo' : 'Usado',
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description,
        categories,
        
    };
};

const mapRespItDetalle = (item) => {
    return {
        author,
        item: mapItemDetalle(item),
    };
};

module.exports = {mapRespItDetalle, mapRespBusq};
