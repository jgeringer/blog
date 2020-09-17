// import React from "react"
import { graphql } from 'gatsby'

export const CalculatorQuery = graphql`
  fragment Calculator on ContentfulCalculator {
    id
    headline
    subheadline
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    image {
      title
      fluid(maxWidth: 980) {
        ...GatsbyContentfulFluid
      }
    }
    footer {
      json
    }
  }
`
