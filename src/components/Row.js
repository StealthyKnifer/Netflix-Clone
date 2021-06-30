import React, {useState, useEffect} from 'react';
import axios from '../axios';
import './Row.css';
const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchUrl]);

    return (
        <div className="row">
            <h2>{props.title}</h2>

            <div className="row__posters">
                {movies.map((movie) => {
                    if(!movie.backdrop_path){
                        return 1
                    }
                    return (
                        
                        <img
                            key={movie.id}
                            className={`row__poster ${props.isLargeRow ? "row__posterLarge": ""}`}
                            src={`${baseUrl}${movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Row;
