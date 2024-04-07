/* eslint-disable no-unused-vars */
import { Modal } from "./Modal";
import { About } from "./About";
import { Signup } from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <div>
      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>
      <header>
        {/* old header */}
        {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */}

        {/* new header  */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Troajan Blog
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    All Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts/new">
                    New Post
                  </Link>
                </li>
                {localStorage.jwt === undefined ? (
                  <>
                    <li className="nav-item">
                      <Link to="signup" className="nav-link">
                        Signup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="login" className="nav-link" href="#">
                        Login
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link to="logout" className="nav-link">
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
