import React from 'react'
import Layout from '../../components/layout'
import CalculatorStatic from '../../components/CalculatorStatic'

class Testing extends React.Component {
  render() {
    const calculatorData = {
      initValue: 500,
      minValue: 100,
      maxValue: 2000,
      purchasePrices: [
        {
          value: 100,
          terms: [
            {
              payments: 3,
              totalInterest: 2.5,
              monthlyPayment: 34,
              totalCost: 102.5,
            },
            {
              payments: 6,
              totalInterest: 5.0,
              monthlyPayment: 18,
              totalCost: 108.24,
            },
            {
              payments: 12,
              totalInterest: 60.15,
              monthlyPayment: 9.85,
              totalCost: 116.36,
            },
          ],
        },
        {
          value: 500,
          terms: [
            {
              payments: 3,
              totalInterest: 12.52,
              monthlyPayment: 170.84,
              totalCost: 512.52,
            },
            {
              payments: 6,
              totalInterest: 22.33,
              monthlyPayment: 87.04,
              totalCost: 522.23,
            },
            {
              payments: 12,
              totalInterest: 41.55,
              monthlyPayment: 45.13,
              totalCost: 541.55,
            },
          ],
        },
        {
          value: 1000,
          terms: [
            {
              payments: 3,
              totalInterest: 13.52,
              monthlyPayment: 175.84,
              totalCost: 582.52,
            },
            {
              payments: 6,
              totalInterest: 23.33,
              monthlyPayment: 88.04,
              totalCost: 529.23,
            },
            {
              payments: 12,
              totalInterest: 42.55,
              monthlyPayment: 46.13,
              totalCost: 542.67,
            },
          ],
        },
        {
          value: 2000,
          terms: [
            {
              payments: 3,
              totalInterest: 17.63,
              monthlyPayment: 188.74,
              totalCost: 601.52,
            },
            {
              payments: 6,
              totalInterest: 29.42,
              monthlyPayment: 94.01,
              totalCost: 546.34,
            },
            {
              payments: 12,
              totalInterest: 49.65,
              monthlyPayment: 51.14,
              totalCost: 562.68,
            },
          ],
        },
      ],
    }

    return (
      <Layout location={this.props.location}>
        <div>
          <p>Testing Static...</p>
          {/* <CalculatorStatic data={calculatorData} /> */}
        </div>
      </Layout>
    )
  }
}

export default Testing
