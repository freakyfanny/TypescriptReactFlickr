"use strict";
const farmUrl = 'https://farm';
const staticFlickrUrl = '.staticflickr.com/';
class FlickrImage {
    getUrl(suffix) {
        return farmUrl + this.farm + staticFlickrUrl +
            this.server + '/' + this.id + '_' + this.secret + 'jpg';
    }
}
exports.FlickrImage = FlickrImage;
//# sourceMappingURL=FlickrImage.js.map