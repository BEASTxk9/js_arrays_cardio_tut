// ## ARRAY CARDIO DAY 1

// 1. create string array variable to work with
const people = [
'Beck, Glenn', 'Decker, Carl', 'Beckett, Samuel', 'Deddoes, Mick', 'Beecher, henery', 'Blake, William', 'Girrell, Augustine'
];
// people.forEach((item, index)=>{
//     document.write(`<li clas="people"><a href="#">${index, item}</a></li>`)
// });

// 2. create object array variable to work with
const inventors = [
    {first: 'Albert', last: 'Eienstein', year: 1879, passed: 1955},
    {first: 'Issac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kelper', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    ];



// ____________________________________________________________________
// *** TUTORIALS ***


// ____________________________________________
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in 1500's

const fifteen_method1 = inventors.filter(function(inventor){

if(inventor.year >= 1500 && inventor.year < 1600){          // if inventor is more than or equal to 1550 && less than 1600
 return true;                                               // keep it!
}else{
 return false;                                              // dont keep it!
 console.log("There are no inventors bord in 1500's")
};

});

// console.log('Method1');
// console.table(fifteen_method1);

// OR

const fifteen_method2 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

// console.log('Method2');
// console.table(fifteen_method2);


// ____________________________________________
// Array.prototype.map()
// 2. Give us an array of inventors first and last names

const fullnames = inventors.map(inventor => `${inventor.first} ${inventor.last}`); // map takes data from inventors and create a new array with the data selected

// console.table(fullnames);


// ____________________________________________
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const ordered_method1 = inventors.sort(function(a, b){            // (a, b) act as an object/person

if(a.year > b.year){                                      // if a.year/persons1 year is more than b.year/person2 year
    return 1;                                             // return smallest number
} else{
    return -1;                                            // return bigger number
}

});

// console.log('Method1');
// console.table(ordered_method1);

// OR

const ordered_method2 = inventors.sort((a, b) => a.year > b.year ? 1 : -1); // short function

// console.log('Method2');
// console.table(ordered_method2);


// ____________________________________________
// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => { // short function that fetches all inventors/foreach basically
    return total + (inventor.passed - inventor.year);      // total(variable) will store the answer of the inventor calculation
}, 0);                                                     // adding 0 will make sure the total(variable) is equal to zero

// console.log(totalYears);


// ____________________________________________________________________
// *** EXERCISES ***


// ____________________________________________
// 5. Sort the inventors by years lived

const oldest = inventors.sort(function(a, b){

// give a & b conditions  
const lastGuy = a.passed - a.year;                        // year a died(bigger number) - year a was born(smaller number) to get age
const nextGuy = b.passed - b.year;                        // year b died(bigger number) - year b was born(smaller number) to get age


// if(lastGuy > nextGuy){                                 // if lastGuy is more than nextGuy
//     return -1;                                         // return bigger numer
// } else{
//     return 1                                           // return smaller number
// }

// OR

return lastGuy > nextGuy ? -1 : 1;                        // short if else statement 

});

// console.table(oldest);

// ____________________________________________
// 6. Create a list of peoples with B in the contain 'de' anywhere in the name

const category = document.querySelector('.peoples');      // (found in html) select a div class where all data is stored
const links = Array.from(category.querySelectorAll('a')); // select all a tags in the div selected
// OR
// const links = [...category.querySelectorAll('a')]; // select all a tags in the div selected

const de = links
 .map(link => link.textContent)                           // map create new array from links data
 .filter(firstLetter => firstLetter.includes('B'));       // filter by letter 'B'

// console.log(de);


// ____________________________________________
// 7. Sort Exercise
// Sort the people alphabetically by last name

// const alpha = people.sort(function(lastOne, nextOne){
//  const [alast, afirst] = lastOne.split(', ');
//  const [blast, bfirst] = nextOne.split(', ');
//  return alast > blast ? 1 : -1
// });

// OR

const alpha = people.sort((lastOne, nextOne) =>{
 const [alast, afirst] = lastOne.split(', ');
 const [blast, bfirst] = nextOne.split(', ');
 return alast > blast ? 1 : -1
});

// console.log(alpha);

// ____________________________________________
// 8. Reduce exercise
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'truck'];

const transport = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
obj[item]++;
return obj;
},{});

console.log(transport);