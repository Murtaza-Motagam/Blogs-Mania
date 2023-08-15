import React, { useContext, useState } from 'react'
import BlogContext from '../context/BlogContext'

const Blogs = (props) => {

  const context = useContext(BlogContext);
  const { addBlog } = context;

  const [blog, setBlog] = useState({ title: "", bloguser: "", category: "", description: "" });

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addBlog(blog.title, blog.category, blog.bloguser, blog.description);
    setBlog({ title: "", category: "", bloguser: "", description: "" })
    props.showAlert("success", "Success", " Your Blog Posted Successfully");
  }

  return (
    <div>
      <div className="container mb-5 mt-6 paddingSet">
        <div className="columns is-flex  mt-6 border-r-2 is-secondary  p-4 is-justify-content-space-between is-align-items-center flex-set3">

          {/* column-1  */}
          <div className="column is-half mx-auto width-set-1">
            <p className="title font-fam-roboto is-size-1 font-set2 has-text-white">
              How I Create My Blog ?
            </p>
            <p className="subtitle mt-3 has-text-white font-fam-roboto ">
              Read the given instructions to create your own blog <span className="is-size-3">&rarr;</span>
            </p>
          </div>

          {/* column-2  */}

          <div className="column is-half width-set-2  mr-auto has-text-white">
            <p className="mt-4 font-fam6 font-set is-size-4 is-uppercase has-text-white has-text-weight-bold">
              To create Your Own Blog Follow the Steps:
            </p>

            <p className="font-fam-roboto is-size-5 mt-5">
              step-1: &nbsp;&nbsp; At First Create your own account on iBlog or if you are existed member then get loggedin.
            </p>
            <p className="font-fam-roboto is-size-5 mt-3 mb-3">
              step-2: &nbsp;&nbsp; Click on create blog below the instruction section.
            </p>
            <p className="font-fam-roboto is-size-5 mt-3 mb-3">
              step-3: &nbsp;&nbsp; After clicking on create post you'll see an interface consisting of demanding blog required information inputs.
            </p>
            <p className="font-fam-roboto is-size-5 mt-3 mb-3">
              step-5: &nbsp;&nbsp; Fill the inputs according to you and select out the category of blog and click on submit blog.
            </p>
            <p className="font-fam-roboto is-size-5 mt-3 mb-3">
              step-6: &nbsp;&nbsp; All set you are done your blog is now public in iBlogs.
            </p>
          </div>
        </div>
      </div>


      {/* section - 3 the main one */}

      <div className="container my-6 paddingSet">
        <h1 className="is-size-1 has-text-centered font-fam-babas border-bottom-set2 has-text-link mb-5 ">Blog Container</h1>
      </div>

      <div className="container mb-6 is-widescreen mt-3">
        <div className="row flex-set3">
          <div className="column is-half width-set-1 " >
            <img src={require('../images/content-3.jpg')} className="border-r-1" alt="" />
          </div>


          <div className="column marginSet px-5 py-3 font-fam-roboto is-half has-background-link-light border-r-2" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
            <form className=" has-text-left">
              <div className="field">
                <label className="label font-fam2 is-size-5">Blog Title</label>
                <div className="control">
                  <input className="input" onChange={onChange} type="text" placeholder="Title of Blog" name="title" value={blog.title} required />
                </div>
              </div>

              <div className="field">
                <label className="label font-fam2 is-size-5">Username</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input is-success" type="text" onChange={onChange} value={blog.bloguser} placeholder="Enter your username" name="bloguser" required />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </div>
              </div>


              <div className="field">
                <label className="label font-fam2 is-size-5">Category: </label>
                <div className="control">
                  <div className="select">
                    <select name="category" value={blog.category} onChange={onChange} required>
                      <option>...</option>
                      <option value="general">General</option>
                      <option value="science">Science</option>
                      <option value="science">Science</option>
                      <option value="food">Food & Drinks</option>
                      <option value="political">Political</option>
                      <option value="education">Education</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="social">Social</option>
                      <option value="cultural">Cultural</option>
                      <option value="space">Space</option>
                      <option value="technology">Technology</option>
                      <option value="drama">Drama</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label font-fam2 is-size-5">Blog: </label>
                <div className="control">
                  <textarea className="textarea" onChange={onChange} placeholder="Write your blog here" value={blog.description} name="description" style={{ height: "289px" }}></textarea>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button onClick={handleClick} className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Blogs
