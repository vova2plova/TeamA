import React, {Component} from 'react';

export class PostItem extends Component {
    static displayName = PostItem.name;
    
render() {
    return(
        <div id = "post">
            <span>vova2plova</span>
            <h1 className="tittle">Заголовок</h1>
            <div className="description">
            <img className="imgHolder" src = "https://hsto.org/getpro/habr/upload_files/55b/90f/8f4/55b90f8f4db5298ef69452264b82be55.jpg" alt = "Photo"/>
                Какой-то длинный текст</div>
        </div>
    );
}
}

export default PostItem;