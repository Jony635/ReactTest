'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainAudio = undefined;
var navBar = undefined;
var content = undefined;
var img = undefined;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        img = React.createElement(Image, { src: "resources/testImage.jpg", sticky_height: "200" });
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                img,
                React.createElement(NavigationBar, { active: "Home", home: "index.html", about: "html/about.html", gallery: "html/gallery.html" }),
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

function OnPageLoaded() {
    window.onscroll = OnScroll;
    navBar = document.getElementById("NavBar");
    content = document.getElementById("content");
}

function OnScroll() {
    if (window.pageYOffset >= window.innerWidth * img.props.sticky_height / 1920) {
        navBar.classList.add("sticky");
        content.classList.add("content");
    } else {
        navBar.classList.remove("sticky");
        content.classList.remove("content");
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));