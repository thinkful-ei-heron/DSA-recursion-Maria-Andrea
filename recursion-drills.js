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

}

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

const strSplitter = function (str, separator) {
    if (str === '') {
        return '';
    }

};

strSplitter('02/20/2020');