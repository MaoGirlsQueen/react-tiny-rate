import React from 'react'
import PropTypes from 'prop-types'

class Rate extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
    	stars: new Array(props.length-0).fill('★'),
    	hollow: new Array(props.length-0).fill('☆'),
    	styleObject:{}
    }
    this.rateProps = {
		  position:'relative',
		  display: 'inline-block'
		}
		this.hollowStyle= {
		  position:'absolute',
		  display: 'inlin-block',
		  top:0,
		  left:0,
		  width:0,
		  overflow:'hidden',
		}
    const themeObj = {
      'black': '#00',
      'white': '#fff',
      'red': '#f5222d',
      'orange': '#fa541c',
      'yellow': '#fadb14',
      'green': '#73d13d',
      'blue': '#40a9ff',
      'purple': '#9254de'
    }
		this.styleFont = {
        color: themeObj[this.props.theme] ? themeObj[this.props.theme] : this.props.theme,
        fontSize: this.props.size ? this.props.size : ''
     }

  }
  setStyle(){
  	// console.log(this.props.value)
  	this.setState((prevState,props)=> ({
			styleObject:{
        width: this.props.value + 'em',
        transition: `width ${this.props.animate}s`
			}
  	}))

  }
	componentDidMount(){
    if (this.props.animate === '0' || this.props.animate === 0) {
      this.setStyle()
    }
    setTimeout(() => {
      this.setStyle()
    })

	}
	render(){
		
		return (<div style={{...this.styleFont}}>
			{this.props.children}
			<div style={{...this.rateProps}}>
				{this.state.hollow.map((v,i)  =>{
					return <span key={i}>{v}</span>
				})}
				<span style={{...this.hollowStyle,...this.state.styleObject}}>
					{this.state.stars.map((v,i)  =>{
						return <span key={i}>{v}</span>
					})}
				</span>
			</div>

		</div>)
	}
}
Rate.defaultProps = {
	value:0,
	length:5,
	animate:0,
	theme:'yellow',
	readonly:false
}
export default Rate