import { useEffect, useState } from 'react';
import { Ifilm } from '../../types/films'
import './style.css'
import { Card } from '../../componets/card';
import { getFilmList } from '../../api/film';

export const Home = () => {
    const [films, setFilms] = useState<Ifilm[]>([]);

    const handleSearchFiles = async () => {

        const response = await getFilmList('Hulk');
           
        setFilms(response.Search);
    };

    useEffect(() => {
        handleSearchFiles();
    }, []);


    return (
        <div className='films-container'>
            {
                films.map(film => {
                    return <Card key={film.imdbID} film={film} />
                })
            }
        </div>
    );
}