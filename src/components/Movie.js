import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
return <div className="movies_movie">
    <img src={poster} alt={title}/>
    <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <p className="movie_summary">{summary}</p>
        <ul className="movie_genres">
            {genres.map((genre, index) => (
                //key={} 활용해서 key처리 가능
                <li key={index} className="movie_genre">{genre}</li>
            ))}
        </ul>
    </div>
</div>
}

//static propTypes 와 동일
Movie.propTypes = {
    id: PropTypes.number.isRequired, 
    year: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired, 
    poster: PropTypes.string.isRequired, 
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;