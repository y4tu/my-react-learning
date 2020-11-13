import React from "react";

const Profile = () => {
    return (
        <section className="content">
            <button type="button" className="content__image-button">
                <img src="img/mercedes___logo_home-1200x200.jpg" className="content__image" width="1200" height="200" alt="Картинка"/>
            </button>
            <div className="user">
                <button type="button" className="user__avatar-button">
                    <img src="img/1551511791_8.jpg" className="user__avatar" width="90" height="80" alt="Аватар"/>
                </button>
                <div className="user__info">
                    <h1>Pavel K.</h1>
                    <p>Date of birth: <span>10th january</span></p>
                    <p>City: <span>Rostov-on-Don</span></p>
                    <p>Education: <span>MTUCI'13</span></p>
                    <p>Web-site: <span>www.y4tu.com</span></p>
                </div>
            </div>
            <div className="news">
                <form className="news__new-post">
                    <h2 className="news__title">My posts</h2>
                    <div className="news__add-new">
                        <textarea className="news__text"></textarea>
                        <button className="posts__send" type="button"/>
                    </div>
                </form>
                <ul>
                    <li>Hey, why nobody loves me?</li>
                    <li>It's our new program! Hey!</li>
                </ul>
            </div>
        </section>
    )
};

export default Profile;