import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import { GatsbyImage } from 'gatsby-plugin-image'
import RichText from '@components/RichText'
import classNames from 'classnames';

import * as heroStyles from '../components/hero.module.css'
import * as styles from './blog-post.module.css'
import ContentArea from '../components/contentArea'

export default function BlogPostTemplate({ data: { post }}) {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const heroClass = classNames(heroStyles.heroImage, {
    [heroStyles.fullViewportHeight]: post.heroImageHeight === 'Full Viewport Height',
    [heroStyles.fullSize]: post.heroImageHeight === 'Full Size',
  })

  const postTitleClass = classNames('section-headline', styles.postTitle);

  return (
      <div>
        <Helmet title={`Joe Geringer | Frontend Web Developer - ${post.title}`} />
        <div className={heroStyles.hero}>          
          <GatsbyImage
            className={heroClass}
            alt={post.title}
            image={post.heroImage.gatsbyImageData}
          />
        </div>
        <div className="wrapper">
          <article className={styles.article}>
            <h1 className={classNames(styles.article)}>{post.title}</h1>
            <p>
              {post.publishDate}
            </p>
            {/* {post.contentArea !== null && (
              <ContentArea contentTypes={post.contentArea} />
            )} */}
            <RichText body={post.bodyRichText} />
          </article>
        </div>
      </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: contentfulBlogPost(slugPrefix: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(quality: 80)
      }
      full: heroImage {
        gatsbyImageData(quality: 80)
      }
      heroImageHeight
      # contentArea {
      #   __typename
      #   ... on Node {
      #     ...Gallery
      #     ...Calculator
      #   }
      # }
      bodyRichText {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            description
            title
            gatsbyImageData(quality: 85, layout: FULL_WIDTH)
            file {
              contentType
              url
            }
          }
        }
      }
    }
  }
`
