import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //async, await, axios 와우
  getMovies = async () => {
    //movies.data.data.movies를 이렇게 축약 가능(es6)
    //변수명은 그냥 json에 선언된걸 따라가는 듯
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //{movies: movies}라고 해야하지만,, 알아서 잘 처리해줌
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      //class 대신 className을 사용. react가 헷갈려함

      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default Home;
