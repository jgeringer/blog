import React from 'react'

class Calculator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      rVal: this.props.rangeVal,
      rValMin: this.props.rangeValMin,
      rValMax: this.props.rangeValMax
    };
  }

  handleChange = (event) => {
    this.setState({
      rVal: event.target.value
    })
  }

  render() {
    // https://www.thebalance.com/calculate-monthly-interest-315421#:~:text=To%20calculate%20a%20monthly%20interest,APR%20of%2010%25%20per%20year.

    let interest = 10/100 // 10%
    let interestRate = interest/12

    let threeMonthsPerMonth = interestRate * this.state.rVal
    let threeMonthsInterest = ((this.state.rVal / 3) * interest * 12) // 0.10/12 = 10% apr, 12 months

    let sixMonthsPerMonths = interestRate * this.state.rVal
    let sixMonthsInterest = ((this.state.rVal / 6) * interest * 12) // 0.10/12 = 10% apr, 12 months

    return (
      <>
        <div>Calculator!</div>

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
          <p style={{textAlign: `center`, fontWeight: `bold`}}>
            Purchase: ${this.state.rVal}
          </p>
        </div>

        <table cellPadding="6" width="300" style={{margin: `0 auto`}}>
          <tbody>
            <tr>
              <td>
                  3 monthly payments of<br />
                  Interest Rate: 10% APR<br />
                  Total Interest: ${((threeMonthsPerMonth)).toFixed(2)}
              </td>
              <td valign="top">
                <strong>${((threeMonthsInterest)).toFixed(2)}</strong>
              </td>
            </tr>
            <tr>
            <td>
                  6 monthly payments of<br />
                  Interest Rate: 10% APR<br />
                  Total Interest: ${(sixMonthsPerMonths).toFixed(2)}
              </td>
              <td valign="top">
                <strong>${(sixMonthsInterest).toFixed(2)}</strong>
              </td>
            </tr>
            <tr>
              <td>
                  12 monthly payments<br />
                  Interest Rate: 10%<br />
                  Total Interest: $10.00
              </td>
              <td>
                <strong>$10.00</strong>
              </td>
            </tr>
          </tbody>
        </table>

      </>
    )
  }

}

export default Calculator