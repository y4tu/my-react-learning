import React from 'react';
import {connect} from "react-redux";
import Id from "./Id";

const mapStateToProps = (state) => {
    return {
        idData: state.ProfilePage.IdData
    }
};

const IdContainer = connect(mapStateToProps)(Id);

export default IdContainer;
