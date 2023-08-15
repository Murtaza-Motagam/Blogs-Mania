import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen ">


      <section className="hero font-fam-roboto is-default is-medium">
        <div className="hero-body">
          <div className="container has-text-white has-text-centered">
            <h1 className="title has-text-white marginSet">
              Welcome to Blogs-Mania
            </h1>
            <h2 className="subtitle has-text-white marginSet">
              Enhance your writing abilites and create the Blog world according to yours.
            </h2>
            <Link to={!localStorage.getItem('token') ? '/signup' : '/blogs'} className="animated-button font-fam-roboto">
              Get Started
            </Link>
          </div>
        </div>
      </section>


      <section className="hero is-halfheight is-light my-5 font-fam-roboto">
        <div className="hero-body">
          <div className="row is-flex flex-set is-justify-content-space-around is-align-items-center">
            <div className="column ">

              <p className="title font-fam2 is-size-1 has-text-info font-set2">
                Create & Post Attractive Blogs.
              </p>
              <p className="subtitle my-6 lh-2 font-fam5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti laborum eveniet, inventore labore eaque exercitationem similique suscipit corrupti provident. Illo perspiciatis iste hic, sint incidunt voluptas veritatis sunt ipsa! Aliquid porro provident quos?
              </p>
            </div>
            <div className="column width-full is-two-fifths ml-3 is-text-centered is-flex is-justify-content-end is-align-items-center">
              <div className="tile is-ancestor">
                <div className="tile is-parent ">
                  <article className="tile is-child notification is-link border-r-2">
                    <p className="title has-background-white p-3 has-text-centered border-r-1 is-size-2 font-set font-fam2">i<span className="has-text-danger">Blogs</span> Blog Creator</p>
                    <p className="subtitle mt-4 has-text-white font-fam1">Turn Your Thoughts into Reality.</p>
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est earum nulla illum reprehenderit deserunt dolores laudantium at quibusdam dignissimos, repellat expedita optio unde, eius esse architecto ea pariatur qui sunt aliquid.
                    </div>
                    <div className="buttons">
                      <Link to="/" className="button is-light font-fam2 border-r-3 has-text-weight-bold">Create Blog</Link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="container font-fam-roboto">
        <h1 className="is-size-1 has-text-centered font-fam-babas border-bottom-set color-heads">Pricing Details</h1>
        <div className="row my-6">
          <div className="columns is-three-fifths-mobile is-half-tablet is-three-quarters-desktop is-one-third-widescreen is-one-quarter-fullhd">

            <div className="column">
              <div className="card has-background-link-light">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={require('../images/blog-card-1.jpeg')} alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content has-text-centered">
                  <div className="media">
                    <div className="media-content ">
                      <p className="title has-size-5 font-fam1 has-text-link has-text-weight-bold">Basic Plan</p>
                      <p className="subtitle has-size-5 font-fam1">Month</p>
                      <p className="is-size-3 mt-0 has-text-black font-fam4 has-text-weight-bold">$120/-</p>
                    </div>
                  </div>

                  <div className="content font-fam1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, officiis beatae at illo aliquam culpa voluptatibus impedit id nihil, odio accusamus rerum quo.
                  </div>

                  <div className="buttons ">
                    <button className="button is-link mx-auto font-fam-roboto">Check out</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card has-background-link-light">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={require('../images/blog-card-2.jpeg')} alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content has-text-centered">
                  <div className="media">
                    <div className="media-content ">
                      <p className="title has-size-5 font-fam1 has-text-primary has-text-weight-bold">Intermediate Plan</p>
                      <p className="subtitle has-size-5 font-fam1">Semi-Annual (6 months)</p>
                      <p className="is-size-3 mt-0 has-text-black font-fam4 has-text-weight-bold">$220/-</p>
                    </div>
                  </div>

                  <div className="content font-fam1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, officiis beatae at illo aliquam culpa voluptatibus impedit id nihil, odio accusamus rerum quo.
                  </div>
                  <div className="buttons ">
                    <button className="button is-primary mx-auto font-fam-roboto">Check out</button>
                  </div>
                </div>
              </div>
            </div>


            <div className="column">
              <div className="card has-background-link-light">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={require('../images/blog-card-3.jpeg')} alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content has-text-centered">
                  <div className="media">
                    <div className="media-content ">
                      <p className="title has-size-5 font-fam1 has-text-danger has-text-weight-bold">Premium Plan</p>
                      <p className="subtitle has-size-5 font-fam1">Annual</p>
                      <p className="is-size-3 mt-0 has-text-black font-fam4 has-text-weight-bold">$450/-</p>
                    </div>
                  </div>

                  <div className="content font-fam1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, officiis beatae at illo aliquam culpa voluptatibus impedit id nihil, odio accusamus rerum quo.
                  </div>
                  <div className="buttons ">
                    <button className="button is-danger mx-auto font-fam-roboto">Check out</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="container mt-7">
        <h1 className="is-size-1 has-text-centered font-fam-babas border-bottom-set color-heads">Reach Out Level</h1>
      </div>
      <div className="container mx-auto my-6 flex-set2">
        <section className="hero is-default mt-5 border-r-4">
          <div className="hero-body react-out-set">
            <nav className="level">
              <div className="level-item has-text-centered mb-5 marginBottomSet ">
                <div>
                  <p className="heading has-text-white is-size-4 font-fam-roboto">Total Blogs</p>
                  <p className="title has-text-white has-text-weight-bold ">3,456+</p>
                </div>
              </div>
              <div className="level-item has-text-centered mb-5 marginBottomSet">
                <div>
                  <p className="heading has-text-white is-size-4 font-fam-roboto">Total Members</p>
                  <p className="title has-text-white has-text-weight-bold">12k+</p>
                </div>
              </div>
              <div className="level-item has-text-centered mb-5 marginBottomSet ">
                <div>
                  <p className="heading has-text-white is-size-4 font-fam-roboto">Since</p>
                  <p className="title has-text-white has-text-weight-bold">2015</p>
                </div>
              </div>
              <div className="level-item has-text-centered mb-5">
                <div>
                  <p className="heading has-text-white is-size-4 font-fam-roboto">Likes</p>
                  <p className="title has-text-white has-text-weight-bold">12k</p>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </div>


    </div>

  )
}

export default Home
