import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'
import classNames from 'classnames';

export default () => (
  <nav role="navigation" className={classNames("wrapper", styles.navigationContainer)}>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Joe Geringer</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Journal</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/resume/">Resume</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact">Contact</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/kitchen">Kitchen</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/pizzas">Chicago Pizzas</Link>
      </li>
    </ul>
  </nav>
)
