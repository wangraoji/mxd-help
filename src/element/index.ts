import {
    Row, Col,

} from 'element-ui'
const locale = require('element-ui/lib/locale/lang/zh-CN');
const element = {
    install: function (Vue: any) {
        Vue.prototype.$ELEMENT = { size: 'mini', locale: locale.default };
        Vue.use(Row)
        Vue.use(Col)
    }
}
export default element