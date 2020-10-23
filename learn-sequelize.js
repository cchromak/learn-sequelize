const { Genre, Movie, Actor } = require('./models');

/*
  currently, the genre table only has 3 entries: Action, Comedy, and Drama
  Add one more Genre of your choice.
*/
function insertNewGenre() {
  return Genre.create({ name: 'romcom'});
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
  return Movie.create({ title: 'Goonies', year: 2010, genreId: 2});
}

/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
  return  Movie.findByPk(2).then(movie => {
    return movie.title;
  });
}

/*
  Return an array of all the actor names
*/
function getAllActors() {
  return Actor.findAll().then(actors => {
    return actors.map(arg => arg.name);
  });
}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {
    return Movie.findAll({where: {year: 2008}}).then(movies => {
      return movies.map(arg => arg.title)
    })
}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
   
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
function associateRosarioToEagleEye() {

}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
function associateRobertToTropicThunder() {

}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};
