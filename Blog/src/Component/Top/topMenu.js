import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import { RouteConfig } from '../../Config/Route'
import { Link, useLocation } from "react-router-dom";


export const TopMenu = (props) => {

    const [menuList, setmenuList] = useState('')
    const { pathname } = useLocation();


    const renderLinks = (item) => {
        if (!item.name) {
            return null;
        }
        let className = "nav-link"
        if (item.path === pathname) {
            className = className + " active";
        }
        return (<Nav.Item key={item.name + item.path}>
            <Link to={item.path} className={className}>{item.name}</Link>
        </Nav.Item >)
    }

    const renderMenuLink = () => {
        setmenuList(RouteConfig.map(item => (
            renderLinks(item)
        )))

    }
    useEffect(() => {
        renderMenuLink();
    }, [pathname])


    return (
        <div>
            <>
                <Nav className="justify-content-end" variant="tabs" activeKey={pathname}>
                    {menuList}
                </Nav>
            </>
        </div>
    )
}
