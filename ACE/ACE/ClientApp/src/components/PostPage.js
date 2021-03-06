import React, {Component} from 'react';
import Comments from "./Comments";
import InputComments from "../UI/InputComments";
export class PostPage extends Component {
    static displayName = PostPage.name;
    
    constructor(props) {
        super(props);
        this.state = {
            post : 
                [
                    { nickname : "wicheril", comment : "Уф у чуваша трусы большие", date : Date().toString(), img : null }, 
                    { nickname : "libermgm", comment : "Согласен", date : Date().toString(), img : null }
                ]
        }
    }
    
    componentDidMount() {
        // loadPage();
    }
    
    async loadPage() {
        const response = await fetch("api/Post/GetPost")
        const data = await response.json();
        
    }
    

    postComment = () =>{
        let contentEditable = document.querySelector('[contenteditable]');
        if (contentEditable.textContent !== "") {
            const newComment = {
                nickname: "standart",
                comment: contentEditable.textContent,
                date: Date().toString(),
                img: null
            }
            contentEditable.textContent = ""
            this.state.post.push(newComment)
            this.setState(this.state);
        }else{
            alert("Нет текста")
        }
    }
        
    render() {
        return (
            <div>
                <div>
                    <div>
                        <div id = "authorInfo">
                            <div className = "infoPlace">
                                <img className="postIconHolder" src = "https://catherineasquithgallery.com/uploads/posts/2021-03/1614560341_16-p-ikonki-na-belom-fone-18.png" alt = "UserIcon"/>
                                <div id = "authorRate">123</div>
                                <div id = "postRate">12</div>
                                <a className="author" href="#">vova2plova</a>
                            </div>
                            <div className = "subButtonPlace">
                                <button type = "button" className="subButton">Понравилось</button>
                            </div>
                        </div>
                        <div id = "postContent">
                            <h3>Динамические библиотеки</h3>
                            Для предоставления доступа к логике и данным программного кода, из которого скомпилирована библиотека, она экспортирует сущности, которые другие программы могут импортировать и использовать. Для того чтобы корректно пользоваться импортированной сущностью, нужно корректно интерпретировать её бинарное представление после импорта. Для этого динамические библиотеки, обычно, поставляются с описанием своего бинарного интерфейса (ABI). Чаще всего, это описание представляется в виде программного кода, описывающего сигнатуры экспортируемых функций, соглашение о вызовах и используемые в интерфейсе типы данных.
                            Возникает вопрос: как использовать например, классы из С++ в программе на другом языке, у которого классы (или аналогичные им сущности) представляются в бинарном виде совершенно не так, как в С++? Во избежание подобных проблем, при создании динамической библиотеки, которая должна быть доступна другим языкам, принято использовать стандартный С ABI. Иными словами, динамическая библиотека должна экспортировать только те сущности, которые присутствуют в языке С. Большинство языков, поддерживающих работу с динамическими библиотеками поддерживают и примитивы из С. И Rust входит в их число.
                            Создание динамической библиотеки
                            Для создания динамической библиотеки c C ABI нужно, для начала, указать компилятору, что мы хотим в качестве выходного продукта иметь именно её. Для этого в файл Cargo.toml добавим следующее:
                        </div>
                        <div className="inputCommentPlace">
                            <div>Написать комментарий</div>
                            <InputComments/>
                            <button className="subButton" onClick={this.postComment}>Отправить</button>
                        </div>
                        <div>
                            {this.state.post.map((post) => 
                                <Comments post={post} key={Math.random(1,10000)}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
