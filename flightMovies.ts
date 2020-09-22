const flightLength: number = 120;

const flightMovies: Array<number> = [100, 37, 83, 28, 82, 40];



const aa = (flightLength: number, flightMovies: number[]) => {
  let a:boolean = false;
  flightMovies.forEach((movie) => {
    if(flightMovies.indexOf(flightLength-movie) >= 0)
    {
      return a = true;
    }
  })
  return a;
}


console.log(aa(flightLength, flightMovies));

