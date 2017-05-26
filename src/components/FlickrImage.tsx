const farmUrl = 'https://farm';
const staticFlickrUrl = '.staticflickr.com/';

export class FlickrImage {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;

    getLink() : string {
        return farmUrl + this.farm + staticFlickrUrl +
                    this.server + '/' + this.id + '_' + this.secret + 'jpg';
    }
}
