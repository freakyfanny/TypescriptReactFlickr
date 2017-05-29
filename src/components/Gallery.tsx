import * as React from "react";
import * as redux from 'redux';
import { connect } from 'react-redux';
import { getRecent } from '../actions/index';
import { FlickrImage } from './FlickrImage';

export interface IGalleryState extends React.Props<any> {
    photos: any
}

export interface IGalleryActions extends React.Props<any> {
    getRecent: () => any;
}

interface IGalleryLocalState {
    welcome: string;
}

class Gallery extends React.Component<IGalleryState & IGalleryActions, IGalleryLocalState> {
    constructor(props: IGalleryState & IGalleryActions) {
        super(props);
        this.state = {
            welcome: "FlickrGallery with typescript, react and redux.",
        };
        this.props.getRecent();
        console.log('lala')
        console.log(this.props.photos)
    }

    renderButtons() {
        let colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white'];
        return colors.map(color => {
            return (
                <button key={color} className={color} />
            );
        });
    }

    renderPhotos() {
        console.log('in gallery');
        console.log(this.props.photos);
        if(this.props.photos.length > 0) {
            let counter : number = 0;
            let hasBeenEven : boolean = false;
            let photos : any = this.props.photos[0].photos.photo;
            return photos.map((photo: any) => {
                counter++;
                let flickrImg : FlickrImage = new FlickrImage(photo.id , photo.owner, photo.secret, photo.server, photo.farm, photo.title);
                let photoClasses: string[] = ['photo'];
                if(counter%6) {
                    hasBeenEven = true;
                }
                if(counter >= 6) {
                    photoClasses.push('photo_row_even');
                    if(counter%12 == 0) {
                        counter = 0;
                        hasBeenEven = false;
                    }
                } else {
                    photoClasses.push('photo_row_odd');
                }

                let style = {
                    background: 'url(' + flickrImg.getUrl() + ') center no-repeat'
                }

                if(hasBeenEven) {
                    return(
                    <div className={photoClasses.join(' ')} key={'odd' + flickrImg.id}>
                        <div className="center" key={'hexa' + flickrImg.id}>
                            <div className="photo_hexa" key={'outer' + flickrImg.id}>
                                 <div className="photo_hexa_outer" key={'inner' + flickrImg.id}>
                                       <div className="photo_hexa_inner" style={style} key={flickrImg.id}>
                                       </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                    );
                } else {
                    return(
                    <div className="center" key={'hexa' + flickrImg.id}>
                        <div className="photo_hexa" key={'outer' + flickrImg.id}>
                            <div className="photo_hexa_outer" key={'inner' + flickrImg.id}>
                                <div className="photo_hexa_inner" style={style} key={flickrImg.id}>
                                </div>
                            </div>
                        </div>
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
                        <div className="search">
                            <div className="search__inputs">
                                <input type="text" name="search" id="search" placeholder="Filter on color" />
                            </div>
                        </div>

                        <div className="buttons">
                            <h3>Filter by color</h3>
                            {this.renderButtons()}
                        </div>
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


/*<div className="crop">
    <img src={flickrImg.getUrl()} key={flickrImg.id}/>
</div>
<div class="photo_hexa_desc">
  <h2>Welcome this is an epic title</h2>
  <p>website</p>
</div>
*/
