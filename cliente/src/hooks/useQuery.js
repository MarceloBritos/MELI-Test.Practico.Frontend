import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';


export default function useQ(query) {
    const {search} = useLocation();
    const [s, setS] = useState('');

    useEffect(() => {
        let st = '';
        if (search !== '') {
            const q = new URLSearchParams(search);
            st = q.get(query);
            st = st ? st : '';
        }
        setS(st);
    }, [search, query]);

    return {
        s,
    };
}
