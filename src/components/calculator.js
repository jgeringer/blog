import React from 'react'
import Interest from 'interestjs'

class Calculator extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      rVal: this.props.rangeVal,
      rValMin: this.props.rangeValMin,
      rValMax: this.props.rangeValMax,
      percentage: 20,
      monthlyInterestRate: (10/100) / 12
    };
  }
  
  handleChange = (event) => {
    this.setState({
      rVal: event.target.value
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
    // https://www.thebalance.com/calculate-monthly-interest-315421#:~:text=To%20calculate%20a%20monthly%20interest,APR%20of%2010%25%20per%20year.

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
          <p style={{textAlign: `center`, fontWeight: `bold`}}>
            Purchase: ${this.state.rVal}
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