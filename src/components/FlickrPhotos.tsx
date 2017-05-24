import * as React from 'react';
import { connect } from 'react-redux';
import { getRecent } from '../actions/index';

const farmUrl = 'https://farm';
const staticFlickrUrl = '.staticflickr.com/';

export interface StateProps {
    photo:any
}


export class FlickrPhotos extends React.Component<StateProps , any> {
    componentDidMount() {
        getRecent();
    }

    render()  {
        return (<h4><b>ladida</b></h4>);
        /*let photoUrl = '';
        return this.props.photos.map(photo => {
            photoUrl =  farmUrl + this.props.farm + staticFlickrUrl +
                        this.props.server + '/' + this.props.id + '_' + this.props.secret + 'jpg';
            return (
                <img src={photoUrl} />
            );
        });*/
    }
}

const mapStateToProps = (state: any, ownProp? :any):StateProps  => ({
    photo: "Photo",
});

export default connect(mapStateToProps, {getRecent})(FlickrPhotos as any)
