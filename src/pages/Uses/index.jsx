import React from 'react'
import Layout from '../../components/layout'
import Counter from '../../components/Counter'

class Uses extends React.Component {
    render() {
        
        return (
            <Layout location={this.props.location}>
                <div>
                    <Counter />
                    <h1>What I Use?</h1>
                    <ol>
                        <li>Hardware
                            <ul>
                                <li>Macbook Pro: 2.5 GHz Quad-Core Intel Core i7</li>
                                <li>Windows: 2.5 GHz Quad-Core Intel Core i7</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </Layout>
        )
    }
}

export default Uses