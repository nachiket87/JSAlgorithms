function songDecoder(song) {
  const a = song.split('WUB');
  let answer = '';
  a.forEach((item) => {
    if (item) {
      answer = answer + ' ' + item;
    }
  });
  return answer.trim();
}

console.log(songDecoder('AWUBBWUBC'));
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
console.log(songDecoder('WUBAWUBBWUBCWUB'));
console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
