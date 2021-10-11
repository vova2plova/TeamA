import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;


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
              <button className="dropDownBar" >
                  Все подряд
              </button>
              <div>
                  <a id = "show" href = "#" className="dropDownContent">Лучшие </a>
                  <a id = "show" href = "#" className="dropDownContent">Новые </a>
              </div>
          </div>
          
      </div>
        
    );
  }
}
