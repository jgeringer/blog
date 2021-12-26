import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'
import * as globalStyles from '@styles/global.module.css'

export default () => (
  <nav role="navigation" className={globalStyles.container}>
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
        <Link to="/contact">Contact</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/3d/two" data-cy="cy-nav-testing">3D: Basic</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/3d/three">3D: GLTF</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/kitchen">Kitchen</Link>
      </li>
    </ul>
  </nav>
)
