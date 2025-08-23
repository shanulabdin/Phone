class Movie {
  constructor(name, director, rating, earnings){
    this.name = name;
    this.director = director;
    this.rating = rating;
    this.earnings = earnings;
  }

  isHit(){
    return this.rating >= 75 && this.earnings > 500 ? this.name + ' was a Mega HIT' : this.name + ' was a FLOP';
  }
  
  static showAllMovies(movies){
    movies.sort((a, b) => b.rating - a.rating)
    
    for(let movie of movies){
      const movieInfo = `🎬 Name: ${movie.name} | Director: ${movie.director} | Rating: ${movie.rating} | 💰 Earnings: $${movie.earnings}M`
      
      console.log(movieInfo);
      console.log(movie.isHit());
      console.log('----------------')
    }
  }
  
  static showHitMovies(movies){
      movies.filter(movie => movie.rating >= 75 && movie.earnings >= 500)
        .forEach(movie => console.log(`Name: ${movie.name} | Rating: ${movie.rating} | Earnings: ${movie.earnings}`));
  }
  
  static highestGrossing(movies){
    let topMovie = movies[0];
    for(let movie of movies){
      if(movie.earnings > topMovie.earnings){
        topMovie = movie;
      }
    }
    console.log(`💵 Highest Grossing: ${topMovie.name} ($${topMovie.earnings}M)`);
  }
  
  static totalBoxOffice(movies){
    let boxOffice = 0;
    for(let movie of movies){
      boxOffice += movie.earnings;
    }
    console.log(`📊 Total Box Office of all movies: $${boxOffice}M`);
  }
}

const movies = [
  new Movie('Inception', 'Nolan', 91, 829),
  new Movie('Avatar', 'Cameron', 82, 2780),
  new Movie('Random', 'Someone', 60, 150),
  new Movie('Matrix', 'Wachowskis', 88, 463),
  new Movie('Iron Man', 'Favreau', 78, 585),
  new Movie('Thor', 'Branagh', 72, 449),
  new Movie('Dune', 'Denis', 95, 1349),
  new Movie('WhipLash', 'Branagh', 83, 579),
];

Movie.showAllMovies(movies);
Movie.showHitMovies(movies);
Movie.highestGrossing(movies);
Movie.totalBoxOffice(movies);