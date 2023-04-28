import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={article.slugPrefix}><GatsbyImage alt="" image={article.heroImage?.gatsbyImageData} />
      <h3 className={styles.previewTitle}>
        {article.title}
      </h3>
    </Link>
    <small>{article.publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description?.childMarkdownRemark?.html,
      }}
    />
    {article.tags && (
      <div className={styles.tagWrapper}>
        {article.tags.map(tag => (
          <div className={styles.tag} key={tag}>
            {tag}
          </div>
        ))}
      </div>
    )}
  </div>
)
