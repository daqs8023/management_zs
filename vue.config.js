module.exports = {
    publicPath:'/',
    devServer:{//在开发环境下将 API 请求代理到 API 服务器
        proxy:{// 设置代理
            '/api':{
                target:'url',//设置服务器地址
                changeOrigin:true,//是否跨域
                ws:true,//是否启用websockets
                pathRewrite:{
                    '^/api':''//用'/api'代替target里面的地址
                }
            }
        }
    }
}