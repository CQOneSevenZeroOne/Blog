# 个人博客

### 概述

1. 基于Ueditor的个人博客系统
2. 功能包括
 * **文章编辑、发布、删除、修改**
 * **评论、回复评论**
 * **文章列表、栏目列表**
3. 开发环境
 * **Node.js -v8.9.3**
 * **mysql -5.7.20**

### 项目目录

```
├── blog
    │  ├── app.js 入口文件
    │  │
    │  ├── routes 路由目录
    │  │   
    │  ├── plug 插件
    │  │   └── Ueditor
    │  │
    │  ├── public 静态资源文件
    │  │   ├── js
    │  │   ├── css
    │  │   └── images
    │  │
    │  ├── config 配置目录
    │  │   └── db.js 配置数据库信息
    │  │
    │  ├── package.json 依赖模块信息
    │  │
    └───── readme.md
```

### 项目运行

1. 配置nodejs开发环境
2. 在项目目录执行`node install`安装依赖模块
3. 更改数据库配置，文件路径`config/db.js`
4. 执行sql文件建表，文件路径`sql/*`
5. 在项目目录执行`node app`开启服务
6. 访问"localhost:9999" 即进入博客首页



