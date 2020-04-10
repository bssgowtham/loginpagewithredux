import React from 'react';
import classes from './Home.module.css';
import Navbar from '../Layout/Navbar';

const home = () => (
    <div className={classes.Home}>
        <Navbar />
    </div>
);

export default home;