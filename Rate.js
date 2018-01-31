"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rateStyles = {
	position: "relative",
	display: "inline-block"
};

var hollowStyles = {
	position: "absolute",
	display: "inlin-block",
	top: 0,
	left: 0,
	width: 0,
	overflow: "hidden"
};
var themeObj = {
	black: "#00",
	white: "#fff",
	red: "#f5222d",
	orange: "#fa541c",
	yellow: "#fadb14",
	green: "#73d13d",
	blue: "#40a9ff",
	purple: "#9254de"
};

var Rate = function (_React$PureComponent) {
	_inherits(Rate, _React$PureComponent);

	function Rate(props) {
		_classCallCheck(this, Rate);

		var _this = _possibleConstructorReturn(this, (Rate.__proto__ || Object.getPrototypeOf(Rate)).call(this, props));

		_this.state = {
			stars: new Array(props.length - 0).fill("★"),
			hollow: new Array(props.length - 0).fill("☆"),
			styleObject: {}
		};
		_this.styleFont = {
			color: themeObj[_this.props.theme] ? themeObj[_this.props.theme] : _this.props.theme,
			fontSize: _this.props.size ? _this.props.size : ""
		};

		_this.onHover = _this.onHover.bind(_this);
		_this.onOut = _this.onOut.bind(_this);
		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(Rate, [{
		key: "onHover",
		value: function onHover(i) {
			if (this.props.readonly) {
				return false;
			}
			this.setState({
				styleObject: { transition: "width " + this.props.animate + "s", width: i + 1 + "em" }
			});
		}
	}, {
		key: "onOut",
		value: function onOut() {
			this.setState({
				styleObject: { transition: "width " + this.props.animate + "s", width: this.props.value + "em" }
			});
		}
	}, {
		key: "onClick",
		value: function onClick(i) {
			if (this.props.readonly) {
				return false;
			}
			this.props.onRate && this.props.onRate(i + 1);
		}
	}, {
		key: "setStyle",
		value: function setStyle() {
			var _this2 = this;

			this.setState(function (prevState, props) {
				return {
					styleObject: {
						width: _this2.props.value + "em",
						transition: "width " + _this2.props.animate + "s"
					}
				};
			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this3 = this;

			if (this.props.animate === "0" || this.props.animate === 0) {
				this.setStyle();
			}
			setTimeout(function () {
				_this3.setStyle();
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				"div",
				{ style: this.styleFont },
				this.props.children,
				_react2.default.createElement(
					"div",
					{ style: rateStyles, onMouseOut: this.onOut },
					this.state.hollow.map(function (v, i) {
						return _react2.default.createElement(
							"span",
							{ onMouseOver: function onMouseOver() {
									return _this4.onHover(i);
								}, key: i },
							v
						);
					}),
					_react2.default.createElement(
						"span",
						{ style: Object.assign({}, hollowStyles, this.state.styleObject) },
						this.state.stars.map(function (v, i) {
							return _react2.default.createElement(
								"span",
								{
									onClick: function onClick() {
										return _this4.onClick(i);
									},
									onMouseOver: function onMouseOver() {
										return _this4.onHover(i);
									},
									key: i
								},
								v
							);
						})
					)
				)
			);
		}
	}]);

	return Rate;
}(_react2.default.PureComponent);

Rate.defaultProps = {
	value: 0,
	length: 5,
	animate: 0,
	theme: "yellow",
	readonly: false
};
Rate.propTypes = {
	value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	length: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	animate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	theme: _propTypes2.default.string,
	size: _propTypes2.default.string,
	onRate: _propTypes2.default.func,
	readonly: _propTypes2.default.bool
};
exports.default = Rate;
