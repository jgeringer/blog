import React from 'react'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import style from './style.module.css'

class RichText extends React.Component {
  render() {
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
          <p className={style.copy}>{children}</p>
        ),
      },
      renderMark: {},
    }

    return <>{documentToReactComponents(this.props.content, options)}</>
  }
}

export default RichText
