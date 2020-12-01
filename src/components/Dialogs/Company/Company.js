import React from 'react';
import classes from './Company.module.css'
import Companion from './Companion/Companion';

const Company = (props) => {
    const renderCompany = props.companyData.map(item => <Companion
        key={item.NAME.toString()}
        avatar={item.AVATAR}
        name={item.NAME}
        route={item.ROUTE}/>)

    return (
    <ul className={classes.company}>
        {renderCompany}
    </ul>
    )
}

export default Company;