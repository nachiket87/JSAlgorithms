var flightLength = 120;
var flightMovies = [100, 87, 60, 28, 82, 40];
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
