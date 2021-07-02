import React from 'react'
import Layout from '../../components/layout'
import CalculatorTabs from '../../components/CalculatorTabs'

class Testing extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <p>Testing</p>
          <p>Looking for the testing text here.</p>
        </div>
      </Layout>
    )
  }
}

export default Testing
