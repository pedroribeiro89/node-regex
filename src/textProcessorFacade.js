const TextProcessorFluentApi =  require("./textProcessorFluentApi")

class TextProcessorFacade {
    #textProcessorFluentAPI
    constructor(text) {
        this.#textProcessorFluentAPI = new TextProcessorFluentApi(text)
    }

    getPeopleFromPDF() {
        return this.#textProcessorFluentAPI
            .extractPersonData()
            .divideTextInColumns()
            .removeEmptyChars()
            .mapPerson()
            .build()
    }
}

module.exports = TextProcessorFacade