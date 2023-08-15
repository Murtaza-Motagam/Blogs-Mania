
import { useState } from 'react';
import BlogContext from './BlogContext';

const BlogState = (props) => {

    const [data, setData] = useState([]);
    const [blogs, setBlogs] = useState([]);

    const host = "http://localhost:5000";

    const fetchUserData = async () => {
        const response = await fetch(`${host}/api/auth/getprofiledata`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setData(json)
    }


    // Add a Blog of user

    const addBlog = async (title, category, bloguser, description) => {
        // TODO Api call
        const response = await fetch(`${host}/api/blogs/addblog`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, category, bloguser, description })
        });

        const blog = await response.json()
        setBlogs(blogs.concat(blog))
    }

    // Fetch only user blogs

    const fetchUserBlogs = async () => {
        const response = await fetch(`${host}/api/blogs/fetchuserblogs`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setBlogs(json)
    }

    // Fetch all blogs of user

    const fetchAllBlogs = async () => {
        const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await response.json();
        setBlogs(json)
    }

    // Fetch blogs by category 

    const fetchblogsbycategory = async () => {
      const response = await fetch (`${host}/api/blogs/fetchbycategory/Social`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
      })

      const json = await response.json();
      console.log(json)
    }
    

    return (
        <BlogContext.Provider value={{ data, fetchUserData, blogs, fetchUserBlogs, fetchAllBlogs, addBlog, fetchblogsbycategory }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState;
