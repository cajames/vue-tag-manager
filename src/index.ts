import TagManager from "./TagManager";
import { TagManagerConfig } from './types'

const install = function(Vue, initConf: TagManagerConfig = { gtmId : '' }) {
    TagManager.initialize(initConf)
}

export default {
    install
}