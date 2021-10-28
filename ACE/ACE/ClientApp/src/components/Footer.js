import React, {Component} from 'react';
import '../Styles/footer.css'
export class NavFooter extends Component {
    static displayName = NavFooter.name;

    render() {
        return (
            <footer>
                <div className="footerPlace">
                    <div className="footerText">
                        @Ace 2021
                    </div>
                    <a className="footerText" href="https://github.com/vova2plova/TeamA">
                        <img className="footerImage" src = "https://wodensoft.co.uk/wp-content/uploads/2020/05/Github.png" alt = "github"/>
                        Страница проекта
                    </a>
                </div>
            </footer>
        );
    }
}

export default NavFooter;