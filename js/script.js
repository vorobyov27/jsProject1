"use strict";

// Task1
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', "");

// console.log(numberOfFilms);

// Task2

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Task3


let a = prompt('Один из последних просмотренных фильмов?', ""),
    b = prompt('На сколько его оцениваете?', ""),
    c = prompt('Один из последних просмотренных фильмов?', ""),
    d = prompt('На сколько его оцениваете?', "");

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);