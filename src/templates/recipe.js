import { graphql, Link } from 'gatsby';
import React from 'react';
import KitchenFilter from '../components/KitchenFilter'
import * as styles from './recipeStyle.module.css';
import { GatsbyImage } from 'gatsby-plugin-image'
import RichText from '../components/RichText'

export default function SingleRecipePage({ data: { recipe } }) {
    return (
        <div className="wrapper">
            <KitchenFilter />
            <h2 className={styles.recipeTitle}>{recipe.title}</h2>

            <div className={styles.details}>
                {recipe.type && (
                    <div className={styles.type}>{recipe.type}</div>
                )}

                {recipe.rating && (
                    <div>
                        {recipe.rating} / 5 
                    </div>
                )}

                {recipe.price && (
                    <div>
                        ${recipe.price}
                    </div>
                )}

                {recipe.frozen && (
                    <div>
                        Frozen
                    </div>
                )}
            </div>
            
            {recipe.image && (
                <div>
                    <GatsbyImage alt="" image={recipe.image.gatsbyImageData} className={styles.recipeImage} />
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
                                    <>
                                    {ingredient.sectionHeading && (
                                        <div className={styles.sectionHeading}>
                                            {/* TODO: Copy/Paste on line click */}
                                            <strong>{ingredient.sectionHeading}</strong>
                                        </div>
                                    )}
                                    <li tabIndex="1">
                                        {ingredient.amount} {ingredient.unit} {ingredient.type}
                                        {ingredient.modification && (
                                            ` - ${ingredient.modification}`
                                        )}
                                    </li>
                                    </>
                                )
                            })}
                        </ol>
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
                gatsbyImageData(width: 800)
            }
        }
    }
`;