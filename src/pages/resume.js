import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import * as styles from './blog.module.css'
import ResumeDetail from '../components/resume-detail'
import Calculator from '../components/Calculator'

class ResumeIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const detail = get(this, 'props.data.allContentfulResume.edges[0]')

    const rangeValue = 500
    const rangeMinValue = 100
    const rangeMaxValue = 5000

    return (
        <div>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Resume</div>
          <div className="wrapper">

            <Calculator months={[3,6,12]} rangeVal={rangeValue} rangeValMin={rangeMinValue} rangeValMax={rangeMaxValue} />

          </div>
        </div>
    )
  }
}

export const pageQuery = graphql`
  query ResumeIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ResumeIndex