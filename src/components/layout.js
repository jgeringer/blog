import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Navigation from './navigation'
import '../styles/app.css'


export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <footer>
        <ol className="wrapper">
          <li>
            <a href="https://codepen.io/jgeringer" target="_blank">
              Codepen
            </a>
          </li>
          <li>
            <a href="https://github.com/jgeringer" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joe-geringer/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <Link to="/Uses/">Uses</Link>
          </li>
        </ol>
      </footer>
    </>
  );
}
