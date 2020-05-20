# Utils
汇总自己项目中封装和使用到的一些有用的工具函数，程序运行在主流浏览器和移动端，未做低版本浏览器测试，不保证低版本兼容性
### 主要API：

##### 1. 图片压缩

```javascript
import {resize} from './resizeImage'
(async ()=>{
    const data=await resize(file);
})()
```

##### 2. 复制到剪切板

```javascript
import {setClip} from './setClip'

setClip('hello,dantyli!')
```

##### 3. querystring 方法



