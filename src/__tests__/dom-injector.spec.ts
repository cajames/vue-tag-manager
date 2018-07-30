import * as injector from '../dom-injector'

fdescribe('dom-injector', () => {

    const originalDocument = document
    beforeEach(() => {
        jest.resetAllMocks()
    })

    describe('#getScriptTagWithSrc', () => {
        it('should return a script tag with src set', () => {
            const script = injector.getScriptTagWithSrc('//someurl.com')
            expect(script)
        })
        it('should return a script tag with src set and async true if async defined', null)
        it('should throw an error if no src', null)
        it('should throw an error if no document', null)
    })

    describe('#getScriptTagWithScript', () => {
        it('should return a script tag with the provided script', null)
        it('should throw an error if no script provided', null)
        it('should throw an error if no document', null)
    })

    describe('#injectScriptTagIntoHead', () => {
        it('should throw an error if no scriptTag provided', null)
        it('should throw an error if wrong input type provided', null)
        it('should insert the script tag at the very top of the head', null)
        it('should throw an error if no document provided', null)
    })

})