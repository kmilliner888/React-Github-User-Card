import React from 'react';

const UserCard = (props) => {
    console.log('UserCard props', props);
    return (
        <div className="user-container">
            <div className="image-container">
                <img src={props.userData.userData.avatar_url} className="image"/>
            </div>
            <div className="info-container">
                <h3>{props.userData.userData.login}</h3>
                <p>{props.userData.userData.location}</p>
                <p>profile: <a href={props.userData.userData.html_url}>Check Out My Github</a></p>
                <p>followers: {props.userData.userData.followers}</p>
                <p>following: {props.userData.userData.following}</p>
                <p>bio: {props.userData.userData.bio}</p>
            </div>
        </div>
    )
};

export default UserCard;