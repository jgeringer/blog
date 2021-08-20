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
        }
      }
    }
  `);

  data.recipes.nodes.forEach((recipe) => {
    actions.createPage({
      path: `/kitchen/recipe/${recipe.slug}`,
      component: recipeTemplate,
      context: {
        slug: recipe.slug
      }
    });
  });
}

export async function createPages(params) {
  await Promise.all([
    turnBlogPostsIntoPages(params),
    turnRecipesIntoPages(params)
  ]);
}

