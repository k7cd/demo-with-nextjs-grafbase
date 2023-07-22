# Graphql 实战系列-使用 Nextjs+Grafbase 开发患者档案管理应用

## 准备工作

- 使用 Grafbase 需要将 Nodejs 版本升级到 18+, 推荐使用 nvm 安装和使用指定版本的 Nodejs;

```sh
nvm ls # 查看当前已安装的nodejs版本
nvm use v18.15.0 # 切换到 v18+ 版本 或
nvm install v18.15.0 # 安装nodejs 18+ lts 版本
```

- 使用 PNPM 作为 Nodejs 包管理工具。

## 项目搭建步骤

- 创建一个 Nextjs 项目用于调用 Graphql 服务并完成前端交互:

  1. 配置登录验证
  2. 搭建前端页面
  3. 编写 Graphql 客户端

- 引入 Grafbase 用于提供 Graphql 数据服务, 包括:

  1. 创建和维护 Graphql Schema
  2. 配置数据访问权限
  3. 编写基本的 CURD 服务端

- 自动化部署:

  1. Graphql 数据服务基于 Grafbase 官方的 CICD 部署
  2. Nextjs 基于 Docker 部署
