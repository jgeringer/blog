import React from 'react'
import { Link, graphql } from 'gatsby'
import styles from './kitchen.module.css'
import KitchenList from '../../components/KitchenList'

export default function Kitchen({ data }) {
    console.log(`in the kitchen`);
    const recipes = data.recipes.nodes;

    return(
        <>
            <h2>Kitchen</h2>
            <ol>
                <li>List all recipes</li>
            </ol>
            
            <KitchenList recipes={recipes} />
        </>
    )
}


export const query = graphql`
    query KitchenQuery {
        recipes: allContentfulRecipe {
            nodes {
                title
                slug
                id
            }
        }
    }
`;