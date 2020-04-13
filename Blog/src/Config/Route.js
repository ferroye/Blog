
import About from '../Pages/About';
import Home from '../Pages/Home'
import News from '../Pages/Blogs'
import NewSubscriber from '../Pages/NewSubscriber'
import App from '../Component/App'
import React from 'react';


export const RouteConfig = [
    {
        path: '/',//path
        component: App // component
    },
    {
        path: '/home',//path
        name: 'Home',
        component: Home // component
    },
    {
        path: '/me',//path
        name: 'Me',
        component: About // component
    },
    {
        path: '/blogs',//path
        name: 'Blogs',
        component: News // component
    },
    {
        path: '/newSubscriber',//path
        name: 'NewSubscriber',
        component: NewSubscriber // component
    }
]
