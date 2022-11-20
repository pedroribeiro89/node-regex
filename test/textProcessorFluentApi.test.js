const {describe, it} = require('mocha')
const {expect} = require('chai')
const TextProcessorFluentApi = require('../src/textProcessorFluentApi')
const mock = require('./mock/valid')

describe('TextProcessorAPI', () => {
    it('#build', () => {
        const result = new TextProcessorFluentApi(mock).build()
        expect(result).to.be.deep.equal(mock)
    })

    it('#extractPersonData', () => {
        const result = new TextProcessorFluentApi(mock)
            .extractPersonData()
            .build()
        const expected = [
            [
                "Xuxa da Silva, brasileira, casada, CPF 235.743.420-12, residente e ",
                "domiciliada a Rua dos bobos, zero, bairro Alphaville, São Paulo. "
            ].join("\n"),
            [
                "Arya Robbin, belga, casado, CPF 884.112.200-52, residente e ",
                "domiciliada a Av. paulista, 1400, bairro Consolação, São Paulo. "
            ].join("\n"),
            [
                "Júlia Menezes, brasileira, solteira, CPF 297.947.800-81, residente e ",
                "domiciliada a Av. dos Estados, 99, bairro Jardins, São Paulo. "
            ].join("\n")
        ]

        expect(result).to.be.deep.equal(expected)
    })

    it('#divideTextInColumns', () => {
        const content = [
            [
                "Xuxa da Silva, brasileira, casada, CPF 235.743.420-12, residente e ",
                "domiciliada a Rua dos bobos, zero, bairro Alphaville, São Paulo. "
            ].join("\n")
        ]
        const result = new TextProcessorFluentApi(content)
            .divideTextInColumns()
            .build()
        const expected = [
            [
                "Xuxa da Silva",
                " brasileira",
                " casada",
                " CPF 235.743.420-12",
                " residente e \ndomiciliada a Rua dos bobos",
                " zero",
                " bairro Alphaville",
                " São Paulo. "
            ]
        ]
        expect(result).to.be.deep.equal(expected)
    })

    it('#removeEmptyChars', () => {
        const content = [
            [
                "Xuxa da Silva",
                " brasileira",
                " casada",
                " CPF 235.743.420-12",
                " residente e \ndomiciliada a Rua dos bobos",
                " zero",
                " bairro Alphaville",
                " São Paulo. "
            ]
        ]
        const result = new TextProcessorFluentApi(content)
            .removeEmptyChars()
            .build()
        const expected = [
            [
                "Xuxa da Silva",
                "brasileira",
                "casada",
                "CPF 235.743.420-12",
                "residente e domiciliada a Rua dos bobos",
                "zero",
                "bairro Alphaville",
                "São Paulo."
            ]
        ]
        expect(result).to.be.deep.equal(expected)
    })

    it('#mapPerson', () => {
        const content = [
            [
                "Xuxa da Silva",
                "brasileira",
                "casada",
                "CPF 235.743.420-12",
                "residente e domiciliada a Rua dos bobos",
                "zero",
                "bairro Alphaville",
                "São Paulo."
            ]
        ]
        const result = new TextProcessorFluentApi(content)
            .mapPerson()
            .build()
        const expected = [
            {
                personName: "Xuxa da Silva",
                nationality: "Brasileira",
                marital_status: "Casada",
                doc: "23574342012",
                street: "Rua dos bobos",
                number: "zero",
                neighborhood: "Alphaville",
                state: "São Paulo"
            }
        ]
        expect(result).to.be.deep.equal(expected)
    })

})