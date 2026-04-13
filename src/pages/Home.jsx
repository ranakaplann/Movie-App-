import MovieCard from "../components/MovieCard"
import { useState } from "react";
import "../css/Home.css"
function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Harry Potter", release_date: "1990" },
        { id: 3, title: "The Help", release_date: "2011" }

    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)

    }


    return (
        <div className="home">
            <form onSubmit={handleSearch} classname="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    classname="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" classname="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />)
                    )}
            </div>
        </div>
    );
}

export default Home