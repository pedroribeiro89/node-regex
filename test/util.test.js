const {describe, it} = require('mocha')
const {expect} = require('chai')
const {InvalidRegexError, evaluateRegex} = require('../src/util')

describe('Util', () => {
    it('#evaluateRegex should throw an error using an unsafe regex', () => {
        const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/
        expect(() => evaluateRegex(unsafeRegex)).to.throw(InvalidRegexError, `This ${unsafeRegex} is unsafe!`)
    })

    it('#evaluateRegex should not throw an error using an safe regex', () => {
        const unsafeRegex = /^([a-z])$/
        expect(() => evaluateRegex(unsafeRegex)).to.not.throw()
        expect(() => evaluateRegex(unsafeRegex)).to.be.ok
    })
})