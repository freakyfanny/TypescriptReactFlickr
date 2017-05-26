"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const index_1 = require("../actions/index");
const farmUrl = 'https://farm';
const staticFlickrUrl = '.staticflickr.com/';
class FlickrImage {
    getUrl(suffix) {
        return farmUrl + this.farm + staticFlickrUrl +
            this.server + '/' + this.id + '_' + this.secret + 'jpg';
    }
}
exports.FlickrImage = FlickrImage;
class FlickrPhotos extends React.Component {
    componentDidMount() {
        index_1.getRecent();
    }
    render() {
        console.log(this.props.photos);
        let photos = FlickrImage[];
        photos = this.props.photos;
        for (let photo of photos) {
            return (React.createElement("img", { key: photo.id, src: photo.link }));
        }
    }
}
exports.FlickrPhotos = FlickrPhotos;
const mapStateToProps = (state, ownProp) => ({
    photos: state.photo
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, { getRecent: index_1.getRecent })(FlickrPhotos);
//# sourceMappingURL=flickrPhotos.js.map