import React from 'react'
import { Link, graphql } from 'gatsby'
import * as styles from './kitchen.module.css'
import KitchenFilter from '../../components/KitchenFilter'
import KitchenList from '../../components/KitchenList'
import { Helmet } from 'react-helmet'

export default function Kitchen({ data }) {
    const recipes = data.recipes.nodes;

    return(
        <>
            <Helmet title={`Joe Geringer | Kitchen`} />
            <div className="wrapper">
                <h2>Kitchen</h2>
                <KitchenFilter />
                <KitchenList recipes={recipes} />
            </div>
        </>
    )
}


export const query = graphql`
    query KitchenQuery($type: [String]) {
        recipes: allContentfulRecipe(filter: {type: {in: $type}}) {
            totalCount
            nodes {
                title
                slug
                id
                type
                instructions {
                    raw
                }
                notes {
                    raw
                }
                rating
                source
                price
                frozen
                sides {
                    title
                    slug
                    id
                    type
                    instructions {
                        raw
                    }
                    notes {
                        raw
                    }
                    rating
                    source
                    price
                    frozen
                }
                ingredients {
                    id
                    amount
                    unit
                    type
                    modification
                    price
                    sectionHeading
                }
                image {
                    title
                    gatsbyImageData(width: 800)
                    description
                }
                imageFocus
            }
        }
    }
`;