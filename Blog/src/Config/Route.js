
import About from '../Pages/About';
import Home from '../Pages/Home'
import News from '../Pages/News'
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
        path: '/about',//path
        name: 'About',
        component: About // component
    },
    {
        path: '/news',//path
        name: 'News',
        component: News // component
    },
    {
        path: '/newSubscriber',//path
        name: 'NewSubscriber',
        component: NewSubscriber // component
    }
]
