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

var MainBar = function (_React$Component3) {
    _inherits(MainBar, _React$Component3);

    function MainBar(props) {
        _classCallCheck(this, MainBar);

        return _possibleConstructorReturn(this, (MainBar.__proto__ || Object.getPrototypeOf(MainBar)).call(this, props));
    }

    _createClass(MainBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "MainBar" },
                React.createElement(
                    "ul",
                    { id: "MainBar", className: "MainBar" },
                    React.createElement(
                        "li",
                        { className: "MainBar" },
                        React.createElement(
                            "a",
                            { className: "MainBar", href: "index.html" },
                            "Home"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "MainBar" },
                        React.createElement(
                            "a",
                            { className: "MainBar", href: "" },
                            "News"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "MainBar" },
                        React.createElement(
                            "a",
                            { className: "MainBar", href: "" },
                            "Contact"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "MainBar" },
                        React.createElement(
                            "a",
                            { className: "MainBar", href: "test.html" },
                            "About"
                        )
                    )
                )
            );
        }
    }]);

    return MainBar;
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
            return React.createElement(
                "div",
                { className: "ImageContainer" },
                React.createElement("img", { src: "../resources/testImage.jpg" })
            );
        }
    }]);

    return Image;
}(React.Component);

var App = function (_React$Component5) {
    _inherits(App, _React$Component5);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Image, null),
                React.createElement(MainBar, null),
                React.createElement(
                    "div",
                    { id: "content" },
                    React.createElement(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sagittis nunc. Fusce tempor lacus at odio accumsan euismod. In sem velit, dictum sit amet ultricies vitae, iaculis ac turpis. Mauris ac malesuada nisi. In aliquam ligula vel neque pretium dapibus. Praesent rhoncus nisi viverra, accumsan mi vel, pharetra magna. Fusce id fringilla mauris. Nullam convallis, lorem vel convallis tempus, metus neque tincidunt nibh, in commodo neque leo tempor orci. Mauris ex lectus, aliquam eget cursus id, finibus ac quam. Proin iaculis erat quis ligula sollicitudin, nec condimentum justo auctor. Nam vulputate nisi eu nulla convallis, eget tempor odio bibendum. Mauris id neque ac mauris tempus rhoncus. Etiam at dolor dolor. Donec facilisis non nunc eleifend sollicitudin. Proin faucibus, ipsum sed porttitor rhoncus, massa velit porttitor diam, sed dictum dui sapien vitae arcu. Cras at tellus vel magna pellentesque maximus."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Nam et tortor tellus. Integer efficitur mollis elit, a aliquet elit dictum ut. Donec pellentesque dolor in urna bibendum, vel pellentesque nisi bibendum. Vivamus pharetra tellus nisi, in egestas diam sollicitudin id. Phasellus nec semper magna. Nullam maximus mauris non tortor vestibulum blandit. Sed elementum dolor porttitor turpis tempus pretium. Cras sodales magna nec pretium consectetur. Donec diam ipsum, consequat auctor lorem et, viverra finibus est. Etiam molestie, orci a accumsan facilisis, orci sem tempor urna, a fringilla leo orci a risus. Duis eu quam ante. Morbi quis condimentum felis."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Donec fermentum tincidunt commodo. Praesent ultricies risus id sapien accumsan volutpat. Quisque mi orci, ultricies ac sodales sit amet, dapibus sit amet nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent pretium ligula nunc, eu blandit risus ullamcorper sit amet. Donec eleifend est sit amet leo venenatis ornare. Fusce tempor mollis dolor, vel eleifend velit aliquet tempor. Vestibulum laoreet felis est, ac scelerisque sapien suscipit varius. Nunc convallis scelerisque sapien eget rhoncus. In quis tempor lectus, vitae tempus dui. Ut elementum mi ac elit accumsan, non aliquam dui venenatis. Praesent porttitor pellentesque libero in eleifend."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Morbi faucibus ac odio eget commodo. Donec lectus purus, mollis id malesuada ut, vestibulum in lectus. Cras dictum lacus quis augue varius sagittis. Proin tristique pretium lacus, a hendrerit nisi accumsan id. Aliquam tristique tempor diam, vel dictum magna placerat a. Sed dignissim vestibulum lorem a tempor. Sed id mi non tortor faucibus volutpat. Sed quis magna dolor. Phasellus a ligula ut enim tristique tincidunt. Integer ornare eu libero a consequat."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Donec imperdiet ut metus id commodo. Praesent eget fringilla ex. Phasellus eu molestie urna, ut tincidunt diam. Suspendisse vitae cursus est. Sed sit amet augue vitae dolor euismod lobortis. Etiam blandit augue non varius dapibus. Aliquam imperdiet pretium nibh. Mauris gravida posuere consectetur."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Nulla accumsan elit a euismod sagittis. Suspendisse luctus auctor nibh, nec tempus nibh consectetur non. Ut hendrerit tellus sem, ut rhoncus risus tincidunt id. Duis elit ex, tempus at pretium eget, aliquet sit amet velit. Nunc sit amet lacinia leo. Nunc venenatis nisl eget ligula tincidunt vehicula. Fusce ornare quam purus, eu semper enim sodales vel. Sed sagittis urna turpis, ac molestie lorem auctor non. Mauris quis ligula luctus, pretium tellus non, faucibus quam. Fusce sit amet mauris ac ipsum ultricies mattis. Duis faucibus nisi ut sem sagittis laoreet. Fusce quis sagittis nibh. Nullam vitae nulla neque. Aliquam elementum ultricies erat sollicitudin mollis."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Proin pulvinar elementum quam ut varius. Sed pretium urna nibh, sit amet porta metus feugiat eget. Phasellus condimentum dui felis, vitae sodales sapien tempus eget. Curabitur tincidunt ligula at leo accumsan vehicula. Morbi blandit nulla vitae est tempus tincidunt. Phasellus condimentum hendrerit metus, a convallis ante pellentesque ut. Nulla fringilla arcu eu ipsum volutpat, at sodales urna facilisis. Aliquam vestibulum, nulla et luctus laoreet, est justo euismod nunc, ac maximus erat tortor vel massa. Etiam lacinia id justo et placerat. Cras ex metus, pulvinar eu ultrices a, convallis viverra velit. Nulla blandit mauris et urna malesuada, eu placerat lectus ultrices."
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

var mainAudio = undefined;
var mainBar = undefined;
var content = undefined;

function OnPageLoaded() {
    window.onscroll = OnScroll;
    mainBar = document.getElementById("MainBar");
    content = document.getElementById("content");
}

function OnScroll() {
    if (window.pageYOffset >= 200) {
        mainBar.classList.add("sticky");
        content.classList.add("content");
    } else {
        mainBar.classList.remove("sticky");
        content.classList.remove("content");
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));