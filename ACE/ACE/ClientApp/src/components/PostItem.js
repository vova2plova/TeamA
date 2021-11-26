import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class PostItem extends Component {
    static displayName = PostItem.name;
    
    // let User = LoadUser();

    constructor(props) {
        super(props);
        this.state = {
            loading : true
        }
    }

    convertToDom(string) {
        return ({__html : string})
    }
    
    
    savePostId(){
        localStorage.setItem("PostId", this.props.postInfo.id)
        localStorage.setItem("UserId", this.props.user.id)
    }
    

    // async function LoadUser() {
    //     const response = await fetch("api/User/" + props.postInfo.id.toString())
    //     const data = await response.json();
    //     User = data;
    //     console.log(User);
    //     return User;
    // }
    render() {
        if (this.props.user === undefined)
            return (<div></div>)
        else
            return (
                <div id="post">
                    <span>
                        <img className="iconHolder" src={this.props.user.avatar} alt=""/>
                        {this.props.user.nickName}
                        <span className="date">{this.props.postInfo.date}</span>
                    </span>
                    <div dangerouslySetInnerHTML={this.convertToDom(this.props.postInfo.text)}/>
                    <Link className="Continue" to="" onClick={this.savePostId}>Читать далее</Link>
                </div>
            );
    }
}

export default PostItem;