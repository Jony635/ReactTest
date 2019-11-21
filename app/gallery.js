"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navBar = undefined;
var content = undefined;
var img = undefined;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        img = React.createElement(Image, { src: "../resources/testImage.jpg", sticky_height: "200" });
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var prefix = "../resources/";

            return React.createElement(
                "div",
                null,
                img,
                React.createElement(NavigationBar, { active: "Gallery", home: "../index.html", about: "about.html", gallery: "gallery.html" }),
                React.createElement(
                    "div",
                    { id: "content" },
                    React.createElement(Gallery, { images: [prefix + "fregadora1.jpg", prefix + "fregadora2.jpg", prefix + "furgoneta1.jpg", prefix + "Aspiradora1.jpg", prefix + "suelo_brillante.jpg", prefix + "suelo_marmol.jpg", prefix + "oficina.jpeg", prefix + "logo.jpg"] })
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

function OnPageLoaded() {
    window.onscroll = OnScroll;
    navBar = document.getElementById("NavBar");
    content = document.getElementById("content");
}

function OnScroll() {
    if (window.pageYOffset >= window.innerWidth * img.props.sticky_height / 1920) {
        navBar.classList.add("sticky");
        content.classList.add("content");

        if (window.innerWidth > 1000) {
            content.style.paddingTop = "55px";
        } else {
            content.style.paddingTop = "190px";
        }
    } else {
        navBar.classList.remove("sticky");
        content.classList.remove("content");

        content.style.paddingTop = "20px";
    }
}