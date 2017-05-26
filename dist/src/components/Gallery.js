"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const index_1 = require("../actions/index");
const redux_1 = require("redux");
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: "Flickr gallery with typescript, react and redux.",
        };
    }
    renderButtons() {
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];
        return colors.map(color => {
            return (React.createElement("button", { key: color, className: color }));
        });
    }
    render() {
        const photos = this.props.getRecent().map((photo) => {
            React.createElement("img", { src: photo.getUrl(), key: photo.id });
        });
        return (React.createElement("div", null,
            React.createElement("div", { className: "header" },
                React.createElement("h1", null, this.props.welcome),
                React.createElement("div", { className: "search" },
                    React.createElement("div", { className: "search__inputs" },
                        React.createElement("input", { type: "text", name: "search", id: "search", placeholder: "Filter on color" })))),
            this.renderButtons(),
            photos));
    }
}
exports.Gallery = Gallery;
const mapStateToProps = (state, ownProp) => ({
    welcome: state.welcome,
    photos: state.photos
});
const mapDispatchToProps = redux_1.bindActionCreators(index_1.getRecent, this.props.dispatch);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Gallery);
//# sourceMappingURL=Gallery.js.map