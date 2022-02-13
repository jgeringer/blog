import React, { Component } from 'react'
import ComponentList from './componentList'

class ContentArea extends Component {
  render() {
    // console.log('Content Area', this.props)
    return this.props.contentTypes.map((item, index) => {
      // console.log(item)
      const DynamicComponent = ComponentList[item.__typename]
      if (DynamicComponent !== undefined) {
        return <DynamicComponent key={index} content={item} />
      }
    })
  }
}

export default ContentArea
