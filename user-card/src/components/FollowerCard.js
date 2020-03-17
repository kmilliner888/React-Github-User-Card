import React from 'react';

const FollowerCard = (props) => {
    console.log("FollowerCard props", props);
    return (
        <div className="card-container">
            {props.followerData.followerData.map(follower => (
                <div key={follower.id}>
                    <div>
                        <img src={follower.avatar_url}/>
                    </div>
                    <div>
                        <h3>{follower.login}</h3>
                        <p>profile: <a href={follower.html_url}>Check Out My Github</a></p>
                    </div>
                </div>
            ))}    
        </div>
    )
};

export default FollowerCard;