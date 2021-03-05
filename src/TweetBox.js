import { Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";
import {Avatar} from "@material-ui/core";


function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src=""></Avatar>
                    <input placeholder="What's happenning ?" type="text" />
                    <input className="tweetBox__imageInput" placeholder="Optional: Enter an image URL" type="text"/>
                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;