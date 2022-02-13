import React from 'react'
import { Link } from 'gatsby'
import * as base from './base.css'
import * as footerStyles from './footer.module.css'
import Navigation from './navigation'
import '../styles/app.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTools } from "@fortawesome/free-solid-svg-icons"
import { faCodepen, faGit, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
      <footer>
        <ol className={footerStyles.wrapper}>
          <li>
            <a href="https://codepen.io/jgeringer" target="_blank">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </li>
          <li>
            <a href="https://github.com/jgeringer" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joe-geringer/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <Link to="/uses/">
              <FontAwesomeIcon icon={faTools} />
            </Link>
          </li>
        </ol>
      </footer>
    </>
  );
}
