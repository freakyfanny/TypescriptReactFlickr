import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';
import { getRecent } from '../actions/index';
import { FlickrImage } from './FlickrImage';

export interface GalleryState extends React.Props<any> {
    photos: any;
}

export interface GalleryActions extends React.Props<any> {
    getRecent: () => any;
}

interface GalleryLocalState {
    welcome: string;
}

class Gallery extends React.Component<GalleryState & GalleryActions, GalleryLocalState> {
    constructor(props: GalleryState & GalleryActions) {
        super(props);
        this.props.getRecent();
        this.state = {
            welcome: 'FlickrGallery with typescript, react and redux.',
        };
    }

    renderPhoto(flickrImg: FlickrImage) {
        let style = {
            background: 'url(' + flickrImg.getUrl() + ') center no-repeat'
        };

        return (
        <div className="center" key={'hexa' + flickrImg.id}>
            <div className="photo_hexa" key={'outer' + flickrImg.id}>
                 <div className="photo_hexa_outer" key={'inner' + flickrImg.id}>
                       <div className="photo_hexa_inner" style={style} key={flickrImg.id}/>
                 </div>
            </div>
        </div>
        );
    }

    renderPhotos() {
        if (this.props.photos.length > 0) {
            let counter: number = 0;
            let isEven: boolean = false;
            let photos: any = this.props.photos[0].photos.photo;
            return photos.map((photo: any) => {
                let flickrImg: FlickrImage = new FlickrImage(
                    photo.id , photo.owner, photo.secret,
                    photo.server, photo.farm, photo.title);
                let photoClasses: string[] = ['photo'];

                if (counter % 11 === 0) {
                    isEven = false;
                    counter = 0;
                } else if (counter % 6 === 0) {
                    isEven = true;
                }
                counter++;

                if (!isEven) {
                    photoClasses.push('photo_row_odd');
                    return (
                    <div className={photoClasses.join(' ')} key={'odd' + flickrImg.id}>
                        {this.renderPhoto(flickrImg)}
                    </div>
                    );
                } else {
                    photoClasses.push('photo_row_even');
                    return(
                    <div className={photoClasses.join(' ')} key={'even' + flickrImg.id}>
                        {this.renderPhoto(flickrImg)}
                    </div>
                    );
                }
            });
        }

        return null;
    }

    render()  {
        return (
            <div>
                <div className="header">
                    <div className="header__content">
                        <h1>{this.state.welcome}</h1>
                    </div>
                </div>
                <div className="photos">
                    {this.renderPhotos()}
                </div>
            </div>
        );
    }
}

export default connect(
  state => ({
    photos: state.photos
  })
)(Gallery);
