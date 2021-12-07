//write your code here

const animalArray = ['cheetah', 'dog', 'cat', 'dodobird', 'bear', 'dolphin'];

const pluralize = function(array){
    return array.map(word => `${word}s`);
};
console.log(pluralize(animalArray));

const upperCase = function(array){
    return array.map(word => word[0].toUpperCase() + word.substr(1));
};
console.log(upperCase(animalArray));

const longWords = function(array){
    return array.filter(word => word.length > 3);
};
console.log(longWords(animalArray));

const shortWords = function(array){
    return array.filter(word => word.length < 5);
};
console.log(shortWords(animalArray));

const oddLength = function(array){
    return array.filter(word => word.length % 2 !== 0);
};
console.log(oddLength(animalArray));

const longToShort = function(array){
    return array.sort((a, b) => b.length - a.length);
};
console.log(longToShort(animalArray));

const sum = function(array){
    return array.reduce((a, b) => a + b);
};
console.log(sum([22, 15, 1114, 416, 37, 4]));