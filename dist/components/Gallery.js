"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const FlickrImage_1 = require("./FlickrImage");
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: "FlickrGallery with typescript, react and redux.",
        };
        this.props.getRecent();
        console.log('lala');
        console.log(this.props.photos);
    }
    renderButtons() {
        let colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white'];
        return colors.map(color => {
            return (React.createElement("button", { key: color, className: color }));
        });
    }
    renderPhotos() {
        console.log('in gallery');
        console.log(this.props.photos);
        if (this.props.photos.length > 0) {
            let counter = 0;
            let hasBeenEven = false;
            let photos = this.props.photos[0].photos.photo;
            return photos.map((photo) => {
                counter++;
                let flickrImg = new FlickrImage_1.FlickrImage(photo.id, photo.owner, photo.secret, photo.server, photo.farm, photo.title);
                let photoClasses = ['photo'];
                if (counter % 6) {
                    hasBeenEven = true;
                }
                if (counter >= 6) {
                    photoClasses.push('photo_row_even');
                    if (counter % 12 == 0) {
                        counter = 0;
                        hasBeenEven = false;
                    }
                }
                else {
                    photoClasses.push('photo_row_odd');
                }
                let style = {
                    background: 'url(' + flickrImg.getUrl() + ') center no-repeat'
                };
                if (hasBeenEven) {
                    return (React.createElement("div", { className: photoClasses.join(' '), key: 'odd' + flickrImg.id },
                        React.createElement("div", { className: "center", key: 'hexa' + flickrImg.id },
                            React.createElement("div", { className: "photo_hexa", key: 'outer' + flickrImg.id },
                                React.createElement("div", { className: "photo_hexa_outer", key: 'inner' + flickrImg.id },
                                    React.createElement("div", { className: "photo_hexa_inner", style: style, key: flickrImg.id }))))));
                }
                else {
                    return (React.createElement("div", { className: "center", key: 'hexa' + flickrImg.id },
                        React.createElement("div", { className: "photo_hexa", key: 'outer' + flickrImg.id },
                            React.createElement("div", { className: "photo_hexa_outer", key: 'inner' + flickrImg.id },
                                React.createElement("div", { className: "photo_hexa_inner", style: style, key: flickrImg.id })))));
                }
            });
        }
        return null;
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "header" },
                React.createElement("div", { className: "header__content" },
                    React.createElement("h1", null, this.state.welcome),
                    React.createElement("div", { className: "search" },
                        React.createElement("div", { className: "search__inputs" },
                            React.createElement("input", { type: "text", name: "search", id: "search", placeholder: "Filter on color" }))),
                    React.createElement("div", { className: "buttons" },
                        React.createElement("h3", null, "Filter by color"),
                        this.renderButtons()))),
            React.createElement("div", { className: "photos" }, this.renderPhotos())));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => ({
    photos: state.photos
}))(Gallery);
//# sourceMappingURL=Gallery.js.map