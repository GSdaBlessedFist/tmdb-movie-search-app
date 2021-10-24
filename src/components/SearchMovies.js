import {useState} from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const apiKey = process.env.REACT_APP_TMDB_APIKEY;

    const searchMovies = async(e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}
		&query=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results)
        } catch (err) {
            console.log(err);
        }

    }
    
	return (
		<>
		<form className="form" onSubmit={searchMovies}>
			<label className="label" htmlFor="query">Movie Name</label>
			<input className="input"type="text" name="query" placeholder="find a movie" onChange={(e)=>{setQuery(e.target.value)}} value={query} required/>
			<button className="button" type="submit">Search</button>
		</form>
		<div className="card-list">
		{movies.filter((movie)=>movie.poster_path).map((movie)=>
			<MovieCard movie={movie} key={movie.id}/>
			)}
		</div>
		</>)
}