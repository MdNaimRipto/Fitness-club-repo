import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Blog's</h2>
            <div className='blog-info'>
                <h3>How does react work's?</h3>
                <p>React is a javascript library. It divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It’s possible to have as many components as necessary without cluttering your code.</p>

                <h3>What is the difference between props and state?</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>

                <h3>Where we can use useEffect without loading data in a website?</h3>
                <p>useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(). componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.</p>
            </div>
        </div>
    );
};

export default Blog;