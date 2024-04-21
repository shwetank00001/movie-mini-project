import { useState, useEffect } from "react";
import MovieCard from "./assets/MovieCard";
import "./App.css";

function App() {
    const [movieData, setMovieData] = useState([]);
    const [movieSearched, setMovieSearched] = useState("");
    
    const API_URL = "http://www.omdbapi.com?apikey=ff300d24";

    async function searchMovies(title) {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovieData(data.Search);
    }

    console.log(movieData)

    useEffect(() => {
        searchMovies();
    }, [movieSearched]);

    const ele = movieData.map((item) => (
        <MovieCard movieProp={item} key={item.imdbID} />
    ));

    return (
        <div className="container">
            <header className="header">
                <h1>Mini Movie Project</h1>
                <p>For revision purpose (Made in 30minutes)</p>
            </header>
            <div className="search-container">
                <input
                    className="search-input"
                    placeholder="Search for a movie"
                    value={movieSearched}
                    onChange={(e) => setMovieSearched(e.target.value)}
                />
                <button
                    className="search-button"
                    onClick={() => searchMovies(movieSearched)}
                >
                    Search for a movie
                </button>
            </div>
            {movieSearched.length > 3 ? <div className="movies-container">{ele}</div> : <h2>Searching..</h2>}
            
        </div>
    );
}

export default App;
