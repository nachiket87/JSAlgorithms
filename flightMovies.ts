/* 
A person is on a fligth of flightLength minutes.
an array of flightMovies is the length of the movies available on the flight.
create a function to check if a person can watch EXACTLY 2 movies on this flight.
return a boolean.
make sure the person doesn't watch the same movie twice. 
*/
const flightLength: number = 120;
const flightMovies: Array<number> = [100, 87, 60, 28, 82, 40];

// the issue is if the person watches the same movie twice. Will fix soon.

const aa = (flightLength: number, flightMovies: number[]) => {
  let a: boolean = false;
  flightMovies.forEach((movie) => {
    if (flightMovies.indexOf(flightLength - movie) >= 0) {
      return (a = true);
    }
  });
  return a;
};

console.log(aa(flightLength, flightMovies));
