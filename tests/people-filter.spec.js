//Write a JavaScript method receiving an array of objects
// containing name+age+gender, returning everyone between 30 and 40 years old grouped by gender.
// Keep it simple but reusable. Create a secret gist (https://gist.github.com/) and paste the URL below.
const peopleFilter = require('../src/people-filter');
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
});
