import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as heroStyles from '../components/hero.module.css'
import ContentArea from '../components/contentArea'

export default function BlogPostTemplate({ data: { post } }) {
  const siteTitle = get(post, 'data.site.siteMetadata.title')

  return (
      <div>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <GatsbyImage
            className={heroStyles.heroImage}
            alt={post.title}
            image={post.heroImage.gatsbyImageData}
          />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>

          <p>For each contentType, load them here</p>

          {post.contentArea !== null && (
            <ContentArea contentTypes={post.contentArea} />
          )}

          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(width: 1180, height: 480)
      }
      contentArea {
        __typename
        ... on Node {
          ...Gallery
          ...Calculator
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
