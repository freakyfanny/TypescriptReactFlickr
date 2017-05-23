import * as React from "react";
import { Hello } from "./Hello";
import { FlickrPhotos } from './flickrPhotos';
import * as redux from 'redux';
import { connect } from 'react-redux';

export interface StateProps {
    welcome: string,
    photo: any,
}

export interface DispatchProps {
}

export class Gallery extends React.Component<StateProps & DispatchProps, any> {

    renderButtons() {
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];
        return colors.map(color => {
            return (
                <button className={color} />
            );
        });
    }

    render()  {
        return (
            <div>
                <Hello compiler="TypeScript" framework="React" />
                <div className="header">
                    <h1>{this.props.welcome}</h1>
                    <div className="search">
                        <div className="search__inputs">
                            <input type="text" name="search" id="search" placeholder="Filter on color" />
                        </div>
                    </div>
                </div>
                {this.renderButtons()}
                <FlickrPhotos photo={this.props.photo} />
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProp? :any):StateProps  => ({
    welcome: state.welcome,
    photo: state.photo,
});

const mapDispatchToProps = (dispatch: any):DispatchProps => ({
/*    GetRecent: () => {
       dispatch({ type: 'GET_RECENT', payload: null });
   }*/
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery as any)
