"use strict";
const React = require("react");
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: "Flickr gallery with typescript, react and redux.",
        };
    }
    componentDidMount() {
        this.props.getRecent();
    }
    renderButtons() {
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];
        return colors.map(color => {
            return (React.createElement("button", { key: color, className: color }));
        });
    }
    render() {
        const photos = this.props.photos.map((photo) => {
            React.createElement("img", { src: photo.getLink(), key: photo.id });
        });
        return (React.createElement("div", null,
            React.createElement("div", { className: "header" },
                React.createElement("h1", null, this.state.welcome),
                React.createElement("div", { className: "search" },
                    React.createElement("div", { className: "search__inputs" },
                        React.createElement("input", { type: "text", name: "search", id: "search", placeholder: "Filter on color" })))),
            this.renderButtons(),
            photos));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Gallery;
//# sourceMappingURL=Gallery.js.map