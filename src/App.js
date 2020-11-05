import React from 'react';
import axios from "axios";
import Movie from "./Movie"

class App extends React.Component {
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
    return <div>
      {isLoading ? "Loading,,," : movies.map(movie => (
        <Movie 
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}/>
        ))}
    </div>
  }
}

export default App;
