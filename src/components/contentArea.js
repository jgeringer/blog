import React, { Component } from 'react'

import SwitchComponents from './switchComponents'

class ContentArea extends Component {
    render() {
        return this.props.content.map((item, index) => {
            const DynamicComponent = SwitchComponents[item.__typename]
            console.warn(item)
            return (
                <DynamicComponent key={item.contentful_id} content={item} />
            )
        })
    }
}

export default ContentArea

