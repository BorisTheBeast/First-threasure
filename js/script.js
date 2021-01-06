"use strict";

const numberoffilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalmoviedb = {

    count: numberoffilms,
    movies: {},
    actors: {},
    genreds: [],
    privat: false
};

