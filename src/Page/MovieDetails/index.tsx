import { useEffect, useState } from "react";
import { Ifilm } from "../../types/films";
import './style.css'
import { getFilmDetails } from "../../api/film";

export const MovieDetails = () => {

    const [film, setFilm] = useState<Ifilm>();

    const handleGetMovieDetails = async () => {

        const response = await getFilmDetails('');

        setFilm(response);
    }



    useEffect(() => {
        handleGetMovieDetails();
    }, []);

    return (
    <div className="details-container">
        {film 
        ? (
            <> 
                <div className="film-section">
                    <img src={film?.Poster} alt="poster" />
                
                    <div className="details">
                        <h1>{film?.Title}</h1>

                    
                        <div className="infos">
                            <ul>
                                <li>Lançamento: {film?.Released}</li>

                                <li>Gênero: {film?.Genre}</li>

                                <li>Atores: {film?.Actors}</li>

                                <li>Pontuação: {film?.imdbRating} - {film?.imdbVotes}</li>
                            </ul>
                        </div>
                    </div>    
                
                </div>

                <p className="plot">
                    {film?.Plot}
                </p>
            </>
        )
        : <div className="loading">
            <span>Carragando filme...</span>
        </div>
        }
    </div>
    ) 
}