module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: false,
    devServer: {
        open: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://127.0.0.1:3000', //目标接口域名
        //         changeOrigin: true, //是否跨域
        //         pathRewrite: {
        //             '^/api': '' //重写接口
        //         }

        //     }
        // }
    },
    chainWebpack: config => {
        // 一个规则里的 基础Loader
        // svg是个基础loader
        const svgRule = config.module.rule('svg')

        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()

        // 添加要替换的 loader
        svgRule
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }
}