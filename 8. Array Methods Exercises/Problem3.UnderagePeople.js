/*
 Write a function that prints all underage persons of an array of people.
 Use Array#filter and Array#forEach.
 Use only array methods and no regular loops (for, while).
 */

// array of people generated by the first problem:

var peopleArray = [{
    firstname: 'Ivan',
    lastname: 'Ivanov',
    age: 34,
    isFemale: false
},
    {
        firstname: 'Maya',
        lastname: 'Stoyanova',
        age: 46,
        isFemale: true
    },
    {
        firstname: 'Peter',
        lastname: 'Petrov',
        age: 17,
        isFemale: false
    },
    {firstname: 'John', lastname: 'Brown', age: 39, isFemale: false},
    {
        firstname: 'Raya',
        lastname: 'Emilova',
        age: 16,
        isFemale: true
    },
    {
        firstname: 'Emilia',
        lastname: 'Zravkova',
        age: 30,
        isFemale: true
    },
    {
        firstname: 'Ana',
        lastname: 'Angelova',
        age: 24,
        isFemale: true
    },
    {
        firstname: 'Angel',
        lastname: 'Pashunov',
        age: 27,
        isFemale: false
    },
    {
        firstname: 'Ivaylo',
        lastname: 'Iliev',
        age: 33,
        isFemale: false
    },
    {
        firstname: 'Maria',
        lastname: 'Slavkova',
        age: 22,
        isFemale: true
    }];

// using forEach:
peopleArray.forEach(function (person) {
    if(person.age < 18){
        console.log(person);
    }
});

console.log('-------------------');

// using filter:
var underage = peopleArray.filter(function (person){
    return person.age < 18;
});

console.log(underage);