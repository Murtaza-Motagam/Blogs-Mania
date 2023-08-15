import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/BlogContext'



const MyProfile = () => {

  const context = useContext(BlogContext);
  const { blogs, data, fetchUserBlogs, fetchUserData } = context;

  useEffect(() => {
    fetchUserBlogs();
    fetchUserData();
    //eslint-disable-next-line
  }, [])

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }


  return (
    <div className='font-fam-roboto'>
      <div className="container my-6 font-fam-roboto ">
        {data.map((user) => {
          return (
            <div className="Card mx-auto" key={user.userInfo.username}>
              <img src={require('../images/team-2.jpg')} className='marginTopSet' alt="" />
              <div>
                <h2 className="h2 font-fam-roboto">{capitalize(user.userInfo.username)}</h2>
                <ul className="stats font-fam-roboto">
                  <li>
                    <var>{user.blogLength}</var>
                    <label>Blog Post</label>
                  </li>
                  <li>
                    <var>0</var>
                    <label>Followers</label>
                  </li>
                  <li>
                    <var>0</var>
                    <label>Likes</label>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}

      </div>

      <div className="container mt-3">
        <h1 className="is-size-2 has-text-weight-bold font-fam-poppins border-bottom-set2 ">Your Blogs</h1>
        <div className="row my-6 flex-set paddingSet">
          {blogs.map((b) => {
            return (
              <div className="column is-one-third font-fam-roboto" key={b._id}>
                <div className="card border-r-2 has-background-info-light" style={{ height: "100%" }}>
                  <div className="card-content">
                    <div className="media is-flex is-justify-content-flex-start is-align-items-center">
                      <img src={require('../images/profile-icon.png')} className="" alt="placeholder" width="40px" />
                      <p className=" mx-4 is-size-4 font-fam2 has-text-black has-text-weight-bold">{b.bloguser}</p>
                    </div>
                    <div className="media">
                      <div className="media-content ">
                        <p className="title has-size-6 font-fam2  has-text-black" id="bTitle">{b.title}</p>
                      </div>
                    </div>

                    <div className="content font-fam-roboto is-size-5 overflow-scroll" id="bPost">
                      {b.description}
                    </div>
                    <p className="subtitle mt-2 font-fam6">
                      Category: <span className="font-fam6" id="bCategory">{b.category}</span>
                    </p>
                    <div className="is-flex p-0 is-justify-content-space-between">
                      <p className=" font-size-sm has-text-weight-bold">Posted By : <br /> {b.bloguser}</p>
                      <p className="font-size-sm  font-fam-poppins has-text-weight-bold">Uploaded: <br /><time dateTime="2016-1-1">{b.date.slice(0, 19)}</time></p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>



    </div >
  )
}

export default MyProfile
