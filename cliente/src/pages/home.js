import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Helmet} from 'react-helmet-async';
import {clearItems, getItems} from '../redux/actions/listActions';
import useQuery from '../hooks/useQuery';
import Spinner from '../components/Spinner';
import Item from '../components/Item';
import '../styles/home.scss';


export default function Home() {

    const despach = useDispatch();

    const loading = useSelector((state) => state.list.loading);
    const items = useSelector((state) => state.list.items);    

    const {s} = useQuery('search');
    

    useEffect(() => {
        if (s !== '') {
            despach(getItems(s));
        } else {
            despach(clearItems());
        }
    }, [s, despach]);

    const seobusq = s.charAt(0).toUpperCase() + s.slice(1);
    const seoDesc = `Encontrá ${seobusq} en Mercado Libre Argentina. Descubrí la mejor forma de comprar online.`;

    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Buscando {seobusq} en Mercado Libre Argentina...</title>
                    <meta name="description" content={seoDesc} />
                </Helmet>
                <Spinner />
            </>
        );
    }

    const msg = s !== '' ? 'No se encontraron productos' : '';
    const pagtitulo =
        s !== '' ? `${seobusq}  en Mercado Libre Argentina` : 'Busca productos, marcas y mas en Mercado Libre Argentina';

    return (
        <>
            <Helmet>
                <title>{pagtitulo}</title>
                <meta name="description" content={seoDesc} />
            </Helmet>
            {items.length ? (
                <div className="content-container">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <Item item={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <>
                    {msg !== '' && (
                        <div className="main-container">
                            <h1>{msg}</h1>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
