import React from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import '../styles/contenido.scss';


export default function Contenido({children}) {

    let location = useLocation();

    const categoriaItem = useSelector((state) => state.item.categorias);
    const categoriaLista = useSelector((state) => state.list.categorias);
    

    const categorias = location.pathname === '/' || location.pathname === '/items' ? categoriaLista : categoriaItem;

    return (
        <main>
            {categorias && (
                <ul className="list-categorias">
                    {categorias.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
            )}
            {children}
        </main>
    );
}
