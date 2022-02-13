const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`
const indexName = `Pages`

const pageQuery = `{
    recipes: allContentfulRecipe {
        edges {
            node {
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
              }
            }
        }
      }
  }`

const pizzariaQuery = `{
  allPizzarias: allContentfulPizzaria {
    edges {
      node {
        id
        title
        slug
        cashOnly
        description {
            raw
        }
        styles
        hasRcCola
        goodCold
        location {
            lat
            lon
        }
        phone
        url
        yearEstablished
        address
        area
        pizzas {
            id
            title
            slug
            images {
                gatsbyImageData(width: 520, height: 416)
                title
                description
            }
        }
        coverPhoto {
            gatsbyImageData(width: 520, height: 416)
            title
            description
        }
      }
    }
  }
}`

// function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
function pageToAlgoliaRecord({ node: { id, fields, ...rest } }) {
  return {
    objectID: id,
    // ...frontmatter,
    ...fields,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.recipes.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: pizzariaQuery,
    // transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    transformer: ({ data }) => data.allPizzarias.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
