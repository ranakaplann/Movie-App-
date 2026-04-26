import "../css/Favorites.css";
import { useMovieContext } from "../components/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
    const { favorites } = useMovieContext();

    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>Your Favorites</h2>
                <h3>You have no favorite movies yet. Start adding some!</h3>
            </div>
        );
    }

    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) =>
                        (<MovieCard movie={movie} key={movie.id} />)
                    )}
                </div>
            </div>
        );

    }

    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map((movie) =>
                    <MovieCard movie={movie} key={movie.id} />
                )}
            </div>
        </div>
    );
}


export default Favorite
