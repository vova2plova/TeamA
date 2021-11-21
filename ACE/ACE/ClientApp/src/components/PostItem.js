import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
    function convertToDom(string) {
        return ({__html : string})
    }
    
    return(
        <div id = "post">
            <span>
                <img className="iconHolder" src = "https://catherineasquithgallery.com/uploads/posts/2021-03/1614560341_16-p-ikonki-na-belom-fone-18.png" alt=""/>
                {props.postInfo.user}
                <span className="date">{props.postInfo.date}</span>
            </span>
            <div dangerouslySetInnerHTML={convertToDom(props.postInfo.text)} />
            <Link className="Continue" to = "./PostPage">Читать далее</Link>
        </div>
    );
}

export default PostItem;