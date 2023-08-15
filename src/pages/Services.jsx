import React from 'react'

const Services = () => {

  return (
    <div>
      <section className="section  font-fam-roboto">
        <div className="container">
          <h1 className="title mb-6 has-text-dark ">Blogs-Mania Features and Services
            <hr style={{
              height: "6px",
              background: "#3b67e2"
            }} />
          </h1>
          <div className="columns is-multiline ">

            <div className="column is-6-tablet is-4-desktop ">
              <div className="card bs-1">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={require('../images/service1.jpg')} className="img-set" alt="" />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="subtitle is-4 has-text-centered has-text-weight-bold">Service Spotlight  Exploring Industries and their Offerings</h2>
                  <p className="has-text-centered"> Delve into various industries and discover the range of services they provide. From technology and healthcare to finance and hospitality, gain insights into the diverse offerings that drive these sectors forward. </p>

                  <div className="buttons mt-6">
                    <div className="mx-auto">
                      <button className="font-fam-roboto button is-danger has-text-weight-bold is-outlined">Explore out</button>
                      <button className="font-fam-roboto button is-link is-outlined">View More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-6-tablet is-4-desktop ">
              <div className="card bs-1">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={require('../images/service2.jpg')} className="img-set" alt="" />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="subtitle is-4 has-text-centered has-text-weight-bold">Expert Advice: Insights into Service-Based Businesses</h2>
                  <p className="has-text-centered"> Gain valuable knowledge and advice from experts in the field of service-based businesses. Learn about industry best practices, effective strategies, and success stories that can inspire and inform your own ventures. </p>

                  <div className="buttons mt-6">
                    <div className="mx-auto">
                      <button className="font-fam-roboto button has-text-weight-bold is-danger is-outlined">Explore out</button>
                      <button className="font-fam-roboto button has-text-weight-bold is-link is-outlined">View More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="column is-6-tablet is-4-desktop ">
              <div className="card bs-1">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={require('../images/service3.jpg')} className="img-set" alt="" />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="subtitle is-4 has-text-centered has-text-weight-bold">Customer Success Stories: How Services Make a Difference</h2>
                  <p className="has-text-centered">Explore real-life stories that showcase the transformative impact of exceptional services. From life-changing experiences to remarkable outcomes, these narratives highlight the power of quality service in improving lives and businesses.</p>

                  <div className="buttons mt-6">
                    <div className="mx-auto">
                      <button className="button has-text-weight-bold font-fam-roboto is-danger is-outlined">Explore out</button>
                      <button className="button has-text-weight-bold font-fam-roboto is-link is-outlined">View More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
