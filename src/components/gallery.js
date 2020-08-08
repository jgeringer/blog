import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

class Gallery extends React.Component {
  render(props) {
      const galleryContent = get(this.props, 'data.contentfulGallery')
      console.log(this.props)
      // console.log(galleryContent)
      return (
          <div>
              <h1>Hi! This is a gallery component. prop: {this.props.content.title}</h1>
              <p>
                What do I like to do? Lots of course but definitely enjoy building
                websites.
              </p>
          </div>
      )
  }
}

export default Gallery