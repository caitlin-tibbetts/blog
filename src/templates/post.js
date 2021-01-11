import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Post = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>
        {data.markdownRemark.frontmatter.date}{" "}
        <div style={{ float: "right" }}>
          {data.markdownRemark.timeToRead} minute read
        </div>
      </p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
        tags
      }
      timeToRead
      html
    }
  }`;

export default Post;
