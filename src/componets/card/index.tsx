import { Ifilm } from '../../types/films';
import './style.css'

interface CardProps {
    film: Ifilm;
}

export const Card = ({film}: CardProps) => {
    return (
        <div className='card-container'>
            <img src={film.Poster} alt="poster" />

            <a href='MovieDetails'>{film.Title}</a>

            <span>Ano: {film.Year}</span>
            <span>ID: {film.imdbID}</span>
        </div>
    );
}