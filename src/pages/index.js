import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "./components/Post"
// import Helmet from "react-helmet"

export default ({ data }) => {
  return (
    <PrimaryLayout column="col-xs-6">
      {/* <Helmet>
        <title>Gatbsy-Bootstrap Wordress Sourced</title>
        <meta name="description" content="Lorem ipsum caca" />
        <meta name="robots" content="index,follow" />
      </Helmet> */}
      {data.allWordpressPost.nodes.map(node => (
        <Post
          key={node.id}
          alt={node.featured_media.slug}
          image={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        id
        slug
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`
