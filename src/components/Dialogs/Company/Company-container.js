import React from 'react';
import {connect} from "react-redux";
import Company from "./Company";

const mapStateToPost = (state) => {
    return {
        companyData: state.DialogsPage.CompanyData
    }
};

const CompanyContainer = connect(mapStateToPost)(Company);

export default CompanyContainer;