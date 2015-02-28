module.exports = {
    //配置文件的版本，和silky的版本无关
    version: 0.2,
    //80端口在*nix下需要sudo
    //路由
    routers: [
         {
             //path: 原路径，to: 替换后的路径，next：是否继承执行下一个路由替换，static：是否为静态文件，静态文件直接返回
             path: /^\/$/, to: '/index.html', next: false
         }
    ],
    //插件的配置
    plugins: {
        "markdown-blog": {
            //数据的主目录
            dataDir: './content',
            theme: 'blog-theme',
            blog: {
                //博客标题
                title: "Silky官方博客",
                //副标题
                description: "前端模块化开发与构建工具",
                //主机地址
                host: 'http://silky.wvv8oo.com/',
                //rss地址
                feed: 'http://silky.wvv8oo.com/rss.xml',
                //作者
                author: 'wvv8o'
            }
        }
    },
    //build的配置
    build: {
        //构建的目标目录，命令行指定的优先
        output: "./build",
        //将要复制的文件目录，直接复制到目标
        copy: [/images/],
        //完全忽略处理的文件
        ignore: [/^template\/module$/i, /^css\/module$/i, /^\..+/, "docs"],
        //重命名
        rename: [],
        //是否压缩
        compress: {
            //将要忽略压缩的文件
            ignore: [],
            //压缩js，包括coffee
            js: true,
            //压缩css，包括less
            css: true,
            //压缩html
            html: false,
            //是否压缩internal的js
            internal: true
        }
    }
}