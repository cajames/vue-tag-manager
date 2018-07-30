import * as inspector from '../dom-injector'

describe('dom-injector', () => {

    describe('#getScriptTagWithSrc', () => {
        xit('should return a script tag with src set', null)
        xit('should return a script tag with src set and async true if async defined', null)
        xit('should throw an error if no src', null)
        xit('should throw an error if no document', null)
    })

    describe('#getScriptTagWithScript', () => {
        xit('should return a script tag with the provided script', null)
        xit('should throw an error if no script provided', null)
        xit('should throw an error if no document', null)
    })

    describe('#injectScriptTagIntoHead', () => {
        xit('should throw an error if no scriptTag provided', null)
        xit('should throw an error if wrong input type provided', null)
        xit('should insert the script tag at the very top of the head', null)
        xit('should throw an error if no document provided', null)
    })

})