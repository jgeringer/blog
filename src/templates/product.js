// import React from 'react'
// import { graphql } from 'gatsby'
// import { Helmet } from 'react-helmet'
// import get from 'lodash/get'
// import Img from 'gatsby-image'
// import Layout from '../components/layout'
// import heroStyles from '../components/hero.module.css'
// import ContentArea from '../components/contentArea'
// import WYSIWYG from '../components/wysiwyg'

// class ProductTemplate extends React.Component {
//   render() {
//     const product = get(this.props, 'data.contentfulProducts')
//     const siteTitle = get(this.props, 'data.site.siteMetadata.title')
//     const details = get(this, 'props.data.allContentfulResume.edges[0]')

//     return (
//       <Layout location={this.props.location}>
//         <div>
//           <Helmet title={`${product.title} | ${siteTitle}`} />
//           <div className={heroStyles.hero}>
//             <Img
//               className={heroStyles.heroImage}
//               alt={product.title}
//               fluid={product.heroImage.fluid}
//             />
//           </div>
//           <div className="wrapper">
//             <h1 className="section-headline">{product.title}</h1>

//             {/* 
//                 Loop through and build dynamic components based on the items listed in the Blocks reference in Contentful.
//                 EXAMPLE: Will add a slider component, followed by a gallery component.
//                 <ContentArea contentTypes={[{
//                     type:'slider',
//                     data: product.slider
//                 }, {
//                     type: 'gallery',
//                     data: product.gallery
//                 }
//                 ]} />
//             */}
//             <ContentArea contentTypes={product.blocks} />

//             <WYSIWYG data={details.node} />

//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }

// export default ProductTemplate

// export const pageQuery = graphql`
//   query ProductBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulProducts(slug: { eq: $slug }) {
//       title
//       heroImage {
//         fluid(maxWidth: 1440) {
//           ...GatsbyContentfulFluid
//         }
//       }
//       edges {
//         node {
//           id
//           title
//           body {
//             json
//           }
//         }
//       }
//     }
//   }
// `
