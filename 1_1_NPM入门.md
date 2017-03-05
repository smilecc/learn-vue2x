# NPM入门

看到这里，很多朋友可能会有疑问，老子不是来学Vuejs的吗，怎么第一章是NPM入门呢？

前面已经说了，咱这个教程是面向新手的，而很多新手根本没有接触过NPM，如果像是官方文档那样，上来就讲Vue自身，而忽略了这些基础知识的话，很多朋友可能会被搞的一头雾水，所以磨刀不误砍柴工，咱们从NPM讲起。

---

## 初始化一个项目

首先咱们还是打开终端，在你喜欢的位置创立并进入一个文件夹，咱们将在这个文件夹中初始化一个项目。

```
λ mkdir learnvue
λ cd learnvue
λ npm init
```

在执行`npm init`之后，将会出现很多的英文，请不要慌张，我们一点一点来看。

    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help json` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg> --save` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    name: (learnvue)

首先上面出现的几段英文，看不懂也没关系，就是告诉我们一些帮助信息。

此时光标将会停留在`name: (learnvue)`之后的位置，意思是让我们按照提示输入这些信息，输入好一个信息之后，敲击回车键确认并进入下一项的填写，让我来解释一下这些内容。

```
name: (learnvue) --- 名称
version: (1.0.0) --- 版本号
description: --- 介绍
entry point: (index.js) --- 入口点（入口文件）
test command: --- 测试命令
git repository: --- git库
keywords: --- 关键词
author: --- 作者
license: (ISC) --- 协议
```

而有些项目的冒号之后会有一个括号，括号里面会有一些内容，这个是告诉我们这一些的默认值，也就是在我们直接敲击回车的情况下，这一项的值，如果没有括号，就意为不填就为空。

所以关键的属性都有默认值了，你可以认真填写，也可以一路回车，都是不影响的，而且之后也可以改。

在填写完最后一项（license）之后，会按照我们的填写展示我们要生成的配置文件的内容。

```
About to write to G:\Code\nodejs\learnvue\package.json:

{
  "name": "learnvue",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) yes
```

最后他询问我们`Is this ok?`是否OK，确认则直接回车或输入yes，反之则输入其他的内容就可以取消。

这时，我们可以看到我们的文件夹下会多出一个叫`package.json`的文件，这个文件就是根据我们填写的信息生成的配置文件。

---

## 安装Vue

这里我们就学习到如何给一个



