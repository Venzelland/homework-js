const innerObject = {};
const middleArray = [1, 2, 3, innerObject];


const workingObject = {
  a: middleArray
};

const workingObject = new Object();
workingObject.a = middleArray;

const workingObject = Object.create({});
workingObject.a = middleArray;

const workingObject = Object.assign({}, { a: middleArray });