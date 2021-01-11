import * as React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PostStub from "../components/postStub";
import "../styles/style.scss";

const Posts = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            filter: { frontmatter: { draft: { eq: false } } }
            sort: { fields: frontmatter___date, order: DESC }
          ) {
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
        }
      `}
      render={(data) => (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div>
              <PostStub
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                timeToRead={node.timeToRead}
                tags={node.frontmatter.tags}
              />
              <p>
                {node.excerpt} <Link to={node.fields.slug}>Read more.</Link>
              </p>
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default Posts;
