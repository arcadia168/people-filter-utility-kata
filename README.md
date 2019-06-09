This is a small utility designed to take an array of people objects, each with name, age and gender as well as an optional set of rules for filtering those objects, and return the filtered list, grouped by the genders of the people.

By default, if no custom rules are passed in, only people between the ages of 30 and 40 will be returned.

Run and read the tests to see different inputs and outputs.

Here's an example:

``` javascript
const peopleFilter = require('../src/people-filter');
const youngerMalePeople = [
    {
        name: 'Dave',
        age: 25,
        gender: 'Male',
    },
]
const olderMalePeople = [
    {
        name: 'Josh',
        age: 30,
        gender: 'Male',
    },
    {
        name: 'John',
        age: 31,
        gender: 'Male'
    },
]
const malePeople = [
    ...olderMalePeople,
    ...youngerMalePeople,
];

const filteredPeopleDefaultRules = peopleFilter(malePeople);

console.log(JSON.stringify(filteredPeopleDefaultRules));
// Will be the 'olderMalePeople' array

const customRules = ['personToFilter.age >= 20 && personToFilter.age < 30'];
const youngerPeople = peopleFilter(testPeopleToFilter, customRules);

console.log(JSON.stringify(youngerPeople));
// Will be the 'youngerMalePeople' array
```
