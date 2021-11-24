import React from 'react'
import * as styles from './hero.module.css'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'

const ResumeDetail = ({ data }) => {
  const firstRichContent = data
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="heading1">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="heading2">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="heading3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="heading4">{children}</h4>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img src={`https:${node.data.target.fields.file['en-US'].url}`} />
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="copy">{children}</p>
      ),
    },
    renderMark: {},
  }
  return (
    <div>
      Fix this later
      {/* <p className={styles.heroTitle}>{data.title}</p>
      {documentToReactComponents(firstRichContent.body.raw, options)} */}
    </div>
  )
}

export default ResumeDetail

// export default ({ data }) => (
//   <div className={styles.hero}>
//     <div className={styles.heroDetails}>
//       <p className={styles.heroTitle}>{data.title}</p>

//     </div>
//   </div>
// )
