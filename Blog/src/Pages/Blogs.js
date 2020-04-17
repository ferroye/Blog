import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogsByUserId } from "../Component/Action";
import { TopMenu } from "../Component/Top/topMenu";
import VerticalMenu from "../Component/Mid/verticalMenu";
import CardView from "../Component/Mid/CardView";

const Blogs = () => {
    const currentState = useSelector((state) => state);
    const [blogs, setBlogs] = useState(null);

    const dispatcher = useDispatch();
    // console.log(currentState);
    // const fetchResources = () => async () => {
    // }

    useEffect(() => {
        dispatcher(getBlogsByUserId(2));
    }, []);

    const renderBlogs = () => {
        if (currentState.blogs) {
            const blogs = currentState.blogs.map((blog) => (
                <div className="col col-sm">
                    <CardView title={blog.title} content={blog.content} />
                </div>
            ));
            return <>{blogs}</>;
        }
        return null;
    };

    return (
        <div>
            <TopMenu />
            <div className="container">
                <VerticalMenu />
                Blogs upcomming feature
                <div className="row">
                    {renderBlogs()}
                </div>
            </div>
            <center>
                <button className="center">
                    Load more ...
                </button>
            </center>
        </div>
    );
};
export default Blogs;
