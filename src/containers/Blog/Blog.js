import React, { Component } from 'react';
// import axios from 'axios';

import { Route } from 'react-router-dom'
import './Blog.css'
import Posts from './Posts/Posts'

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/h2" render={() => <h1>Home2</h1>} />
                <Posts/>
            </div>
        );
    }
}

export default Blog;