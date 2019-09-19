const serveUrl = process.env.VUE_APP_TEST_SERVER_URL||"http://172.16.62.95:3030";
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)
console.log(serveUrl)
console.log(process.env.NODE_ENV)
module.exports = {
    devServer : {
        // host: localhost,
        // 设置默认端口
        // port: 8080,
        open: true, //配置自动启动浏览器
        proxy:{
            "/api": {
                target: serveUrl,
                changeOrigin: true
            } ,
            "/socket.io": {
                target: serveUrl,
                changeOrigin: true,
                ws: true
              }, 
      },
    },
    
  chainWebpack: (config) => {
    config.resolve.symlinks(true) // 修复热更新失效
    },
    css:{
        extract:IS_PROD,//热更新css
    }
}