import { graphql, Link } from 'gatsby';
import React from 'react';
import * as styles from './recipeStyle.module.css';
import { GatsbyImage } from 'gatsby-plugin-image'
import RichText from '../components/RichText'

export default function SinglePage({ data: { page } }) {
    return (
        <div className="wrapper">
           <p>Page here: {page.title}</p>
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
        }
    }
`;