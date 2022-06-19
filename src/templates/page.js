import { graphql, Link } from 'gatsby';
import React from 'react';

export default function SinglePage({ data: { page } }) {
    console.log('page: ', page)
    return (
        <div className="wrapper" style={{backgroundColor: page.backgroundColor.color}}>
           <h1>{page.title}</h1>
           <h2>{page.pageDescription}</h2>
        </div>
    );
}

// This needs to be dynacmic base on slug via context in gatsby-node.js
export const query = graphql`
    query($slug: String!) {
        page: contentfulPage(slug: { eq: $slug }) {
            slug
            id
            title
            pageDescription
            backgroundColor {
                color
                customColor
            }
        }
    }
`;