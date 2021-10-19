import React, {Component, useState} from 'react';
import PostItem from "./PostItem";
import '../Styles/dropDown.css'
import {Button} from "reactstrap";

export class Home extends Component {
  static displayName = Home.name;


    dropDown(){
      if (document.getElementById('show').style.display === 'none') {
          document.getElementById('show').style.display = 'block'
      }else{
          document.getElementById('show').style.display = 'none'
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
          <dropDown>
              
          </dropDown>
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
