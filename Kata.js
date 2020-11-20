function getCount(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsArray = str.split('');
  var vowelsCount = vowelsArray.reduce((count, item) => {
    return vowels.includes(item) ? (count = count + 1) : count;
  }, 0);
  return vowelsCount;
}

getCount('abracadabra');
