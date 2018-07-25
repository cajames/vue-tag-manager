
import VueTagManager from './index'

describe('index', () => {

    it('should have a default export of a Vue plugin', () => {
        expect(VueTagManager.install).toBeDefined()
        expect(typeof VueTagManager.install).toBe("function")
    })

})