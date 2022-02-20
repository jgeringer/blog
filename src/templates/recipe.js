import { graphql, Link } from 'gatsby';
import React from 'react';
import KitchenFilter from '../components/KitchenFilter'
import * as styles from './recipeStyle.module.css';
import { GatsbyImage } from 'gatsby-plugin-image'
import RichText from '@components/RichText'
import PropTypes from 'prop-types'

import { removeSpaces } from '@utils/text';
import { IMAGE_FOCUS } from '@utils/constants';

export default function SingleRecipePage({ data: { recipe } }) {

    const renderImage = (recipe) => {
        const imageFocus = recipe.imageFocus || IMAGE_FOCUS.CENTER;
        const imageFocusFragment = `image${removeSpaces(imageFocus)}`
        return <GatsbyImage image={recipe[imageFocusFragment].gatsbyImageData} alt={recipe.image.title} className={styles.recipeHeroImage} />
    }

    return (
        <div className="wrapper">
            <KitchenFilter />
            
            {recipe.image && (
                <div className={styles.recipeHeroWrapper}>
                    <div>
                        {renderImage(recipe)}
                    </div>
                    <div className={styles.recipeHero}>
                        <div className={styles.stickyHeader}>
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
                        </div>
                    </div>
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
                        <RichText body={recipe.instructions} />
                    </div>
                )}

                {recipe.notes && (
                    <div>
                        <h3>Notes</h3>
                        <RichText body={recipe.notes} />
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
};

SingleRecipePage.defaultProps = {
    imageFocus: IMAGE_FOCUS.CENTER,
}

SingleRecipePage.propTypes = {
    imageFocus: PropTypes.oneOf(Object.values(IMAGE_FOCUS)),
};

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
            ...imageFocusQuery
            imageFocus
        }
    }
`;