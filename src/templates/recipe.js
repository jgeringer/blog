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
            
            {recipe.image && (
                <div>
                    <Img alt="" fluid={recipe.image.fluid} className={styles.recipeImage} />
                </div>
            )}
           
           <section className={styles.recipeLayout}>
               <aside>
                {recipe.ingredients && (
                    <div>
                        <h3>Ingredients</h3>
                        <ol className={styles.ingredients}>
                            {recipe.ingredients.map((ingredient) => {
                                return (
                                    <li>
                                        {ingredient.amount} {ingredient.unit} {ingredient.type}
                                        {ingredient.modification && (
                                            ` - ${ingredient.modification}`
                                        )}
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )}

                {recipe.rating && (
                    <div>
                        <h3>Rating</h3>
                        {recipe.rating} out of 5.
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
            </aside>

            <article>
                {recipe.instructions && (
                    <div>
                        <h3>Instructions</h3>
                        <RichText content={recipe.instructions.json} />
                    </div>
                )}

                {recipe.notes && (
                    <div>
                        <h3>Notes</h3>
                        <RichText content={recipe.notes.json} />
                    </div>
                )}
                
                {recipe.sides && (
                    <div>
                        <h3>Recommended Sides</h3>
                        <ol className="list-plain">
                            {recipe.sides.map((side) => {
                                return (
                                    <li>
                                        <Link to={`/kitchen/${side.type}/${side.slug}`} className="textLink">
                                            {side.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )}
            </article>

           </section>
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