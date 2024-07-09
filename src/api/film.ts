import { FilmList, Ifilm } from "../types/films";

const BASE_URL = "https://www.omdbapi.com/?apikey=b9fe34e5"

export const getFilmDetails = async (filmId: string): Promise<Ifilm> => {
    const response: Ifilm = await fetch(
        `${BASE_URL}&plot=full&i=${filmId}`
    ).then((res) => res.json());

    return response;   
};

export const getFilmList = async (search: string): Promise<FilmList> => {
    const response: FilmList = await fetch(`${BASE_URL}&s=${search}`)
    .then(result => result.json());

    return response;
}