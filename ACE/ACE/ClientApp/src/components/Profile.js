import React, { Component } from 'react';

export class Profile extends Component {
    static displayName = Profile.name;

    // async AddAvatar(){
    //     const response
    // }
    
    render () {
        return (
            <div>
                <h1>Введите ссылку на изображение</h1>
                <input type = "text"/>
                {/*<input type = "submit" onClick={}/>*/}
            </div>
        );
    }
}
