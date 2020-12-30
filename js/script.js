"use strict";

const personalMovieDB = {
    count: 0,
    mivies: {},
    actions: {},
    genres: [],
    privat: false,
};

function start() {
    let numberOfFilms;
    while (!numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    personalMovieDB.count = numberOfFilms;
}

function rememberMyFilms(count) {
    for (let i=0; i<count; i++) {
        let lastFilmview, filmRating;
        while (!lastFilmview || lastFilmview.length > 50 || !filmRating) {
            lastFilmview = prompt('Один из последних просмотренных фильмов?', '');
            filmRating = prompt('На сколько оцените его?', '');
        }
        personalMovieDB.mivies[lastFilmview] = filmRating;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы классный зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres(count) {
    for (let i = 0; i < count; i++) {
        let genre;
        while (!genre) {
            genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        }
        personalMovieDB.genres.push(genre);
    }
}

start();
rememberMyFilms(2);
detectPersonalLevel();
writeYourGenres(3);
showMyDB(personalMovieDB.privat);
