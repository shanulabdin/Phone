class Movie {
  constructor(title, director, rating){
    this.title = title;
    this.director = director;
    this.rating = rating;
  }

  isHit(){
    return this.rating >= 75
      ? `"${this.title}" is a hit movie!`
      : `"${this.title}" is not a hit movie.`;
  }

  // Static method to show all movies
  static showAllMovies(movies){
    movies.sort((a,b) => b.rating - a.rating); // sort by rating descending

    for (let movie of movies){
      console.log(`Title: ${movie.title}, Director: ${movie.director}, Rating: ${movie.rating}`);
      console.log(movie.isHit());
      console.log('-------------------');
    }
  }
}