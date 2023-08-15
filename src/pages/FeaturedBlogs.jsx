import React, { useState } from 'react'
import CategoryNav from '../components/CategoryNav';
import BlogItem from '../components/BlogItem';


const FeaturedBlogs = (props) => {

  const [data, setData] = useState([]);
  const host = "http://localhost:5000";

  // Fetch blogs by category 

  const fetchblogsbycategory = async () => {
    const response = await fetch(`${host}/api/blogs/fetchbycategory/${props.category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })

    const json = await response.json();
    setData(json.blogs)
  }

  fetchblogsbycategory();
  


  return (
    <>
      <CategoryNav />
      <div className="container mt-6  column is-two-fifths mx-auto mb-6 has-background-link border-r-4 paddingSet">
        <h1 className="is-size-3 font-set2 font-fam-roboto has-text-weight-bold has-text-centered has-text-white m-auto">Explore By Category</h1>
      </div>

      <div className="container mt-3">
        <div className="row flex-set3 my-6">
          {data.map((b) => {
            return (
              <BlogItem b={b} key={b._id} />
            )
          })}
        </div>
      </div>

    </>
  )
}

export default FeaturedBlogs
