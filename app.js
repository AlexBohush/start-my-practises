// task 1

for (let i = 10; i <= 50; i += 2) {
        console.log(i);
}

console.log('-------------------------------');

// task 2

const human = {
    lastName: 'Alex',
    firstName: 'Bohush',
    age: 31,
    homePet: true
};

console.log(human);

console.log('-------------------------------');

// task 3

const array1 = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];

const swap = (array, a, b) => {
    array[a] = array.splice(b, 1, array[a])[0];
};

swap(array1, 3, 0);
swap(array1, 7, 1);
swap(array1, 2, 3);
swap(array1, 8, 3);
swap(array1, 11, 4);
swap(array1, 9, 6);
swap(array1, 9, 7);
swap(array1, 11, 8);
swap(array1, 12, 10);

const stringIsArr = JSON.stringify(array1);
const joinIsString = array1.join(' ');
const result1 = array1

console.log(joinIsString);
console.log(result1);

console.log('----------------var 1---------------');

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];


const result = `${array[3]} ` + `${array[7]}` + ` ${array[0]}` + ` ${array[8]}` + ` ${array[11]}` + ` ${array[5]}` + ` ${array[9]}` + ` ${array[6]}` + ` ${array[4]}` + ` ${array[1]}` + ` ${array[12]}` + ` ${array[2]}` + ` ${array[10]}`;
const newArr = [array[3], array[7], array[0], array[8], array[11], array[5], array[9], array[6], array[4], array[1], array[12], array[2], array[10]];

console.log(result);
console.log(newArr);

console.log('----------------var 2---------------');

// task 4

const fn = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
};

fn('Alex', 'Bohush');

// task 5

let num = 19;

while (num < 67) {
    num += 2;
        console.log(num);
};
