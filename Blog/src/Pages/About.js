import React from 'react'
import { TopMenu } from '../Component/Top/topMenu'
import Footer from '../Component/Bottom/footer'

const About = () => {
    return (
        <div>
            <TopMenu />

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>About Me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <h1>__</h1>
                    </div>
                    <div className="col-sm-11">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <p>Hello, I am Ye Wang, I am an ordinary software engineer who is graduated from college in 2018.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default About;
