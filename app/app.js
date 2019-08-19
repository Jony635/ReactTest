'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var date_formatted = this.formatDate(this.state);

            return React.createElement(
                "div",
                null,
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

            return week_day + " " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + state.date.toLocaleTimeString();
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, { name: "ReactTest" }), document.getElementById("root"));