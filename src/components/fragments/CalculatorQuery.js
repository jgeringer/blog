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
    footer {
      json
    }
  }
`
