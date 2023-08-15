import React from 'react'

const BlogItem = (props) => {

  const {b} = props;


  return (
    <div className="column width-full is-one-third font-fam-roboto" key={b._id}>
      <div className="card border-r-2 has-background-info-light" style={{height: "100%"}}>
        <div className="card-content">
          <div className="media is-flex is-justify-content-flex-start is-align-items-center">
            <img src={require('../images/profile-icon.png')} className="" alt="placeholder" width="40px"/>
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
            <p className=" font-size-sm has-text-weight-bold">Posted By : <br/> {b.bloguser}</p>
            <p className="font-size-sm  font-fam-poppins has-text-weight-bold">Uploaded: <br/><time dateTime="2016-1-1">{b.date.slice(0, 19)}</time></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
