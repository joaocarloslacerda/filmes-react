import { ChangeEvent, useEffect, useState } from 'react';
import { Ifilm } from '../../types/films'
import './style.css'
import { Card } from '../../componets/card';
import { getFilmList } from '../../api/film';
import { Input } from '../../componets/Input'
import { Button } from '../../componets/Button'

export const Home = () => {
    const [films, setFilms] = useState<Ifilm[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('Hulk');

    const handleSearchFiles = async () => {
        setIsLoading(true);

        const response = await getFilmList(search);
           
        setFilms(response.Search);
        setIsLoading(false);
    };

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setSearch(value);
    }

    const handleSearch = () => {
        handleSearchFiles()
    }

    useEffect(() => {
        handleSearchFiles();
    }, []);


    return (

        <>
            <div className='search-container'>
                <Input value={search} onChange={handleChangeSearch}/>

                <Button onClick={handleSearch}>Buscar</Button>
            </div>

            <div className='films-container'>
                {
                    isLoading ? (
                        <div>
                            <span>Carregando listagem de filmes...</span>
                        </div>
                    ):(
                        films.map(film => {
                            return <Card key={film.imdbID} film={film} />
                        })
                    )
                }
            </div>        
        </>
    );
}