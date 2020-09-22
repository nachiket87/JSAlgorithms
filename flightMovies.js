/*
A person is on a fligth of flightLength minutes.
an array of flightMovies is the length of the movies available on the flight.
create a function to check if a person can watch EXACTLY 2 movies on this flight.
return a boolean.
make sure the person doesn't watch the same movie twice.
*/
var flightLength = 120;
var flightMovies = [100, 87, 60, 28, 82, 40];
// the issue is if the person watches the same movie twice. Will fix soon.
var aa = function (flightLength, flightMovies) {
    var a = false;
    flightMovies.forEach(function (movie) {
        if (flightMovies.indexOf(flightLength - movie) >= 0) {
            return a = true;
        }
    });
    return a;
};
console.log(aa(flightLength, flightMovies));
