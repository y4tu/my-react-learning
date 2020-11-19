let state = {
    ProfilePage: {
        IdData: [
            {PROPERTY: `Date of Birth: `, VALUE: `10th January`},
            {PROPERTY: `City: `, VALUE: `Rostov-on-Don`},
            {PROPERTY: `Education: `, VALUE: `MTUCI'13`},
            {PROPERTY: `Web Site: `, VALUE: `https://www.y4tu.com`},
        ],
        PostsData: [
            {COUNTER: 0, AVATAR: `/img/starlord.jpg`, MESSAGE: `Hi! How are you?`, LIKE_COUNT: `1 Likes`},
            {COUNTER: 1, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `I\`m starting use this social.`, LIKE_COUNT: `13 Likes`},
            {COUNTER: 2, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `Somebody, send me some music.`, LIKE_COUNT: `23 Likes`},
            {COUNTER: 3, AVATAR: `/img/einstein.png`, MESSAGE: `What do you think about this social?`, LIKE_COUNT: `7 Likes`}
        ]
    },
    DialogsPage: {
        CompanyData: [
            {AVATAR: `/img/man.jpg`, NAME: `Happy Gilmore`, ROUTE: `/dialogs/happy`},
            {AVATAR: `/img/starlord.jpg`, NAME: 'Chris Pratt', ROUTE: `/dialogs/starlord`},
            {AVATAR: `/img/einstein.png`, NAME: `Albert Einstein`, ROUTE: `/dialogs/einstein`},
            {AVATAR: `/img/anonymous.jpg`, NAME: `Anonymous`, ROUTE: `/dialogs/anonymous`}
        ],
        MessagesData: [
            {COUNTER: 0, USER: `Me`, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `Hi!`},
            {COUNTER: 1, USER: `Companion`, AVATAR: `/img/starlord.jpg`, MESSAGE: `Hallo!`},
            {COUNTER: 2, USER: `Me`, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `Hay, what's problem with Gamora?`},
            {COUNTER: 3, USER: `Companion`, AVATAR: `/img/starlord.jpg`, MESSAGE: `I don't want talk about that!!!`},
            {COUNTER: 4, USER: `Me`, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `Okay, just relax, man!`},
            {COUNTER: 5, USER: `Companion`, AVATAR: `/img/starlord.jpg`, MESSAGE: `Sorry. Unpleasant topic...`},
            {COUNTER: 6, USER: `Me`, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `Understand you...`}
        ]
    }
};

export default state;