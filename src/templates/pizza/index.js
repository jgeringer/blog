import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'


export default function SinglePizzaPage({ data: { pizza } }) {
    // const pizza = data.pizza
    const pizzaria = pizza.pizzaria[0].title

    return (
        <div>
            <Helmet title={`Joe Geringer | Chicago Pizzas - ${pizza.title}`} />
            <div className="wrapper">
                <h1>{pizzaria} / {pizza.title}</h1>
            </div>
            {/* <GatsbyImage alt={pizza.description || pizza.title} image={pizza.images[0].gatsbyImageData} /> */}
        </div>
    );
}

// test
export const query = graphql`
    query($slug: String!) {
        pizza: contentfulPizza(slug: { eq: $slug }) {
            slug
            title
            images {
                gatsbyImageData(width: 1440, height: 1440)
                title
                description
            }
            pizzaria {
                id
                title
                slug
            }
        }
    }
`;