import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostStub from "../components/postStub";

const Post = ({ data }) => {
  return (
    <Layout>
      <PostStub
        title={data.markdownRemark.frontmatter.title}
        date={data.markdownRemark.frontmatter.date}
        timeToRead={data.markdownRemark.timeToRead}
        tags={data.markdownRemark.frontmatter.tags}
      />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
      }
      timeToRead
      html
    }
  }
`;

export default Post;
