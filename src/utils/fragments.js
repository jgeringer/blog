import { graphql } from "gatsby";

export const imageFocusQuery = graphql`
    fragment imageFocusQuery on ContentfulRecipe {
        image {
            title
            description
            gatsbyImageData(
                cropFocus: CENTER
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageCenter: image {
            title
            gatsbyImageData(
                cropFocus: CENTER
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageBottom: image {
            gatsbyImageData(
                cropFocus: BOTTOM
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageBottomLeft: image {
            gatsbyImageData(
                cropFocus: BOTTOM_LEFT
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageBottomRight: image {
            gatsbyImageData(
                cropFocus: BOTTOM_RIGHT
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageFace: image {
            gatsbyImageData(
                cropFocus: FACE
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageFaces: image {
            gatsbyImageData(
                cropFocus: FACES
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageLeft: image {
            gatsbyImageData(
                cropFocus: LEFT
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageRight: image {
            gatsbyImageData(
                cropFocus: RIGHT
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageTop: image {
            gatsbyImageData(
                cropFocus: TOP
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageTopLeft: image {
            gatsbyImageData(
                cropFocus: TOP_LEFT
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
        imageTopRight: image {
            gatsbyImageData(
                cropFocus: TOP_RIGHT
                layout: FULL_WIDTH
                resizingBehavior: FILL
                height: 2000
            )
        }
    }
`