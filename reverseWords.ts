// reverseWords should print 'steal pound cake'

const reverseWords = (message: Array<string>) => {
  const temp: string = message.join("")
  const answer: Array<string> = temp.split(" ").reverse();
  console.log(answer.join(" ")); // hard coded answer perhaps there's a better way to do this.
}

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);



