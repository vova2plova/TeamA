import React, { Component } from 'react';


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
          <form>
            <h2 className="activeHome">Обо всем</h2>
            <h2 className="inactiveHome underlineHover">Программирование</h2>
            <h2 className="inactiveHome underlineHover Tittle">Дизайн</h2>
            <h2 className="inactiveHome underlineHover Tittle">Маркетинг</h2>
          </form>
          <div id="formHome">
            <h1 className="text-dark">faf</h1>
          </div>
      </div>
        
    );
  }
}
