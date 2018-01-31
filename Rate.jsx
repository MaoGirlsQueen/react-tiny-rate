import React from "react"
import PropTypes from "prop-types"

const rateStyles = {
	position: "relative",
	display: "inline-block"
}

const hollowStyles = {
	position: "absolute",
	display: "inlin-block",
	top: 0,
	left: 0,
	width: 0,
	overflow: "hidden"
}
const themeObj = {
	black: "#00",
	white: "#fff",
	red: "#f5222d",
	orange: "#fa541c",
	yellow: "#fadb14",
	green: "#73d13d",
	blue: "#40a9ff",
	purple: "#9254de"
}
class Rate extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			stars: new Array(props.length - 0).fill("★"),
			hollow: new Array(props.length - 0).fill("☆"),
			styleObject: {}
		}
		this.styleFont = {
			color: themeObj[this.props.theme]
				? themeObj[this.props.theme]
				: this.props.theme,
			fontSize: this.props.size ? this.props.size : ""
		}

		this.onHover = this.onHover.bind(this)
		this.onOut = this.onOut.bind(this)
		this.onClick = this.onClick.bind(this)
	}
	onHover(i) {
		if (this.props.readonly) {
			return false
		}
		this.setState({
			styleObject: { transition: `width ${this.props.animate}s` , width: (i + 1) + "em" }
		})
	}
	onOut() {
		this.setState({
			styleObject: { transition: `width ${this.props.animate}s` , width: this.props.value + "em" }
		})
	}
	onClick(i) {
		if (this.props.readonly) {
			return false
		}
		this.props.onRate && this.props.onRate(i + 1)
	}
	setStyle() {
		this.setState((prevState, props) => ({
			styleObject: {
				width: this.props.value + "em",
				transition: `width ${this.props.animate}s`
			}
		}))
	}
	componentDidMount() {
		if (this.props.animate === "0" || this.props.animate === 0) {
			this.setStyle()
		}
		setTimeout(() => {
			this.setStyle()
		})
	}
	render() {
		return (
			<div style={ this.styleFont }>
				{this.props.children}
				<div style={ rateStyles } onMouseOut={this.onOut}>
					{this.state.hollow.map((v, i) => {
						return (
							<span onMouseOver={() => this.onHover(i)} key={i}>
								{v}
							</span>
						)
					})}
					<span style={ Object.assign({}, hollowStyles,this.state.styleObject) }>
						{this.state.stars.map((v, i) => {
							return (
								<span
									onClick={() => this.onClick(i)}
									onMouseOver={() => this.onHover(i)}
									key={i}
								>
									{v}
								</span>
							)
						})}
					</span>
				</div>
			</div>
		)
	}
}
Rate.defaultProps = {
	value: 0,
	length: 5,
	animate: 0,
	theme: "yellow",
	readonly: false
}
Rate.propTypes = {
	value:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
	length:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
	animate:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  theme:PropTypes.string,
  size:PropTypes.string,
  onRate:PropTypes.func,
  readonly:PropTypes.bool
}
export default Rate