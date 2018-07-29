
import VueTagManager from './index'

describe('index', () => {

    it('should have a default export as Vue plugin', () => {
        expect(VueTagManager.install).toBeDefined()
        expect(typeof VueTagManager.install).toBe("function")
    })

})