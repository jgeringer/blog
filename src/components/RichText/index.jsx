import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { graphql } from 'gatsby';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby'

import * as styles from './style.module.css';
import * as typography from '@styles/typography.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const RichText = (props) => {
  const { body } = props;

  /* eslint-disable react/display-name */
  const bodyOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong className={typography.bold}>{text}</strong>,
      [MARKS.ITALIC]: (text) => <span className={typography.italic}>{text}</span>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1 className={typography.h1}>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className={typography.h2}>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className={typography.h3}>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className={typography.h4}>{children}</h4>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className={styles.paragraph}>{children}</p>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // eslint-disable-next-line react/destructuring-assignment
        const target = node.data?.target;
        console.log('node: ', node)
;
        if (!target) {
          console.error(node);
          return JSON.stringify(node, null, 2);
        }

        const { description, file, title, gatsbyImageData } = target;
        console.log('target:', target)

        const { contentType, url } = file;


        if (contentType === 'application/pdf') {
          // return <PDF url={url} />;
        }

        if (contentType === 'video/mp4') {
          return (
            <video autoPlay muted loop playsInline>
              <source src={url} type="video/mp4" />
            </video>
          )
        }

        return <GatsbyImage image={getImage(gatsbyImageData)} alt={description || title} />;
      },
      // eslint-disable-next-line react/prop-types
      [INLINES.HYPERLINK]: ({ data }, children) => (
        // eslint-disable-next-line react/prop-types
        <Link to={data.uri} className={styles.link}>
          {children}
        </Link>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        // This assumes that the embedded entry is a button, needs more work to be more flexible
        // eslint-disable-next-line react/destructuring-assignment
        const { text, url } = node.data.target;

        return <Link text={text} link={url} />;
      },
    },
  };
  /* eslint-enable react/display-name */
  return (
    <div>
      <div>{body && renderRichText(body, bodyOptions)}</div>
    </div>
  );
};

RichText.propTypes = {
  body: PropTypes.shape({
    raw: PropTypes.string,
  }).isRequired,
};

export const RichTextFragment = graphql`
  fragment RichText on ContentfulSectionRichText {
    id
    body {
      raw
      references {
        __typename
        contentful_id
        url
        text
        file {
          url
        }
        gatsbyImageData(width: 1000)
      }
    }
  }
`;

export default RichText;



// import React from 'react'
// import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
// import { renderRichText } from 'gatsby-source-contentful/rich-text';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import style from './style.module.css'

// const RichText = (props) => {
  
//     const options = {
//       renderNode: {
//         [BLOCKS.HEADING_1]: (node, children) => (
//           <h1 className="heading1">{children}</h1>
//         ),
//         [BLOCKS.HEADING_2]: (node, children) => (
//           <h2 className="heading2">{children}</h2>
//         ),
//         [BLOCKS.HEADING_3]: (node, children) => (
//           <h3 className="heading3">{children}</h3>
//         ),
//         [BLOCKS.HEADING_4]: (node, children) => (
//           <h4 className="heading4">{children}</h4>
//         ),
//         [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
//           <img src={`https:${node.data.target.fields.file['en-US'].url}`} />
//         ),
//         [BLOCKS.PARAGRAPH]: (node, children) => (
//           <p className={style.copy}>{children}</p>
//         ),
//       },
//       renderMark: {},
//     }

//     return <>{
//       documentToReactComponents(this.props.content, options)
//     }</>
//   }

// export default RichText
