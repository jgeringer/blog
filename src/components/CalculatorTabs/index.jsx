import React from 'react'

class CalculatorTabs extends React.Component {
  // constructor here

  render() {
    return (
      <div>
        <h2>Headline</h2>
        <h3>Subheadline</h3>

        <div>
          <div>Tab</div>

          <div>
            Payment Term
            <select class="Filters-dropdown">
              <option value="6">6 months</option>
              <option value="12">12 months</option>
            </select>
          </div>

          <div></div>
        </div>
      </div>
    )
  }
}

export default CalculatorTabs
