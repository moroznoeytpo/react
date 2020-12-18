"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    mivies: {},
    actions: {},
    genries: [],
    privat: false,
};

for (let i=0; i<2; i++) {
    let lastFilmview = prompt('Один из последних просмотренных фильмов?', ''),
        filmrating = prompt('На сколько оцените его?', '');
    personalMovieDB.mivies[lastFilmview] = filmrating;
}
console.log(personalMovieDB);
