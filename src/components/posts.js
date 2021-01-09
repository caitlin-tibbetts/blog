import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
                      excerpt
                      timeToRead
                    }
                  }
                }
              }`}
            render={data => (
            <div>
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        <div>
                            <h1>{node.frontmatter.title}</h1>
                            <p>{node.frontmatter.date}  <div style={{float: "right"}}>{node.timeToRead} minute read</div></p>
                            <p>{node.excerpt} <Link>Read more.</Link></p>
                        </div>
                    ))}
                </div>
            )}
        />
    )
}

export default Posts;
