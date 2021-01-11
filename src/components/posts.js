import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import PostStub from "../components/postStub"
import "../styles/style.scss"

const Posts = () => {
    return (
        <StaticQuery
            query={graphql`{
                allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}}) {
                  edges {
                    node {
                      frontmatter {
                        title
                        date(formatString: "DD-MM-YYYY")
                        tags
                      }
                      fields {
                        slug
                      }
                      excerpt
                      timeToRead
                    }
                  }
                }
              }`}
            render={data => (
            <div>
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        <PostStub title={node.frontmatter.title} date={node.frontmatter.date} timeToRead={node.timeToRead} tags={node.frontmatter.tags} excerpt={node.excerpt} slug={node.fields.slug}/>
                    ))}
                </div>
            )}
        />
    )
}

export default Posts;
