# vuex-demo1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 在项目中关闭eslint语法解析
在eslinttrc.js中，将
```js
extends: [
    'plugin:vue/essential',
    // '@vue/standard'
  ]
```
然后重启项目即可：npm run serve
