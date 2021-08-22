import { graphql, Link } from 'gatsby';
import React from 'react';
import KitchenFilter from '../components/KitchenFilter'
import RecipeList from '../components/KitchenList';
import styles from './recipeStyle.module.css';
import Img from 'gatsby-image'
import RichText from '../components/RichText'

export default function SingleRecipePage({ data: { recipe } }) {
    return (
        <div className="wrapper">
            <KitchenFilter />
            <h2>{recipe.title}</h2>
            {recipe.type && (
                <div>{recipe.type}</div>
            )}
            <div>
                <h4>Ingredients</h4>
                {recipe.ingredients && (
                    <ol className={styles.ingredients}>
                        {recipe.ingredients.map((ingredient) => {
                            return (
                                <li>
                                    {ingredient.amount} {ingredient.unit} {ingredient.type}
                                    {ingredient.modification}
                                </li>
                            )
                        })}
                    </ol>
                )}
            </div>
            
            {recipe.image && (
                <div>
                    <Img alt="" fluid={recipe.image.fluid} />
                </div>
            )}
           

            {recipe.instructions && (
                <div>
                    instructions...
                    <RichText content={recipe.instructions.json} />
                </div>
            )}

            {recipe.notes && (
                <div>
                    <RichText content={recipe.notes.json} />
                </div>
            )}
            
            <div>
                {recipe.sides && (
                    <ol>
                        {recipe.sides.map((side) => {
                            return (
                                <div>
                                    <Link to={`/kitchen/${side.type}/${side.slug}`}>
                                        {side.title}
                                    </Link>
                                </div>
                            )
                        })}
                    </ol>
                )}
            </div>
            
            {recipe.rating && (
                <div>
                    {recipe.rating}
                </div>
            )}

            {recipe.price && (
                <div>
                    {recipe.price}
                </div>
            )}

            {recipe.frozen && (
                <div>
                    Found in the frozen isle
                </div>
            )}
        </div>
    );
}

// This needs to be dynacmic base on slug via context in gatsby-node.js
export const query = graphql`
    query($slug: String!) {
        recipe: contentfulRecipe(slug: { eq: $slug }) {
            title
            slug
            id
            type
            instructions {
                json
            }
            notes {
                json
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
                    json
                }
                notes {
                    json
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
            }
            image {
                fluid(maxWidth: 800) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;