# 第一个App

终于可以开始写我们的hello world了。

# 开始

建立一个`index.html`和一个`main.js`，其中`index.html`作为页面的入口，而`main.js`作为js的入口。

废话不多说，直接将如下的代码添加到对应的文件中，我们等一会再来解释其中的内容。

**index.html：**

```
<!DOCTYPE html>
<html>
<head>
    <title>第一个App</title>
</head>
<body>
    <div id="app">
        {{ msg }}
    </div>
    <script type="text/javascript" src="main.out.js"></script>
</body>
</html>
```

**main.js：**

```
import Vue from 'vue'

const app = new Vue({
    data () {
        return {
            msg: 'hello world!'
        }
    }
}).$mount('#app');
```

在终端中，在**项目目录**下执行`webpack`命令：

```
λ webpack

Hash: 76c655b496b5c09bd418
Version: webpack 2.2.1
Time: 805ms
      Asset    Size  Chunks                    Chunk Names
main.out.js  673 kB       0  [emitted]  [big]  main
   [0] ./~/vue/dist/vue.common.js 242 kB {0} [built]
   [1] ./~/process/browser.js 5.3 kB {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] ./main.js 115 bytes {0} [built]
```

于是我们的**依赖库和业务代码**都打包到了我们在`webpack.config.js`中指定的`main.out.js`文件中。

