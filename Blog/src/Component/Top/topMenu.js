import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import { RouteConfig } from '../../Config/Route'

export const TopMenu = (props) => {

    const [menuList, setmenuList] = useState('')
    const renderMenuLink = () => {
        setmenuList(RouteConfig.map(item => (
            <Nav.Item key={item.name + item.path}>
                <Nav.Link href={item.path}>{item.name}</Nav.Link>
            </Nav.Item>)))

    }
    useEffect(() => {
        renderMenuLink();
    }, [])

    return (
        <div>
            <>
                <Nav className="justify-content-end" variant="pills" activeKey={props.active}>
                    {menuList}
                </Nav>
            </>
        </div>
    )
}
