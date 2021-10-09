﻿import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class LogInForm extends Component {
    static displayName = LogInForm.name;


    render () {
        return (
        <div className="wrapper fadeInDown">
        <div id="formContent">

            <h2 className="active"> Sign In </h2>
            <h2 className="inactive underlineHover">Sign Up </h2>

            <div className="fadeIn first">
                    <img src="https://cdn131.picsart.com/311079241107211.png" id="icon" alt="Typical User"/>
            </div>

            <form>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>

            <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
            </div>

        </div>
        </div>
        );
    }
}