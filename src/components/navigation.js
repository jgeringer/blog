import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Joe Geringer</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/resume/">Resume</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/testing" data-cy="cy-nav-testing">Testing</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/kitchen">Kitchen</Link>
      </li>
    </ul>
    <ol>
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
  </nav>
)
