import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import logo from '../assets/Logo_ML.png';
import logo2x from '../assets/Logo_ML@2x.png.png';
import '../styles/header.scss';


export default function Header() {

    const {dat} = useQuery('search');
    const [searchField, setSearchField] = useState('');
    const hist = useHistory();

    const busqItems = (e) => {
        e.preventDefault();
        if (searchField !== '' && dat !== searchField) hist.push(`/items?search=${searchField}`);
    };

    const handleChange = (e) => {
        setSearchField(e.target.value);
    };

    useEffect(() => {
        setSearchField(dat);
    }, [dat]);

    return (
        <header>
            <nav>
                <form className="search-form" onSubmit={busqItems}>
                    <div className="logo">
                        <Link to="/">
                            <img
                                src={logo}
                                srcSet={`${logo} 1x, ${logo2x} 2x`}
                                alt="Mercado Libre Argentina - Donde comprar y vender de todo"
                            />
                        </Link>
                    </div>
                    <div className="search">
                        <div className="nav-search">
                            <label htmlFor="search-input">Buscar</label>
                            <input
                                type="text"
                                id="search-input"
                                placeholder="Nunca dejes de buscar"
                                className="nav-search-input"
                                value={searchField}
                                onChange={handleChange}
                            />
                            <button type="submit" className="nav-search-btn" aria-label="Buscar" />
                        </div>
                    </div>
                </form>
            </nav>
        </header>
    );
}
