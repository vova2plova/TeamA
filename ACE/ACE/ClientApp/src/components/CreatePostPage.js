import React, { Component } from 'react';
import '../Styles/createPost.css';
import * as ReactDOMServer from "react-dom/server";
export class CreatePostPage extends Component {
    static displayName = CreatePostPage.name;

    constructor(props) {
        super(props);
        this.state = { 
            Post: [],
            PreviewImage: "",
            PreviewText: "",
            PreviewHeader: "",
            Text : "",
            User : ""
        };
        
        this.AddPost = this.AddPost.bind(this);
    }
    
    AddText = () =>{
        let contentEditable = document.querySelector('[contenteditable]');
        if (contentEditable.textContent !== "") {
            this.addToPost(<p>{contentEditable.textContent}</p>)
            if (this.state.PreviewText === "")
                this.setState({PreviewText : ReactDOMServer.renderToString(<p>{contentEditable.textContent}</p>)})
            contentEditable.textContent = ""
        } else
            alert("Ошибка добавления")
    }
    
    AddImage = () =>{
        let contentEditable = document.querySelector('[contenteditable]');
        if (contentEditable.textContent !== "") {
            this.addToPost(<img className="imgHolder" src = {contentEditable.textContent} alt = ""/>)
            if (this.state.PreviewImage === "")
                this.setState({PreviewImage : ReactDOMServer.renderToString(<img className="imgHolder" src = {contentEditable.textContent} alt = ""/>)})
            contentEditable.textContent = ""
        } else
            alert("Ошибка добавления")
    }
    AddHeader = () =>{
        let contentEditable = document.querySelector('[contenteditable]');
        if (contentEditable.textContent !== "") {
            this.addToPost(<h1>{contentEditable.textContent}</h1>)
            if (this.state.PreviewHeader === "")
                this.setState({PreviewHeader : ReactDOMServer.renderToString(<h1>{contentEditable.textContent}</h1>)})
            contentEditable.textContent = ""
        } else
            alert("Ошибка добавления")
}
    
    addToPost(text){
        this.state.Post.push(text);
        this.setState(this.state);
    }
    
    async AddPost(){
        let _user = JSON.parse(localStorage.getItem("User")).nickName
        await this.setState({User : _user})
        this.setState( {Text : ReactDOMServer.renderToString(this.state.Post)})
        const response = await fetch("api/Post/CreatePost", {
            method: "POST",
            headers: {"Accept": "application/json", "Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        })
        if (response.ok === true) {
            let data = response.json();
            console.log(data);
        } else {
            const errorData = await response.json();
            console.log("errors", errorData);
            alert("Ошибка создания поста")
        }
    }

    render() {
        return (
            <div>
                <div id = "Example">Тут вы можете написать ваш пост</div>
                <div id = "CreatePostPlace">
                    <input type="button" className="" value="Добавить заголовок" onClick={this.AddHeader}/>
                    <input type="button" className="" value="Добавить картинку" onClick={this.AddImage}/>
                    <input type="button" className="" value="Добавить текст" onClick={this.AddText}/>
                    <div className="input" contentEditable="true">
                    </div>
                </div>
                <div id = "Example">А тут посмотреть как будет выглядеть ваш пост</div>
                <div id = "Example">
                    {this.state.Post}
                </div>
                <input type="button" value="Создать пост" onClick={this.AddPost}/>
            </div>
        );
    }
}
