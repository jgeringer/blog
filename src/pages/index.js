import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

import * as styles from './index.module.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
        <div>
          <Helmet title={siteTitle} />
          <div className='wrapper'>
            <div className={styles.mainContent}>
              <Hero data={author.node} />
              <div className="wrapper">
                <h2 className="section-headline">Recent articles</h2>
                <ul className="article-list">
                  {posts.map(({ node }) => {
                    return (
                      <li key={node.slug}>
                        <ArticlePreview article={node} />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 1) {
      edges {
        node {
          title
          slug
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          title
        }
      }
    }
  }
`
