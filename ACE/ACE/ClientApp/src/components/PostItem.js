import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class PostItem extends Component {
    static displayName = PostItem.name;
    
    render() {
        return(
            <div id = "post">
                <span>
                    <img className="iconHolder" src = "https://catherineasquithgallery.com/uploads/posts/2021-03/1614560341_16-p-ikonki-na-belom-fone-18.png" alt=""/>
                    vova2plova
                    <span> сегодня в 17:33</span>
                </span>
                <h1 className="tittle">Создание и использование динамических библиотек в Rust</h1>
                <div className="description">
                    <img className="imgHolder" src = "https://hsto.org/getpro/habr/upload_files/8e8/da9/499/8e8da94991532ebd9a665ae52f71cd6c.jpg" alt=""/>
                    Динамические библиотеки подключаются к программе во время выполнения. Это позволяет обновлять их реализацию и компилировать независимо от использующих программ. Такой подход открывает ряд дополнительных возможностей при разработке ПО. Например, написание разных модулей приложения на разных языках. Или создание системы динамически подключаемых плагинов. В данной статье мы рассмотрим, как создавать и загружать динамические библиотеки в Rust.
                    <Link className="Continue" to = "./PostPage">Читать далее</Link>
                </div>
            </div>
        );
    }
}

export default PostItem;