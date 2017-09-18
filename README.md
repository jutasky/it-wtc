# Wtc-it 计算机学院页面改版`2017年版`

---

> [巨塔工作室](http://juta.wtc.edu.cn)`初次作品线上作品`

### 效果展示页面(暂未上线) [计算机学院](http://it.wtc.edu.cn)

---

### 美工ui

- `Axure`
- `Ps`
- `Ai`
- `马克鳗`

---

### 后端

- `语化化标签`
    > 并没有使用h5标签，考虑到兼容ie8

- CSS3
    + `Less模块化`
    + 表现和结构相分离 `:after`+`:before`
    + `雪碧图`减少http请求
    + `normalize.css` 样式重置
    
- `JavaScript` + `Jquery`
    + 弥补`CSS3动画`的兼容性
    + 兼容`IE8+`
    + `swiper` 插件实现轮播图
    
- 构建工具
    + `Gulp`
    
- 测试工具
	+ `http-server`实现手机端测试
	
---

### 后端
- CMS
    + webplus
    > 官方指定，个人不太喜欢...
    
---

### 查看使用
```bash
git clone git@github.com:zp29/wtc-it.git
// 下载zip包
tar czvf wtc-it.zip 
// 解压 
cd wtc-it
// 进入目录
npm i gulp -g && npm i
// 安装依赖，国内使用 cnpm 
gulp
```

打开浏览器 [http://localhost:8080/](http://localhost:8080/)



