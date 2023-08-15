import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/BlogContext'
import BlogItem from '../components/BlogItem';

const Explore = () => {

    const context = useContext(BlogContext);
    const {blogs, fetchAllBlogs} = context;

    useEffect(() => {
        fetchAllBlogs();
        // eslint-disable-next-line
    }, [])
    
    return (
        <>
            <div className="container mt-6  column is-two-fifths mx-auto mb-6 has-background-link border-r-4">
                <h1 className="is-size-3 font-fam-roboto has-text-weight-bold has-text-centered has-text-white m-auto">Blogs Ground</h1>
            </div>

            <div className="container mt-3">
                <div className="row flex-set3 my-6">
                    {blogs.map((b) => {
                        return (
                            <BlogItem b={b} key={b._id} />
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Explore
