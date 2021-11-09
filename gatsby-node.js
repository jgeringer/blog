const Promise = require('bluebird');
const path = require('path');

async function turnBlogPostsIntoPages({ graphql, actions }) {
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js');

  const { data } = await graphql(`
    query {
      blogPosts: allContentfulBlogPost {
        nodes {
          title
          slug
          id
        }
      }
    }
  `);

  data.blogPosts.nodes.forEach((post) => {
    actions.createPage({
      path: `/blog/${post.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.slug
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
      path: `/kitchen/${recipe.type}/${recipe.slug}`,
      component: recipeTemplate,
      context: {
        slug: recipe.slug
      }
    });
  });

  // data.mealTypes.nodes.forEach((type) => {
  //   actions.createPage({
  //     path: `/kitchen/${type.type}/${type.slug}`,
  //     component: typesTemplate,
  //     context: {
  //       type: type.type,
  //       slug: recipe.slug,
  //     }
  //   });
  // });

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


exports.createPages = async (params) => {
// export async function createPages(params) {
  await Promise.all([
    turnBlogPostsIntoPages(params),
    turnRecipesIntoPages(params),
    turnTypesIntoPages(params),
  ]);
}

