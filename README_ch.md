# React Tiny Rate
[![npm](https://img.shields.io/npm/dm/react-tiny-rate.svg)](https://www.npmjs.com/package/react-tiny-rate)


> 最小的React评级组件



## 基于[一行代码写评级组件](https://www.zhihu.com/question/46943112/answer/113583615)

```js
function rate(num){
  return "★★★★★☆☆☆☆☆".slice(5 - num, 10 - num);
}
rate(3)   // "★★★☆☆"

```


## 功能

* 基于☆ 和 ★
* 支持小数评级 比如3.5  4.7
* 主题颜色配置
* 动画效果
* 星星大小

## 安装和使用

先从npm安装到项目里

```bash
npm install react-tiny-rate --save
```

在项目里导入Rate组件

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Rate from 'react-tiny-rate'

ReactDOM.render(<Rate />, document.getElementById('root'));
```

HTML里使用

```html
<Rate />
```
![](http://image.shengxinjing.cn/rate/00.png)


## 配置项

- `value {number|string}` : 评几星，支持小数 `默认:0`

```html
<Rate value="0.5"></Rate>
<Rate value="1"></Rate>
<Rate value="3.6"></Rate>
```
![](http://image.shengxinjing.cn/rate/01.png)



- `readonly {boolean}` : 是否是只读. `default:false`

```html
<Rate value="0.5"></Rate>
<Rate value="1"></Rate>
<Rate value="3.6" readonly="true"></Rate>
```
![](http://image.shengxinjing.cn/rate/01.gif)

- `length {number|string}` : 一共几个星 `默认:5`

```html
<Rate value="2" length="4"></Rate>
<Rate value="3.6" length="8"></Rate>
<Rate value="7.6" length="10"></Rate>
```
![](http://image.shengxinjing.cn/rate/02.png)


- `theme {color|enum('yellow','green','blue','red','purple','orange','black','wihte')}`: 主题色. `默认: yellow`

```html
<Rate value="4.5">Yellow</Rate>
<Rate value="4.5" theme="green">Green</Rate>
<Rate value="4.5" theme="blue">Blue</Rate>
<Rate value="4.5" theme="red">Red</Rate>
<Rate value="4.5" theme="purple">Purple</Rate>
<Rate value="4.5" theme="orange">Orange</Rate>
<Rate value="4.5" theme="black">Black</Rate>
<Rate value="4.5" theme="#91d5ff">#91d5ff</Rate>

```

![](http://image.shengxinjing.cn/rate/03.png)


- `size {number|string}`: 星星的大小. 

```html
<Rate value="4.5" size='12px'>12px</Rate>
<Rate value="4.5" size='16px'>16px</Rate>
<Rate value="4.5" size='20px'>20px</Rate>
<Rate value="4.5" size='40px'>40px</Rate>
```

![](http://image.shengxinjing.cn/rate/04.png)


- `animate {number|string}`: 是否有动画. `default:0`

```html
<Rate value="3.5" animate='1'>1s</Rate>
<Rate value="3.5" animate='2'>2s</Rate>
<Rate value="3.5" animate='3'>3s</Rate>
```
![](http://image.shengxinjing.cn/rate/05.gif)

## Events

- `onRate`: 选中星级后的评价. 



```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Rate from 'react-tiny-rate'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {value:2.5}
    this.handleRate = this.handleRate.bind(this)
  }
  handleRate(value){
    console.log(value)
    this.setState({ value })
  }
  render(){
    return <Rate onRate={this.handleRate} value={this.state.value}>Rate </Rate>
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

```
![](http://image.shengxinjing.cn/rate/06.gif)


## 链接
* [tiny-rate](https://github.com/shengxinjing/tiny-rate)
* [vue-tiny-rate](https://github.com/shengxinjing/vue-tiny-rate)


## License

MIT.
