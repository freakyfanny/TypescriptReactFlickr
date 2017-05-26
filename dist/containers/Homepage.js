"use strict";
const react_redux_1 = require("react-redux");
const Actions = require("../actions");
const Gallery_1 = require("../components/Gallery");
const mapStateToProps = (state) => {
    return {
        photos: state.data.photos,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getRecent: () => {
            dispatch(Actions.getRecent());
        }
    };
};
exports.Homepage = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Gallery_1.default);
//# sourceMappingURL=Homepage.js.map