import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getItem} from '../redux/actions/itemActions';
import Spinner from '../components/Spinner';
import Price from '../components/Precio';
import '../styles/article.scss';


export default function Articulo() {
    
    const despach = useDispatch();

    let {id} = useParams();

    const loading = useSelector((state) => state.item.loading);
    const item = useSelector((state) => state.item.item);
    

    useEffect(() => {
        if (id) {
            despach(getItem(id));
        }
    }, [id, despach]);

    const gSdesc = (item) => {
        let shipping = item.free_shipping ? ' - Envío gratis a todo el país' : '';
        let seoDesc =
            item.id &&
            `Compralo en Mercado Libre a $ ${
                item.price.amount
            } - Pagá en cuotas${shipping}. Encontrá más productos de ${item.categories.join(', ')}.`;
        return seoDesc;
    };

    const seoDesc = !loading ? gSdesc(item) : 'Busca productos, marcas y mas en Mercado Libre Argentina';

    return (
        <>
            {loading ? (
                <>
                    <Helmet>
                        <title>Cargando producto en Mercado Libre Argentina...</title>
                        <meta name="description" content={seoDesc} />
                    </Helmet>
                    <Spinner />
                </>
            ) : (
                <>
                    <Helmet>
                        <title>{item.title} | Mercado Libre</title>
                        <meta name="description" content={seoDesc} />
                    </Helmet>
                    <div className="content-container">
                        <div className="item-detail">
                            <div className="item-detail--image">
                                <img src={item.picture} alt={item.title} />
                            </div>
                            <div className="item-detail--info">
                                <p className="quantity">
                                    {item.condition} - {item.sold_quantity} vendidos
                                </p>
                                <h1>{item.title}</h1>
                                <div className="item-detail--price">
                                    <Price price={item.price} />
                                </div>

                                <button aria-label="Comprar">Comprar</button>
                            </div>
                            <div className="item-detail--description">
                                <h3>Descripción del producto</h3>
                                <p>
                                    {item.description.split('\n').map((itemDesc, key) => {
                                        return (
                                            <React.Fragment key={key}>
                                                {itemDesc}
                                                <br />
                                            </React.Fragment>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
