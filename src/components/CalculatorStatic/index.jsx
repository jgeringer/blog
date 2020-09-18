import React from 'react'
import PropTypes, { string } from 'prop-types'
import RichText from '../RichText'
import Img from 'gatsby-image'

import calculatorDataJSON from './calculatorSlider.json'

class CalculatorStatic extends React.Component {
  // fetch static json
  calculatorData = calculatorDataJSON

  constructor(props) {
    super(props)
    this.state = {
      value: this.calculatorData.initValue,
      valueSet: this.calculatorData.purchasePrices.map((item) => item.value),
    }
  }

  handleChange = (e) => {
    const elValue = e.target.value
    this.setState({
      value: this.state.valueSet.reduce(function (prev, curr) {
        return Math.abs(curr - elValue) < Math.abs(prev - elValue) ? curr : prev
      }),
    })
  }

  render() {
    const { headline, subheadline } = this.props.content
    const { fluid, title } = this.props.content.image

    return (
      <>
        <Img fluid={fluid} alt={title} />

        <div>Calculator: Static!</div>

        <h3>{headline}</h3>
        <p>{subheadline}</p>

        <div>
          <input
            type="range"
            name="number1"
            defaultValue={this.state.value}
            list="sizes"
            min={this.calculatorData.minValue}
            max={this.calculatorData.maxValue}
            onMouseUp={this.handleChange}
            key={Date.now()}
          />
          <datalist id="sizes">
            {this.calculatorData.purchasePrices.map((item, index) => {
              return <option key={index}>{item.value}</option>
            })}
          </datalist>
        </div>

        <div>
          <p>
            Purchase:
            <span>${this.state.value}</span>
          </p>
        </div>

        <div>
          <div>
            <div>
              {this.calculatorData.purchasePrices.map((item, index) => {
                if (item.value == this.state.value) {
                  return (
                    <div key={index}>
                      {item.terms.map((term, tIndex) => {
                        return (
                          <div key={tIndex}>
                            {term.payments} monthly payments
                            <br />
                            Total interest: ${term.totalInterest}
                            <br />${term.monthlyPayment}
                            <br />
                            Total cost: ${term.totalCost}
                            <br />
                            <br />
                          </div>
                        )
                      })}
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>

        <div>
          <RichText content={this.props.content.footer.json} />
        </div>
      </>
    )
  }
}

CalculatorStatic.propTypes = {
  content: PropTypes.object,
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  fluid: PropTypes.string,
  title: PropTypes.string,
}

CalculatorStatic.defaultProps = {
  content: {},
  headline: '',
  subheadline: '',
  fluid: '',
  title: '',
}

export default CalculatorStatic
