require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(`env: `, process.env.NODE_ENV);

const path = require('path')
const resolver = require('postcss-import-resolver')

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
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
    title: 'Gatsby Contentful starter',
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
