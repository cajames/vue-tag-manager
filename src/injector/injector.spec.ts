import * as inspector from './injector'

describe('dom-injector', () => {

    describe('#getScriptTagWithSrc', () => {
        it('should return a script tag with src set')
        it('should return a script tag with src set and async true if async defined')
        it('should throw an error if no src')
        it('should throw an error if no document')
    })

    describe('#getScriptTagWithScript', () => {
        it('should return a script tag with the provided script')
        it('should throw an error if no script provided')
        it('should throw an error if no document')
    })

    describe('#injectScriptTagIntoHead', () => {
        it('should throw an error if no scriptTag provided')
        it('should throw an error if wrong input type provided')
        it('should insert the script tag at the very top of the head')
        it('should throw an error if no document provided')
    })

})