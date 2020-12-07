import React from 'react';
import Header from './Header';
import Content from './Contenido';
import '../styles/layout.scss';


export default function Layout({children}) {
    return (

        <div className="container">
            <Header />
            <Content>{children}</Content>
        </div>
    );
}
