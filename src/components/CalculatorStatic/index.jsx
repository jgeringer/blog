import React from 'react'
import PropTypes from 'prop-types'
import RichText from '../RichText'

import calculatorDataJSON from './calculatorSlider.json'

class CalculatorStatic extends React.Component {
  static propTypes = {
    rangeVal: PropTypes.number,
  }

  // fetch static json
  calculatorData = calculatorDataJSON

  constructor(props) {
    super(props)
    this.state = {
      value: this.calculatorData.initValue,
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }


  render() {
    return (
      <>
        <div>Calculator: Static</div>

        <h3>{this.props.content.headline}</h3>
        <p>{this.props.content.subheadline}</p>

        <div>
          <input
            type="range"
            name="number1"
            defaultValue={this.state.value}
            list="sizes"
            min={this.calculatorData.minValue}
            max={this.calculatorData.maxValue}
            onMouseUp={this.handleChange}
          />
          <datalist id="sizes">
            {this.calculatorData.purchasePrices.map((item, index) => {
              return (
                <option key={index}>{item.value}</option>
              )
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

export default CalculatorStatic
