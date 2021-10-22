import React, {Component} from 'react';
import '../Styles/comments.css'

export class Comments extends Component {
    static displayName = Comments.name;

    render() {
        return (
            <div>
                <div className="inputCommentPlace">
                    <div>Написать комментарий</div>
                    <div className = "inputComment" contentEditable="true"/>
                    <input className="subButton" placeholder="Отправить"/>
                </div>
                <div className="commentPlace">
                    <img className="iconHolder" src = "https://sun9-29.userapi.com/impg/HwlcZwkZIXLPNAQThaWr5udAo11Mer3wdV6mDw/4D3mUB8mh24.jpg?size=1094x1080&quality=96&sign=bc2774646d827c3c407b7e2b4106b869&type=album" alt = "UserIcon"/>
                    <div className="commentAuthor">
                        <a href = "#" className="commentAuthor">wicheril
                            <p className="datetime">cегодня в 18:15</p>
                        </a>
                    </div>
                    <div className="comment">
                        Уф у чуваша трусы большие
                    </div>
                </div>
                <div className="commentPlace">
                    <img className="iconHolder" src = "https://sun9-16.userapi.com/impf/c851332/v851332642/121e5a/mZ2ob05paak.jpg?size=720x960&quality=96&sign=6acb9c92d534e8511c842069d49565c3&type=album" alt = "UserIcon"/>
                    <div className="commentAuthor">
                        <a href = "#" className="commentAuthor">
                            liberomgm
                            <p className="datetime">cегодня в 18:17</p>
                        </a>
                    </div>
                    <div className="comment">
                        Согласен!
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;