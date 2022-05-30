import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/blog/${article.slug}`}><GatsbyImage alt="" image={article.heroImage?.gatsbyImageData} />
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
    {article.tags &&
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
)
