import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  // state갖기 위해 class component가질 필요 없음.
  // react hook !!

  // react router dom
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }, // state movies
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }); // axios movies
  };
  componentDidMount() {
    //https://yts.mx/api#list_movies
    //https://yts.mx/api/v2/list_movies.json
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000); //timeout
    //axios : fetch 위에 있는 작은 layer
    // fetch();
    this.getMovies();
  }
  render() {
    // component Did mount 1.
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
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
    );
  }
}

export default Home;
