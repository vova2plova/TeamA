import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {NavLink} from "reactstrap";

export class SignUp extends Component {
    static displayName = SignUp.name;

    constructor(props) {
        super(props);
        this.state = {User: null};
        this.Register = this.Register.bind(this);
    }
    
    async Register(){
        let login = document.getElementsByTagName("input")[0]
        let password = document.getElementsByTagName("input")[1]
        let avatar = document.getElementsByTagName("input")[2]
        let user = {
            NickName : login.value,
            Password : password.value,
            Avatar : avatar.value
        }
        const response = await fetch("api/User/register", {
            method: "POST",
            headers: {"Accept": "application/json", "Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        if (response.ok === true) {
            const data = await response.json()
            this.setState( {User: data, auth : true})
            localStorage.setItem("User", JSON.stringify(data));
            window.location.assign('https://localhost:5001/');
        } else {
            const errorData = await response.json();
            console.log("errors", errorData);
            alert("Неверный логин или пароль")
        }
    }

    render () {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2>
                        <NavLink tag={Link} className="inactive underlineHover" to="/signIn">вход</NavLink> 
                    </h2>
                    <h2 className="active">регистрация</h2>
                    <div className="fadeIn first">
                        <img src="https://cdn131.picsart.com/311079241107211.png" id="icon" alt="Typical User"/>
                    </div>
                    <form>
                        <input type="text" id="login" className="fadeIn first" name="login" placeholder="Имя пользователя" />
                        <input type="text" id="password" className="fadeIn second" name="login" placeholder="Пароль" />
                        <input type="text" id="login" className="fadeIn third"   name="login" placeholder="Ссылка на изображение" />
                        <input type="button" className="fadeIn fourth SubMit" value="Зарегистрироваться" onClick={this.Register}/>
                    </form>
                </div>
            </div>
        );
    }
}