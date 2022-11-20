const {evaluateRegex} = require("./util");

class Person {
    constructor([ personName, nationality, marital_status, doc, street, number, neighborhood, state ]) {
        const firstLetterRegex = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g)
        const formatfirstLetter = prop => prop.replace(firstLetterRegex, (fullMatch, group1, group2, index) => {
            return `${group1.toUpperCase()}${group2.toLowerCase()}`
        })

        this.personName = personName
        this.nationality = formatfirstLetter(nationality)
        this.marital_status = formatfirstLetter(marital_status)
        this.doc = doc.replace(evaluateRegex(/\D/g), "")
        this.street = street.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
        this.number = number
        this.neighborhood = neighborhood.match(evaluateRegex(/(?<=\s).*$/)).join()
        this.state = state.replace(evaluateRegex(/\.$/), '')
    }
}

module.exports = Person