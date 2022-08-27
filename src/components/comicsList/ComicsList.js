import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import {Link} from "react-router-dom";

import './comicsList.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setnewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setnewItemLoading(false) : setnewItemLoading(true);
        getAllComics(offset)
            .then(onComicsLoaded)
    }

    const onComicsLoaded = (newComicsList) => {
        let ended = false;
        
        if(newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setnewItemLoading(false)
        setOffset(offset => offset + 8);
        setComicsEnded(ended);
    }

    const items = comicsList.map((item, i) => {
        return (
            <li key={i} className="comics__item">
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
            </li>
        )
    })

    const spinner = loading && !newItemLoading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            <ul className="comics__grid">
                {items}
            </ul>
            <button disabled={newItemLoading} onClick={() => onRequest(offset)} className="button button__main button__long" style={{'display': comicsEnded ? "none" : "block"}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;