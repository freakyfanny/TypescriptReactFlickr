import { connect } from "react-redux";
import * as Redux from "react-redux";
import * as Actions from "../actions";
import Gallery from "../components/Gallery";
import { IGalleryActions, IGalleryState } from "../components/Gallery";

/**
 * You only need 2 functions for a container: mapStateToProps and mapDispatchToProps
 * These functions act as parameters to the react-redux connect generator and tells it what to pass
 * to your visual component -- which is not aware of redux itself
 */

/**
 * Takes the global redux state and filters it down to the props required for your visual component
 * Keep the returned props light; removing the need for componentShouldUpdate
 */
const mapStateToProps = (state: any): IGalleryState => {
    return {
        photos: state.data.photos,
        // Notice how we've removed 'randomJunk' from the initial state; KEEP PROPS LIGHT!! :)
    };
};

/**
 * Your visual component shouldn't know anything about redux; so pass your dispatchable function as
 * event methods which call it instead
 */
const mapDispatchToProps = <T>(dispatch: Redux.Dispatch<T>): IGalleryActions => {
    return {
        getRecent: () => {
            dispatch(Actions.getRecent());
        }
    };
};

export const Homepage = connect(mapStateToProps, mapDispatchToProps)(Gallery);
