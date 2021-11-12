import React, { Component } from 'react';
import '../Styles/createPost.css';
export class CreatePostPage extends Component {
    static displayName = CreatePostPage.name;

    constructor(props) {
        super(props);
        this.state = { Post: []};
    }
    
    AddText = () =>{
        let contentEditable = document.querySelector('[contenteditable]');
        if (contentEditable.textContent !== "")
        {
            this.addToPost(<p>{contentEditable.textContent}</p>)
            contentEditable.textContent = ""
        }
        else
            alert("Ошибка добавления")
    }
    
    AddImage = () =>{
        let contentEditable = document.querySelector('[contenteditable]');
        if (contentEditable.textContent !== "")
        {
            this.addToPost(<img className="imgHolder" src = {contentEditable.textContent} alt = ""/>)
            contentEditable.textContent = ""
        }
        else
            alert("Ошибка добавления")
    }
    AddHeader = () =>{
        let contentEditable = document.querySelector('[contenteditable]');
        if (contentEditable.textContent !== "")
        {
            this.addToPost(<h1>{contentEditable.textContent}</h1>)
            contentEditable.textContent = ""
        }
        else
            alert("Ошибка добавления")
}
    
    addToPost(text){
        this.state.Post.push(text);
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <div id = "Example">Тут вы можете написать ваш пост</div>
                <div id = "CreatePostPlace">
                    <input type="button" value="Добавить заголовок" onClick={this.AddHeader}/>
                    <input type="button" value="Добавить картинку" onClick={this.AddImage}/>
                    <input type="button" value="Добавить текст" onClick={this.AddText}/>
                    <div className="input" contentEditable="true">
                        
                    </div>
                </div>
                <div id = "Example">А тут посмотреть как будет выглядеть ваш пост</div>
                <div id = "Example">
                    {this.state.Post}
                </div>
            </div>
        );
    }
}
