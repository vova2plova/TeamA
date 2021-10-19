import React, {Component} from 'react';

export class PostItem extends Component {
    static displayName = PostItem.name;
    
render() {
    return(
        <div id = "post">
            <span>
                <img className="iconHolder" src = "https://catherineasquithgallery.com/uploads/posts/2021-03/1614560341_16-p-ikonki-na-belom-fone-18.png" alt = "User Icon"/>
                vova2plova
                <span> сегодя в 17:33</span>
            </span>
            <h1 className="tittle">Разработка B2B-оптового магазина лекарственных средств и правильное встраивание в экосистему заказчика</h1>
            <div className="description">
            <img className="imgHolder" src = "https://hsto.org/getpro/habr/upload_files/d14/f61/d6d/d14f61d6da9a3a04538e36615670b6c2.png" alt = "Photo"/>
                B2B-оптовые магазины — отдельный устоявшийся вид веб-проектов, но очень неоднородный. Каждый такой сайт уникален и требует индивидуального подхода. Эта статья — о разработанной нами B2B-площадке для оптовых заказов лекарственных средств для крупной фармацевтической компании.
            <a href = "#" className="Continue">Читать далее</a>
            </div>
        </div>
    );
}
}

export default PostItem;