import React, {Component} from 'react';
import PostItem from "./PostItem";

import '../Styles/dropDown.css'

export class Home extends Component {
    static displayName = Home.name;


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
                    <h1> Все потоки</h1>
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
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </div>
        );
    }
}
