import { graphql } from 'gatsby';
import React from 'react';

export default function SingleReciePage({ data: { recipe } }) {
    return (
        <>
            <div>
                <h2>{recipe.title}</h2>
            </div>
        </>
    );
}

// This needs to be dynacmic base on slug via context in gatsby-node.js
export const query = graphql`
    query($slug: String!) {
        recipe: contentfulRecipe(slug: { eq: $slug }) {
            title
            id
        }
    }
`;