//Fluent API objective is to chain task, like a pipeline, step by step
// and in the end execute a build step. Similar to builder pattern.
// the diffence is that fluent api is for process and builder for constructing objects
class TextProcessorFluentApi {
    #content

    constructor(content) {
        this.#content = content
    }

    extractPersonData() {


        const matchPerson = /(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi
        this.#content = this.#content.match(matchPerson)
        return this
    }

    build() {
        return this.#content
    }
}

module.exports = TextProcessorFluentApi