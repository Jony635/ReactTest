'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(Clock, [{
        key: "render",
        value: function render() {
            var date_formatted = this.formatDate(this.state);

            return React.createElement(
                "div",
                { className: "inlineElem" },
                React.createElement(
                    "h1",
                    null,
                    "Hey folks!"
                ),
                React.createElement(
                    "h3",
                    null,
                    "Today is ",
                    date_formatted,
                    " "
                )
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.intervalID = setInterval(function () {
                _this2.setState({ date: new Date() }), 1000;
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.intervalID);
        }
    }, {
        key: "formatDate",
        value: function formatDate(state) {
            var date = state.date;

            var week_day = void 0;
            switch (date.getDay()) {
                case 1:
                    week_day = "Monday";
                    break;
                case 2:
                    week_day = "Tuesday";
                    break;
                case 3:
                    week_day = "Wednesday";
                    break;
                case 4:
                    week_day = "Thursday";
                    break;
                case 5:
                    week_day = "Friday";
                    break;
                case 6:
                    week_day = "Saturday";
                    break;
                case 0:
                    week_day = "Sunday";
                    break;
            }

            var day = date.getDate().toString();
            if (day.length == 1) day = '0' + day;

            var month = (date.getMonth() + 1).toString();
            if (month.length == 1) month = '0' + month;

            var hours = date.getHours().toString();
            if (hours.length == 1) hours = '0' + hours;

            var minutes = date.getMinutes().toString();
            if (minutes.length == 1) minutes = '0' + minutes;

            var seconds = date.getSeconds().toString();
            if (seconds.length == 1) seconds = '0' + seconds;

            return week_day + " " + day + "/" + month + "/" + date.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
        }
    }]);

    return Clock;
}(React.Component);

var SwitchButton = function (_React$Component2) {
    _inherits(SwitchButton, _React$Component2);

    function SwitchButton(props) {
        _classCallCheck(this, SwitchButton);

        var _this3 = _possibleConstructorReturn(this, (SwitchButton.__proto__ || Object.getPrototypeOf(SwitchButton)).call(this, props));

        _this3.state = { powered: false };

        _this3.onClick = _this3.onClick.bind(_this3);
        return _this3;
    }

    _createClass(SwitchButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { onClick: this.onClick },
                this.state.powered ? "ON" : "OFF"
            );
        }
    }, {
        key: "onClick",
        value: function onClick(state) {
            this.setState(function (state) {
                return { powered: !state.powered };
            });
        }
    }]);

    return SwitchButton;
}(React.Component);

var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "inlineElem" },
                React.createElement(Clock, null),
                React.createElement(SwitchButton, null),
                React.createElement(
                    "div",
                    { className: "video" },
                    React.createElement("iframe", { width: "949",
                        height: "534", src: "https://www.youtube.com/embed/668nUCeBHyY", frameborder: "0",
                        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: true })
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));