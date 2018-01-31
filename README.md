# React Tiny Rate

[![npm](https://img.shields.io/npm/dm/react-tiny-rate.svg)](https://www.npmjs.com/package/react-tiny-rate)

> The Smallest Rating Component for React



## based one line rate component function

```js
function rate(num){
  return "★★★★★☆☆☆☆☆".slice(5 - num, 10 - num);
}
rate(3)   // "★★★☆☆"

```


## Features

* based ☆ and ★
* support float such as 3.5  4.7
* theme
* animate
* size


## Translation

  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) [Chinese (Simplified)](./README_ch.md)


## Installation and usage

Once, install rate component for your project

```bash
npm install react-tiny-rate --save
```

Import react-tiny-rate into your app

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Rate from 'react-tiny-rate'

ReactDOM.render(<Rate />, document.getElementById('root'));
```

Use HTML template in JSX

```html
<Rate />
```
![](http://image.shengxinjing.cn/rate/00.png)


## Options from props

- `value {number|string}` : Star value `default:0`

```html
<Rate value="0.5"></Rate>
<Rate value="1"></Rate>
<Rate value="3.6"></Rate>
```
![](http://image.shengxinjing.cn/rate/01.png)

- `readonly {boolean}` : Rate read-only. `default:false`

```html
<Rate value="0.5"></Rate>
<Rate value="1"></Rate>
<Rate value="3.6" readonly="true"></Rate>
```
![](http://image.shengxinjing.cn/rate/01.gif)

- `length {number|string}` : Star size `default:5`

```html
<Rate value="2" length="4"></Rate>
<Rate value="3.6" length="8"></Rate>
<Rate value="7.6" length="10"></Rate>
```
![](http://image.shengxinjing.cn/rate/02.png)


- `theme {color|enum('yellow','green','blue','red','purple','orange','black','wihte')}`: Star color. `default: yellow`

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


- `size {number|string}`: Rate size. 

```html
<Rate value="4.5" size='12px'>12px</Rate>
<Rate value="4.5" size='16px'>16px</Rate>
<Rate value="4.5" size='20px'>20px</Rate>
<Rate value="4.5" size='40px'>40px</Rate>
```

![](http://image.shengxinjing.cn/rate/04.png)


- `animate {number|string}`: Rate animate duration. `default:0`

```html
<Rate value="3.5" animate='1'>1s</Rate>
<Rate value="3.5" animate='2'>2s</Rate>
<Rate value="3.5" animate='3'>3s</Rate>
```
![](http://image.shengxinjing.cn/rate/05.gif)


## Events

- `onRate`: Rate select callback. 


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

## License

MIT.
