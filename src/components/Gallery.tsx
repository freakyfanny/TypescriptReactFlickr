import * as React from "react";
import * as redux from 'redux';
import { connect } from 'react-redux';
import { getRecent } from '../actions/index';
import { FlickrImage } from './FlickrImage';

export interface IGalleryState {
    photos: FlickrImage[]
}

export interface IGalleryActions {
    getRecent: () => any;
}

interface IGalleryLocalState {
    welcome: string;
}

export default class Gallery extends React.Component<IGalleryState & IGalleryActions, IGalleryLocalState> {
    constructor(props: IGalleryState & IGalleryActions) {
        super(props);
        this.props.getRecent();
        this.state = {
            welcome: "Flickr gallery with typescript, react and redux.",
        };
    }

    renderButtons() {
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];
        return colors.map(color => {
            return (
                <button key={color} className={color} />
            );
        });
    }

    render()  {
        console.log('in gallery');
        console.log(this.props.photos);
        const photos = this.props.getRecent().map((photo: FlickrImage) => {
            <img src={photo.getLink()} key={photo.id} />
        });

        return (
            <div>
                <div className="header">
                    <h1>{this.state.welcome}</h1>
                    <div className="search">
                        <div className="search__inputs">
                            <input type="text" name="search" id="search" placeholder="Filter on color" />
                        </div>
                    </div>
                </div>
                {this.renderButtons()}
                {photos}
            </div>
        );
    }
}
