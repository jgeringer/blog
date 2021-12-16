import React from 'react'
import Interest from 'interestjs'
import PropTypes from 'prop-types'
import * as styles from './style.module.css' 

class Calculator extends React.Component {

  static propTypes = {
    rangeVal: PropTypes.number
  }

  constructor(props) {
    super(props)

    this.state = {
      rVal: this.props.rangeVal,
      rValMin: this.props.rangeValMin,
      rValMax: this.props.rangeValMax,
      percentage: 20
    };
  }
  
  handleChange = (e) => {
    this.setState({
      rVal: e.target.value
    })
  }

  totalInterest = (months) => {
    const interest = Interest((this.state.rVal / months), months, this.state.percentage)
    return (interest.interestSum).toFixed(2)
  }

  totalMonthlyPayment = (months) => {
    const interest = Interest((this.state.rVal / months), months, this.state.percentage)
    return (interest.sum / months).toFixed(2)
  }

  render() {
    const colorCode = (this.state.rVal > 900 ? styles.red : ``)

    return (
      <>
        <div>Calculator</div>

        <div>
          {this.state.rValMin}
          <input 
            type="range"
            step="100"
            min={this.state.rValMin}
            max={this.state.rValMax} 
            onInput={this.handleChange}
            defaultValue={this.state.rVal}
          />
          {this.state.rValMax}
        </div>

        <div>
          <p className={styles.purchaseAmount}>
            Purchase: 
            <span className={colorCode}>
              ${this.state.rVal}
            </span>
          </p>
        </div>

        <table cellPadding="6" width="300" style={{margin: `0 auto`}}>
          <tbody>

            {this.props.months.map((month, index) => (
            <tr key={index}>
              <td>
                  {month} monthly payments of<br />
                  Interest Rate: {this.state.percentage}% APR<br />
                  Total Interest: ${this.totalInterest(month)}
              </td>
              <td valign="top">
                <strong>${this.totalMonthlyPayment(month)}</strong>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>

      </>
    )
  }

}

export default Calculator