const farmUrl = 'https://farm';
const staticFlickrUrl = '.staticflickr.com/';

export class FlickrImage {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;

    constructor(id: string, owner: string, secret: string, server: string, farm: number, title: string) {
        this.id = id;
        this.owner = owner;
        this.secret = secret;
        this.server = server;
        this.farm = farm;
        this.title = title;
    }

    public getUrl(): string {
        return farmUrl + this.farm + staticFlickrUrl +
        this.server + '/' + this.id + '_' + this.secret + '.jpg';
    }
}
