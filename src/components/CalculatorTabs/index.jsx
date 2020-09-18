import React from 'react'
import Modal from '@components/Modal';

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
            
            {/* Chart */}
            <section>
              <ol>
                <li>Cost of item</li>
                <li>Interest</li>
                <li>Potential fees</li>
              </ol>
            </section>

            <aside>
              <div>
                Payment Term
                <select className="Filters-dropdown">
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                </select>
              </div>
              <div>
                Monthly payment $XX.XX
              </div>
              <div>
                total: $XX.XX<br />
                int: $XX.XX
              </div>
            </aside>

            <p>Blurb.</p>

            <Modal />

          </div>

          <div></div>
        </div>
      </div>
    )
  }
}

export default CalculatorTabs
