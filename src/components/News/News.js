import React from 'react';
import classes from './News.module.css'
import Title from '../Title/Title';

const News = () => {
    return (
        <section className={classes.content}>
            <Title title="News"/>
        </section>
    )
};

export default News;