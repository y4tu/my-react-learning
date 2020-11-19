import React from 'react';
import classes from './Id.module.css'
import Item from './Items/Item';

const Id = (props) => {
    const renderId = props.IdData.map(item => <Item key={item.PROPERTY.toString()} property={item.PROPERTY} value={item.VALUE}/>);

    return (
        <div className={classes.profile}>
            <button type="button" className={classes.avatarButton}>
                <img src="/img/1551511791_8.jpg" className={classes.avatar} width="90" height="80" alt="Аватар"/>
            </button>
            <div className={classes.infoWrapper}>
                <h2 className={classes.name}>Pavel K.</h2>
                <ul className={classes.info}>
                    {renderId}
                </ul>
            </div>
        </div>
    )
};

export default Id;