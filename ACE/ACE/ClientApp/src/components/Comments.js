import React, {Component} from 'react';
import '../Styles/comments.css'

const Comments = (props) => {
    return (
        <div>
            <div className="commentPlace">
                <img className="iconHolder" src = {props.post.img}/>
                <div className="commentAuthor">
                    <a href = "#" className="commentAuthor">{props.post.nickname}
                        <p className="datetime">{props.post.date}</p>
                    </a>
                </div>
                <div className="comment">
                    {props.post.comment}
                </div>
            </div>
        </div>
    );
}

export default Comments;