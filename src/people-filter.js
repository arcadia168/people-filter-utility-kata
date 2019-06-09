storeAndGroupByGender = (personToFilter, filteredPeopleGroupedByGender, ruleToUse) => {
    if (eval(ruleToUse)) {
        // console.log(`Person to filter gender is: ${personToFilter.gender}`);
        // console.log(`filteredPeopleGroupedByGender[${personToFilter.gender}] is: ${JSON.stringify(filteredPeopleGroupedByGender[personToFilter.gender])}`);
        if (filteredPeopleGroupedByGender[personToFilter.gender]) {
            // console.log(`${personToFilter.gender} Gender existed, adding to it`);

            const existingArray = filteredPeopleGroupedByGender[personToFilter.gender];
            // console.log(`existing array was: ${JSON.stringify(existingArray)}`);

            existingArray.push(personToFilter);
            filteredPeopleGroupedByGender[personToFilter.gender] = existingArray;

            // console.log(`filteredPeopleGroupedByGender[${personToFilter.gender}] is now: ${filteredPeopleGroupedByGender[personToFilter.gender]}`);
        } else {
            // console.log(`${personToFilter.gender} Gender didn't exist, creating it`);
            const newGenderArray = [];
            newGenderArray.push(personToFilter);
            filteredPeopleGroupedByGender[personToFilter.gender] = newGenderArray;
            // console.log(`filteredPeopleGroupedByGender is now: ${JSON.stringify(filteredPeopleGroupedByGender)}`);
        }
    }
}

module.exports = (peopleToFilter, customRules) => {
    if (!peopleToFilter) {
        throw new Error('Please supply a valid list of people objects.');
    }

    let rulesToUse = [];
    if (!customRules) {
        rulesToUse.push('personToFilter.age >= 30 && personToFilter.age <= 40');
    }

    // TODO: Have array of rules to apply to code.
    const filteredPeopleGroupedByGender = {};

    peopleToFilter.forEach(personToFilter => {
        rulesToUse.forEach(rule => {
            storeAndGroupByGender(personToFilter, filteredPeopleGroupedByGender, rule);
        })
    });

    // console.log(`The filtered array is: ${JSON.stringify(filteredPeopleGroupedByGender)}`);

    return filteredPeopleGroupedByGender;
}
