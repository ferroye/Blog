import React, { useEffect } from 'react'
import { TopMenu } from '../Component/Top/topMenu'
import Footer from '../Component/Bottom/footer'
import { useSelector, useDispatch } from 'react-redux'
import { getBlogsByUserId } from '../Component/Action'

const Home = () => {

    const currentState = useSelector(state => state);

    const disp = useDispatch();
    // console.log(currentState);
    // const fetchResources = () => async () => {

    // }



    useEffect(() => {
        disp(getBlogsByUserId(1));
    }, [])
    return (
        <div>
            <TopMenu />
            Its home
            <Footer />
        </div>
    )
}
export default Home;
