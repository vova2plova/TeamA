import React, {Component} from 'react';
import PostItem from "./PostItem";

import '../Styles/dropDown.css'

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            post : [],
            user : []
        }
    }
    
    componentDidMount() {
        this.LoadPosts()
    }
    
    async LoadPosts(){
        const response = await fetch("api/Post/AboutAll");
        if (response.ok) {
            const data = await response.json();
            this.setState({post : data});
            await this.loadUser()
            // console.log(this.state)
        }
    }
    
    async loadUser(){
        for (var i = 0; i < this.state.post.length; i++) {
            const response = await fetch("api/User/" + this.state.post[i].id.toString())
            const data = await response.json();
            this.state.user.push(data);
            this.setState(this.state);
            // console.log(data);
        }
    }


    dropDown(){ 
        if (document.getElementById('show').style.display === 'block') {
            document.getElementById('show').style.display = 'none'
        }else{
            document.getElementById('show').style.display = 'block'
        }
    }
    
    render () {
        return (
            <div>
                <div id = "formHome">
                    <h1>Все потоки</h1>
                    <form>
                        <h2 className="activeHome">Обо всем</h2>
                        <h2 className="inactiveHome underline">Программирование</h2>
                        <h2 className="inactiveHome underline">Дизайн</h2>
                        <h2 className="inactiveHome underline">Маркетинг</h2>
                    </form>
                </div>
                <div id="formHome">
                    <button className="dropDownBar" onClick= {this.dropDown}>
                        Все подряд
                    </button>
                    <div id = "show">
                        <a href = "#" className="dropDownContent">Лучшие </a>
                        <a href = "#" className="dropDownContent">Новые </a>
                    </div>
                </div>
                {this.state.post.map((post, index) =>
                    <PostItem postInfo={post} user = {this.state.user[index]} key = {Math.random(1,10000)}/>
                )}
            </div>
        );
    }
}
