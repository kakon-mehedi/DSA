// Given a string
// Generate a random string from that string 


// Example : Given a string kakon
// output can be konak, akonak, onkak etc 


// Solution

// 1. make the characters array => [k, a, k, o, n]
// 2. make a random number from 0 to array.length => 12435



function makeid(length) {
    let result = '';
    const characters = 'kakon';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(makeid(5));
