import React from "react";
import { graphql } from "gatsby";
import PostStub from "../components/postStub"
import Layout from "../components/layout";

const Tag = ({ data }) => {
  return (
    <Layout>
        {data.allMarkdownRemark.edges.map(({node}) => (
            <PostStub title={node.frontmatter.title} date={node.frontmatter.date} timeToRead={node.timeToRead} tags={node.frontmatter.tags} excerpt={node.excerpt} slug={node.fields.slug}/>
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
