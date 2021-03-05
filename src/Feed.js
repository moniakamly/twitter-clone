import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";


function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>

            <TweetBox />
            <Post 
            displayName="Monia Kamly" 
            username="moniakam" 
            verified={true} 
            text="Yoo it's working"
            avatar=""
            image="https://media1.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.gif"/>
        
        </div>
    )
}

export default Feed;