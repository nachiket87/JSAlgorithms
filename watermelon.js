const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (number) => {
  const n = Number(number);
  console.log(n % 2 === 0 && n > 2 ? "YES" : "NO");
  readline.close();
});
