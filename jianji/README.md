##Vue项目目录模板
----------------------------
author: Gary.zhou

<br>
###配置说明：
<br>
####1. ./config/index.js<br>
module.exports.build.assetsPublicPath -- 更改为本人的项目path <br>
module.exports.dev.publicPath -- 更改为本人的项目本地调试domain <br>
module.exports.dev.apiPre -- 更改为本人的项目path <br>
module.exports.dev.proxyTable -- 接口代理转发,按需要更改 <br>
<br>
####2. ./docs --- 项目文档<br>
|--api.md --- 更改为本人接口文档

####3. ./mock --- 模拟数据
./mock/mockData --- 模拟接口数据

域名
====
dev: <br>
staging: <br>
prod: <br>

开发
====
Appid：<br>
webpack build的域名前缀： 

路由
====

1.会员首页

* /index
* component: index

接口
====
[接口文档](./docs/api.md)
