import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { PostPage} from './components/PostPage';
import { CreatePostPage } from "./components/CreatePostPage";
import { Profile} from "./components/Profile";

import './Styles/custom.css'
import './Styles/sign.css'
import './Styles/home.css'
import './Styles/post.css'


export default class App extends Component {
    static displayName = App.name;
    
    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/SignIn' component={SignIn} />
                <Route path='/SignUp' component={SignUp} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/PostPage' component={PostPage} />
                <Route path='/Profile' component={Profile}/>
                <Route path='/CreatePostPage' component={CreatePostPage}/>
            </Layout>
        );
    }
}
