import React , { useEffect, useState } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from 'react-flip-move';


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return (
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>

            {console.log(posts)}
            <TweetBox />

            {/*FlipMOve is an animation library for the posts*/}
            <FlipMove>
            {posts.map(post => (
                <Post 
                date={post.date}
                key={post.text}
                displayName={post.displayName} 
                username={post.username}
                verified={post.verified} 
                text={post.text}
                avatar={post.avatar}
                image={post.image}/>
            )).sort((a,b) => a.date > b.date)}
            </FlipMove>

            {/* <Post 
            displayName="Monia Kamly" 
            username="moniakam" 
            verified={true} 
            text="Yoo it's working"
            avatar=""
            image="https://media1.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.gif"/> */}
        
        </div>
    )
}

export default Feed;