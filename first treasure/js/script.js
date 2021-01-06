"use strict";

const numberOfFilms = +prompt('сколько фильмов вы смотрели?', '');

const personalmoviedb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов?', ''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = prompt('на сколько оцените его?', '');

personalmoviedb.movies[a] = b;
personalmoviedb.movies[c] = d;

console.log(personalmoviedb);