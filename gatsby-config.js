require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// console.log(`env: `, process.env.NODE_ENV);

// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config()
// }

const path = require('path')
const resolver = require('postcss-import-resolver')

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const { spaceId, accessToken } = contentfulConfig

console.log(`spaceId: `, spaceId);

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Joe Geringer | Frontend Web Developer',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@styles": "src/styles",
          "@assets": "src/assets",
          "@utils": "src/utils",
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          module: true,
          localIdentName: '[folder]-[local]--[hash:base64:5]',
        },
        parser: 'postcss-scss',
        postCssPlugins: [
          require('postcss-import')({
            resolve: resolver({
              alias: {
                '~styles': path.resolve(__dirname, 'src/styles'),
              },
              extensions: ['.css'],
              modules: ['src', 'node_modules'],
            }),
          }),
          require('precss')
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'UA-123024-1',
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TWT5WFN',
      },
    },
  ],
}
