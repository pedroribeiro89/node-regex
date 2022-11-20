const {evaluateRegex} = require("./util");
const Person = require("./person");

//Fluent API objective is to chain task, like a pipeline, step by step
// and in the end execute a build step. Similar to builder pattern.
// the diffence is that fluent api is for process and builder for constructing objects
class TextProcessorFluentApi {
    #content

    constructor(content) {
        this.#content = content
    }

    extractPersonData() {
        const matchPerson = evaluateRegex(/(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi)
        this.#content = this.#content.match(matchPerson)
        return this
    }

    divideTextInColumns() {
        const splitRegex = evaluateRegex(/,/)
        this.#content = this.#content.map(line => line.split(splitRegex))
        return this
    }

    removeEmptyChars() {
        const trimSpaces = evaluateRegex(/^\s+|\s+$|\n/g)
        this.#content = this.#content.map(line => line.map(item => item.replace(trimSpaces, "")))
        return this
    }

    mapPerson() {
        this.#content = this.#content.map(line => new Person(line))
        return this
    }

    build() {
        return this.#content
    }
}

module.exports = TextProcessorFluentApi