import React, { useEffect, useState } from 'react'
import './row.css'
import axios from './axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

export const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ fetchUrl, title, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState();
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: '450px',
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    function handleClick(movie) {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.originalName || '')
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((err) => console.log(err));
        }
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row--posters'>
                {movies.map((movie) => (
                    <img
                        onClick={() => handleClick(movie)}
                        className={`row--poster ${isLargeRow && 'row--posterLarge'}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
                        key={movie.id} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div >
    )
}

export default Row