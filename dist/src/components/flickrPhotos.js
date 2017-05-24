"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const farmUrl = 'https://farm';
const staticFlickrUrl = '.staticflickr.com/';
class FlickrPhotos extends React.Component {
    render() {
        return (React.createElement("h4", null,
            React.createElement("b", null, "ladida")));
    }
}
exports.FlickrPhotos = FlickrPhotos;
const mapStateToProps = (state, ownProp) => ({
    photo: "Photo",
});
const mapDispatchToProps = (dispatch) => ({});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FlickrPhotos);
//# sourceMappingURL=flickrPhotos.js.map