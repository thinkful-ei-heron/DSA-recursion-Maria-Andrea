/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable strict */

//Counting Sheep
//input = numOfSheep
//display 'Another sheep jumps over the fence'
//display 'All sheep jumped over fence'

const countSheep = function (numOfSheep) {
    if (numOfSheep === 0) {
        return 'All sheep jumped over fence';
    }

    console.log(`${numOfSheep} Another sheep jumps over the fence`);
    countSheep(numOfSheep - 1);
};

countSheep(3);


//Power Calculator
//input = base, exponent
// < 0 => 'exponent should be >=0'

const powerCalculator = function (base, exponent) {
    if (exponent < 0) {
        return 'exponent should be >= 0';
    }

    return console.log(Math.pow(base, exponent));

};

powerCalculator(10, 2); //100
powerCalculator(10, -2); //return message

//Reverse String

const reverseStr = function (str) {
    if (str === '') {
        return '';
    }
    const newStr = str.split('').reverse().join('');

    return console.log(newStr);

};

reverseStr('Hello');

// nth Triangle Number 

const numCounts = function (num) {
    if (num === 1) {
        return 1;
    }
    return num + numCounts(num - 1);
};

numCounts(9);

//String Splitter
//input 02/20/2020
//output ['02', '20', '2020']

const strSplitter = function (str, array = []) {
    let index = str.indexOf('/');
    let i = str.slice(0, index);

    if (!str.includes('/')) {
        array.push(str);
        return array;
    }

    array.push(i);

    let splitStr = str.slice(index + 1, str.length);
    return strSplitter(splitStr, array);
};

strSplitter('02/20/2020');
strSplitter('test/code');

//Fibonacci

function fibonacci(number) {

    if (number < 1)
        return 0;

    if (number <= 2)
        return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

fibonacci(7);

//Factorial
//multiply number by each num between itself and 1
//5*4*3*2*1 = 120

const factorial = function (num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
};
factorial(5); //120

//Find way out of maze
//possible exit path RRDDLLDDRRRRRR
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const wayOut = function (mySmallMaze, y = 0, x = 0) {
    //base case
    if (mySmallMaze[y][x] === 'e') {
        return 'exit';
    }
    let direction;
    if (mySmallMaze[x + 1] && mySmallMaze[y][x + 1] !== '*') {
        x++;
        direction = 'R';
    }
    else if (mySmallMaze[y + 1] && mySmallMaze[y + 1][x] !== '*') {
        y++;
        direction = 'D';
    }
    else {
        x--;
        direction = 'L';
    }
    return direction + wayOut(mySmallMaze, y, x);
};
console.log(wayOut(mySmallMaze));


//Binary Representation
//print binary representation of a given number assume all numbers are positive

//input: 25      3 => 11
//output: 1101

//25%2 = 1  25/2 = 12
//12%2 = 0  12/2 = 6
//6%2 = 0   6/2=3
//3%2 = 1   3/2 = 1
//1%2 =1  1/2 = 0 STOP

//1101

//binary goes from right to left, bottom to top

function binaryRep(num) {
    //base case
    if (num < 0) {
        return '';
    }

    let binary = num % 2; //1 0 0
    return binaryRep(Math.floor(num / 2)) + binary; //12 6 3
}

binaryRep(3);
//   binaryRep(1) + 1 => 1+1 = 11
//     binaryRep() + 1  => '' + 1

