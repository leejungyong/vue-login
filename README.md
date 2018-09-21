# example2
  登录到工作台，借助vue插件，localStorage，滚动动画，钩子函数的应用，懒加载功能，按需加载功能，产品上线等
> A Vue.js project


## Build Setup
```bash
#   全局钩子函数
    beforeEach:可以用来判断是否登录
    afterEach可以用来展示不同的网页名

#   组件级钩子函数
    beforeRouteEnter 执行完再创建实例
    beforeRouteUpdate可以控制是否进行更新。
    beforeRouteLeave 离开组件时执行的钩子函数

#   单个路由钩子函数

#   Vue插件的编写
    获取和设置LocalStorage

#   滚动动画
    安装teween库

#   webpack懒加载
    把不同路由对应的组件分割成不同点的代码块，然后当路由被访问的时候才加载对应组件（需要异步组件和webpack配合使用）


```

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
