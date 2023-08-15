import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Alert from './components/Alert';
import Blogs from './pages/Blogs'
import FeaturedBlogs from './pages/FeaturedBlogs'
import Explore from './pages/Explore'
import MyProfile from './pages/MyProfile'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Services from './pages/Services';


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (mode, type, message) => {
    setAlert({
      mode: mode,
      type: type,
      msg: message
    });

    setTimeout((showAlert) => {
      setAlert(null);
    }, 1500);
  };


  return (
    <>
      <Router>
        <Navbar />
        <div className="container-is-full-width is-flex is-justify-content-flex-end">
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route index element={<Home />}></Route>

          {/*  NavLinks Are Here */}

          <Route exact path="/blogs" element={<Blogs showAlert={showAlert} />}></Route>
          <Route exact path="/explore" element={<Explore />}></Route>

          {/*  NavLinks Ends Here */}

          <Route exact path="/general" element={<FeaturedBlogs category="general" />}></Route>
          <Route exact path="/social" element={<FeaturedBlogs category="social" />}></Route>
          <Route exact path="/entertainment" element={<FeaturedBlogs category="entertainment" />}></Route>
          <Route exact path="/political" element={<FeaturedBlogs category="political" />}></Route>
          <Route exact path="/cultural" element={<FeaturedBlogs category="cultural" />}></Route>
          <Route exact path="/education" element={<FeaturedBlogs category="education" />}></Route>
          <Route exact path="/space" element={<FeaturedBlogs category="space" />}></Route>
          <Route exact path="/technology" element={<FeaturedBlogs category="technology" />}></Route>
          <Route exact path="/food" element={<FeaturedBlogs category="food" />}></Route>
          <Route exact path="/science" element={<FeaturedBlogs category="science" />}></Route>

          {/*  NavLinks Are Here */}

          <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
          <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
          <Route exact path="/myprofile" element={<MyProfile />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/services" element={<Services />}></Route>

          {/*  NavLinks Ends Here */}

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
