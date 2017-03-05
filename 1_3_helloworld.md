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



