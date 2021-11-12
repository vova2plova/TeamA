import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Styles/navMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;
    
    constructor (props) {
        super(props);

        this.LogOut = this.LogOut.bind(this);
        this.isAuth = this.isAuth.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            nick : null,
            loading : true,
            auth : false,
            collapsed: true
        };
    }

    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    
    componentDidMount() {
        this.isAuth()
    }

    async isAuth(){
        const response = await fetch('api/User');
        if (response.ok === true) {
            const data = await response.json();
            this.setState({nick: data, auth: true, loading: false});
        }
    }

    LogOut(){   
        this.setState({auth: false});
    }


    render () {
        if (this.state.auth) {
            return(
                <header>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                        <Container>
                            <NavbarBrand tag={Link} to="/">ACE</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/">Здравствуйте, {this.state.nick.nickName}</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/CreatePostPage">Написать пост</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/" onClick={this.LogOut}>Выход</NavLink>
                                    </NavItem>
                                </ul>
                            </Collapse>
                        </Container>
                    </Navbar>
                </header>
            );
        }
        else {
            return(
                <header>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                        <Container>
                            <NavbarBrand tag={Link} to="/">ACE</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/SignIn">Вход</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/SignUp">Регистрация</NavLink>
                                    </NavItem>
                                </ul>
                            </Collapse>
                        </Container>
                    </Navbar>
                </header>
            );
        }
    }
}
