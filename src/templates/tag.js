import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const Tag = ({ data }) => {
  return (
    <Layout>
        {data.allMarkdownRemark.edges.map(({node}) => (
            <div>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.date}  <div style={{float: "right"}}>{node.timeToRead} minute read</div></p>
                <p>{node.excerpt} <Link to={node.fields.slug}>Read more.</Link></p>
            </div>
        ))}
    </Layout>
  );
};

export const query = graphql`
  query($tag: [String]) {
    allMarkdownRemark(filter: {frontmatter: {tags: {in: $tag}, draft: {eq: false}}}) {
      edges {
        node {
          frontmatter {
            tags
            date(formatString: "DD-MM-YYYY")
            draft
            title
          }
          fields {
              slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }`;

export default Tag;
