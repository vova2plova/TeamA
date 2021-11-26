import React, {Component} from 'react';
import {NavLink} from "reactstrap";
import {Link} from 'react-router-dom';


export class SignIn extends Component {
    static displayName = SignIn.name;

    constructor(props) {
        super(props);
        this.state = {User: null, auth : false};
        this.LogIn = this.LogIn.bind(this);
    }
    
    async LogIn(){
        let login = document.getElementsByTagName("input")[0]
        let password = document.getElementsByTagName("input")[1]
        let user = {
            NickName : login.value,
            Password : password.value
        }
        const response = await fetch("api/User/login", {
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
    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active">Вход</h2>
                    <h2>
                        <NavLink tag={Link} className="inactive underlineHover" to="/signUp">регистрация</NavLink>
                    </h2>
                    <div className="fadeIn first">
                        <img src="https://cdn131.picsart.com/311079241107211.png" id="icon" alt="Typical User"/>
                    </div>
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
                        <input type="password" id="inputPassword" className="fadeIn third" name="login"
                               placeholder="password"/>
                        <input type="button" className="fadeIn fourth SubMit" value="Войти" onClick={this.LogIn}/>
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Забыли пароль?</a>
                    </div>
                </div>
            </div>
            
        )
    }
}

