import React from "react";
import classes from "./Company.module.css"
import Companion from "./Companion/Companion";

const Data = {
    Avatars: {
        HAPPY_AVATAR: `/img/man.jpg`,
        STARLORD_AVATAR: `/img/starlord.jpg`,
        EINSTEIN_AVATAR: `/img/einstein.png`,
        ANONYMOUS_AVATAR: `/img/anonymous.jpg`,
    },
    Names: {
        HAPPY: `Happy Gilmore`,
        STARLORD: 'Chris Pratt',
        EINSTEIN: `Albert Einstein`,
        ANONYMOUS: `Anonymous`,
    },
    Routes: {
        HAPPY_ROUTE: `/dialogs/happy`,
        STARLORD_ROUTE: `/dialogs/starlord`,
        EINSTEIN_ROUTE: `/dialogs/einstein`,
        ANONYMOUS_ROUTE: `/dialogs/anonymous`,
    }
};

const {
    Avatars,
    Names,
    Routes,
} = Data;

const Company = (props) => {
    return (
        <ul className={classes.company}>
            <Companion avatar={Avatars.HAPPY_AVATAR} name={Names.HAPPY} route={Routes.HAPPY_ROUTE}/>
            <Companion avatar={Avatars.STARLORD_AVATAR} name={Names.STARLORD} route={Routes.STARLORD_ROUTE}/>
            <Companion avatar={Avatars.EINSTEIN_AVATAR} name={Names.EINSTEIN} route={Routes.EINSTEIN_ROUTE}/>
            <Companion avatar={Avatars.ANONYMOUS_AVATAR} name={Names.ANONYMOUS} route={Routes.ANONYMOUS_ROUTE}/>
        </ul>
    )
}

export default Company;