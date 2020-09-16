// import React from "react"
import { graphql } from 'gatsby'

export const GalleryQuery = graphql`
  fragment Gallery on ContentfulGallery {
    id
    title
    sys {
      contentType {
        sys {
          id
        }
      }
    }
    galleryItems {
      title
      description
    }
  }
`
