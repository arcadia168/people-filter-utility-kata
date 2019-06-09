filterAndGroupByGender = (personToFilter, filteredPeopleGroupedByGender, ruleToUse) => {
    if (eval(ruleToUse)) {
        if (filteredPeopleGroupedByGender[personToFilter.gender]) {
            const existingArray = filteredPeopleGroupedByGender[personToFilter.gender];
            existingArray.push(personToFilter);
            filteredPeopleGroupedByGender[personToFilter.gender] = existingArray;
        } else {
            const newGenderArray = [];
            newGenderArray.push(personToFilter);
            filteredPeopleGroupedByGender[personToFilter.gender] = newGenderArray;
        }
    }
}

module.exports = (peopleToFilter, customRules) => {
    if (!peopleToFilter) {
        throw new Error('Please supply a valid list of people objects.');
    }

    const defaultRule = 'personToFilter.age >= 30 && personToFilter.age <= 40';
    let rulesToUse = [];
    if (!customRules) {
        rulesToUse.push(defaultRule);
    } else {
        rulesToUse = rulesToUse.concat(customRules);
    }

    const filteredPeopleGroupedByGender = {};

    peopleToFilter.forEach(personToFilter => {
        rulesToUse.forEach(rule => {
            filterAndGroupByGender(personToFilter, filteredPeopleGroupedByGender, rule);
        })
    });

    return filteredPeopleGroupedByGender;
}
