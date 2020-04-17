import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
                <p>Some thing</p>
            </div>
            <div className="row p-3 mb-2 bg-light text-primary">
                <div className="col-sm-10 text-center">
                    © 2020 Copyright
                </div>
                <div className="col-sm-1 text-center">
                    <a href="https://github.com/ferroye" target="_blank" className="fa fa-github" rel="noopener noreferrer">GitHub</a>

                </div>
                <div className="col-sm-1 text-center">
                    <a href="https://www.linkedin.com/in/ye-wang-457189129/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer">linkedIn</a>
                </div>
            </div>

        </>
    )
}

export default Footer;
