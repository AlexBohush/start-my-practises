// task 1

const town = "Kyiv";
console.log("town: ", town);

const country = "Ukraine";
console.log("country: ",country);

const population = 43.13;
console.log("population: ",population);

const footballStadium = true;
console.log("footballStadium: ", footballStadium);
    

console.log("------------------------");

// task 2

const h = 40;
const b = 70;

const s = h * b;
console.log("square: ", s);


function square (h, b) {
    const s = h * b;
    return s;
}

console.log("square: ", square(40, 70));

console.log("------------------------");

// task 3

const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
const distanceCarFirst = time * speedOfFirst;
const distanceCarSecond = time * speedOfSecond;

const totalDistance = distanceCarFirst + distanceCarSecond;

console.log("totalDistance: ", totalDistance);


function funTotalDistance(t, sFirst, sSecond) {
    const distanceCarFirst = t * sFirst;
    const distanceCarSecond = t * sSecond;
    return distanceCarFirst + distanceCarSecond;
}

console.log("funTotalDistance: ", funTotalDistance(2, 95, 114));

console.log("------------------------");

// task 4
const randomNumber = Math.floor(Math.random() * 100);

const lessNum = randomNumber < 20;
const moreNum = randomNumber > 50;

if (lessNum) {
    console.log(randomNumber, "randomNumber less than 20");
} else if (moreNum) {
    console.log(randomNumber, "randomNumber more than 50");
} else {
    console.log(randomNumber, "randomNumber less than 20 and more than 50");
}

console.log("------------------------");

// task 5

switch (true) {
    case lessNum:
        console.log(randomNumber, "randomNumber less than 20");
        break;
    case moreNum:
        console.log(randomNumber, "randomNumber more than 50");
        break;
    default:
        console.log(randomNumber, "randomNumber less than 20 and more than 50");
}

