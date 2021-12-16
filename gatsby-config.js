require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log('*******');
console.log(process.env.NODE_ENV);
console.log('*******');

const path = require('path')
const resolver = require('postcss-import-resolver')

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.HOST,
}

// if (process.env.CONTENTFUL_PREVIEW) {
//   contentfulConfig.host = 'preview.contentful.com';
// }

const { spaceId, accessToken, host } = contentfulConfig

console.log(`accessToken: `, accessToken);
console.log(`host: `, host);

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
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
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
          "@sections": "src/components/sections",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@styles": "src/styles/imports",
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
          modules: {
            auto: undefined,
            localIdentName: '[folder]-[local]--[hash:base64:5]',
          },
        },
        postcssOptions: {
          syntax: 'postcss-scss',
          parser: 'postcss-scss',
        },
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Sarpanch\:400,600`,
          `IBM+Plex+Sans\:100,200,300,400,600`,
          // `limelight`,
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
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
