import React from "react";
import { graphql, Link } from "gatsby";
import PostStub from "../components/postStub";
import Layout from "../components/layout";

const Tag = ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <PostStub
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
            slug={node.fields.slug}
          />
          <p>
            {node.excerpt} <Link to={node.fields.slug}>Read more.</Link>
          </p>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query($tag: [String]) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: $tag }, draft: { eq: false } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            tags
            date(formatString: "YYYY-MM-DD")
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
  }
`;

export default Tag;
