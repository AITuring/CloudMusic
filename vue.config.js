const vuxLoader = require('vux-loader')

module.exports = {
    pwa: {
        name: '网易云音乐',
        favicon: 'favicon.ico'

    },
    configureWebpack: config => {
        vuxLoader.merge(config, {
            plugins: ['vux-ui']
        })
    }
}