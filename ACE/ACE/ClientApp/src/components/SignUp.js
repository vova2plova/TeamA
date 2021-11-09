import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {NavLink} from "reactstrap";

export class SignUp extends Component {
    static displayName = SignUp.name;


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
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Имя пользователя" />
                        <input type="text" id="" className="fadeIn second" name="login" placeholder="Электронная почта" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Пароль" />
                        <input type="text" id = "password" className="fadeIn third" name="login" placeholder="Повторите пароль" />
                        <input type="submit" className="fadeIn fourth" value="Зарегистрироваться"/>
                    </form>
                </div>
            </div>
        );
    }
}