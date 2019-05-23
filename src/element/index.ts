import {
    Row, Col,
    Container, Header, Main,
    Table, TableColumn,
} from 'element-ui'
const locale = require('element-ui/lib/locale/lang/zh-CN');
const element = {
    install: function (Vue: any) {
        Vue.prototype.$ELEMENT = { size: 'mini', locale: locale.default };
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Main)
        Vue.use(Header)
        Vue.use(Container)
        Vue.use(Table)
        Vue.use(TableColumn)
    }
}
export default element