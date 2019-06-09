//Write a JavaScript method receiving an array of objects
// containing name+age+gender, returning everyone between 30 and 40 years old grouped by gender.
// Keep it simple but reusable. Create a secret gist (https://gist.github.com/) and paste the URL below.
const peopleFilter = require('../src/people-filter');
const testPeopleToFilter = [
    {
        name: 'Josh',
        age: 30,
        gender: 'Male',
    },
    {
        name: 'Brody',
        age: 40,
        gender: 'Female',
    },
    {
        name: 'Cersei',
        age: 35,
        gender: 'Female'
    },
    {
        name: 'Jess',
        age: 36,
        gender: 'Female',
    },
    {
        name: 'John',
        age: 31,
        gender: 'Male'
    },
    {
        name: 'Dave',
        age: 25,
        gender: 'Male',
    },
    {
        name: 'Varys',
        age: 39,
        gender: 'Non-binary'
    }
]
describe('People Filter Utility', () => {
    describe('When an array of people objects is not passed in', () => {
        it('Throws an error with a meaningful error message', () => {
            try {
                const filteredNonPeople = peopleFilter();
            } catch (filterError) {
                expect(filterError.message)
                    .toBe('Please supply a valid list of people objects.');
            }
        });
    });

    describe('When a valid array of people objects is passed in', () => {
        describe('When filtering using the default rules', () => {
            it('Returns male gendered people between the age of 30 and 40', () => {
                const filteredPeople = peopleFilter(testPeopleToFilter);
                expect(filteredPeople['Male'].length).toBe(2);
            });

            it('Returns the female gendered people between the age of 30 and 40', () => {
                const filteredPeople = peopleFilter(testPeopleToFilter);
                expect(filteredPeople['Female'].length).toBe(3);
            });

            it('Returns the non-binary gendered people between the age of 30 and 40', () => {
                const filteredPeople = peopleFilter(testPeopleToFilter);
                expect(filteredPeople['Non-binary'].length).toBe(1);
            });
        });

        describe('Takes a set of custom rules used to filter people', () => {
            it('Uses the custom rules passed in', () => {

            });
        });
    });
});
