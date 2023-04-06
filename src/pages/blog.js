import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import * as styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'
import * as typography from '@styles/typography.module.css';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
        <div>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>
            <div className="wrapper">
              <h1>Blog</h1>
              <h2 className={typography.headingH3}>Random thoughts & fun projects.</h2>
            </div>
          </div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slugPrefix}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slugPrefix
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            gatsbyImageData(width: 350, height: 196)
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
