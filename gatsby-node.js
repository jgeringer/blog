const Promise = require('bluebird');
const path = require('path');

async function turnPagesIntoPages({ graphql, actions }) {
  const pageTemplate = path.resolve('./src/templates/page.js');

  const { data } = await graphql(`
    query {
      pages: allContentfulPage {
        nodes {
          id
          slug
          title
        }
      }
    }
  `);

  data.pages.nodes.forEach((page) => {
    actions.createPage({
      path: `${page.slug}`,
      component: pageTemplate,
      context: {
        slug: page.slug
      }
    });
  });
}



async function turnBlogPostsIntoPages({ graphql, actions }) {
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js');

  const { data } = await graphql(`
    query {
      blogPosts: allContentfulBlogPost {
        nodes {
          title
          slugPrefix
          id
        }
      }
    }
  `);

  data.blogPosts.nodes.forEach((post) => {
    actions.createPage({
      path: post.slugPrefix,
      component: blogPostTemplate,
      context: {
        slug: post.slugPrefix
      }
    });
  });
}

async function turnRecipesIntoPages({ graphql, actions }) {
  const recipeTemplate = path.resolve('./src/templates/recipe.js');

  const { data } = await graphql(`
    query {
      recipes: allContentfulRecipe {
        nodes {
          title
          slug
          id
          type
        }
      }
    }
  `);

  data.recipes.nodes.forEach((recipe) => {
    actions.createPage({
      // path: `/kitchen/${recipe.type}/${recipe.slug}`,
      path: recipe.slug,
      component: recipeTemplate,
      context: {
        slug: recipe.slug
      }
    });
  });
}

async function turnTypesIntoPages({ graphql, actions }) {
  const typesTemplate = path.resolve('./src/pages/kitchen/index.js');

  const { data } = await graphql(`
    query {
      mealTypes: allContentfulTypeOfMeal {
        nodes {
          type
          id
        }
      }
    }
  `);

  data.mealTypes.nodes.forEach((type) => {
    actions.createPage({
      path: `/kitchen/${type.type}`,
      component: typesTemplate,
      context: {
        type: type.type,
      }
    });
  });
}

// TODO: pizza detail page - built out, but not linked to yet
async function turnPizzasIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/templates/pizza/index.js');

  const { data } = await graphql(`
    query {
      pizzas: allContentfulPizza {
        nodes {
          title
          id
          slug
          pizzaria {
            id
            slug
            title
            pizzas {
              images {
                  gatsbyImageData(width: 1440, height: 1440)
                  title
                  description
              }
            }
          }
        }
      }
    }
  `);

  data.pizzas.nodes.forEach((pizza) => {
    const pizzariaSlug = pizza.pizzaria[0].slug;
    actions.createPage({
      path: `/pizzas/${pizzariaSlug}/${pizza.slug}`,
      component: template,
      context: {
        slug: pizza.slug,
      }
    })
  })
}

async function turnPizzariasIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/pages/pizzas/index.js');

  const { data } = await graphql(`
    query {
      pizzaria: allContentfulPizzaria {
        nodes {
          title
          id
          slug
          cashOnly
          hasRcCola
        }
      }
    }
  `);

  data.pizzaria.nodes.forEach((pizzaria) => {
    actions.createPage({
      path: pizzaria.slug,
      component: template,
      context: {
        slug: pizzaria.slug,
        hasRcCola: pizzaria.hasRcCola,
      }
    });
  });
}


exports.createPages = async (params) => {
// export async function createPages(params) {
  await Promise.all([
    turnBlogPostsIntoPages(params),
    turnRecipesIntoPages(params),
    turnTypesIntoPages(params),
    // turnPagesIntoPages(params),
    turnPizzariasIntoPages(params),
    turnPizzasIntoPages(params)
  ]);
}

