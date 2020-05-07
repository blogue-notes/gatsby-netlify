import React from "react"
import { StaticQuery, graphql } from "gatsby"

const SEO = () => {
  ;<StaticQuery
    query={query}
    render={{
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultImages,
          url,
          keywords,
        },
      },
    }}
  />
}

const query = graphql`
  {
    site {
      siteMetadata {
        defaultDescription: description
        defaultImage: image
        keywords
        defaultTitle: title
        url
      }
    }
  }
`
