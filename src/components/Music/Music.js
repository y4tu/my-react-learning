import React from 'react';
import classes from './Music.module.css'
import Title from '../Title/Title';

const Music = () => {
    return (
        <section className={classes.content}>
            <Title title="Music"/>
        </section>
    )
};

export default Music;