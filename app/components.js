"use strict";

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

        _this3.state = { powered: true };

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
                var newState = { powered: !state.powered };

                if (newState.powered && !mainAudio.playing) {
                    mainAudio.play();
                    mainAudio.playing = true;
                } else if (!newState.powered && mainAudio.playing) {
                    mainAudio.pause();
                    mainAudio.currentTime = 0;
                    mainAudio.playing = false;
                }

                return newState;
            });
        }
    }]);

    return SwitchButton;
}(React.Component);

var NavigationBar = function (_React$Component3) {
    _inherits(NavigationBar, _React$Component3);

    function NavigationBar(props) {
        _classCallCheck(this, NavigationBar);

        return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));
    }

    _createClass(NavigationBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "NavBar" },
                React.createElement(
                    "ul",
                    { id: "NavBar" },
                    React.createElement(
                        "li",
                        { className: this.props.active == "Home" ? "active" : "" },
                        "     ",
                        React.createElement(
                            "a",
                            { href: this.props.home },
                            " Home"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: this.props.active == "News" ? "active" : "" },
                        "     ",
                        React.createElement(
                            "a",
                            { href: "" },
                            "News"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: this.props.active == "Contact" ? "active" : "" },
                        "  ",
                        React.createElement(
                            "a",
                            { href: "" },
                            "Contact"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: this.props.active == "About" ? "active" : "" },
                        "    ",
                        React.createElement(
                            "a",
                            { href: this.props.about },
                            " About"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: this.props.active == "Gallery" ? "active" : "" },
                        "    ",
                        React.createElement(
                            "a",
                            { href: this.props.gallery },
                            " Gallery"
                        )
                    )
                )
            );
        }
    }]);

    return NavigationBar;
}(React.Component);

var Image = function (_React$Component4) {
    _inherits(Image, _React$Component4);

    function Image(props) {
        _classCallCheck(this, Image);

        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
    }

    _createClass(Image, [{
        key: "render",
        value: function render() {
            return React.createElement("img", { src: this.props.src });
        }
    }]);

    return Image;
}(React.Component);

var Gallery = function (_React$Component5) {
    _inherits(Gallery, _React$Component5);

    function Gallery(props) {
        _classCallCheck(this, Gallery);

        var _this6 = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

        _this6.col1 = [];
        _this6.col2 = [];
        _this6.col3 = [];
        _this6.col4 = [];

        var columnid = 0;
        for (var i = 0; i < _this6.props.images.length; i++) {
            var imageURL = _this6.props.images[i];

            switch (columnid) {
                case 0:
                    _this6.col1.push(React.createElement(Image, { src: imageURL }));
                    break;
                case 1:
                    _this6.col2.push(React.createElement(Image, { src: imageURL }));
                    break;
                case 2:
                    _this6.col3.push(React.createElement(Image, { src: imageURL }));
                    break;
                case 3:
                    _this6.col4.push(React.createElement(Image, { src: imageURL }));
                    break;
            }

            columnid++;

            if (columnid > 3) columnid = 0;
        }
        return _this6;
    }

    _createClass(Gallery, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "Gallery" },
                React.createElement(
                    "div",
                    { className: "GalleryColumn" },
                    this.col1
                ),
                React.createElement(
                    "div",
                    { className: "GalleryColumn" },
                    this.col2
                ),
                React.createElement(
                    "div",
                    { className: "GalleryColumn" },
                    this.col3
                ),
                React.createElement(
                    "div",
                    { className: "GalleryColumn" },
                    this.col4
                )
            );
        }
    }]);

    return Gallery;
}(React.Component);