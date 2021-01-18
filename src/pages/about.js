import { graphql } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import Layout from "../components/layout";
import "../styles/style.scss";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Img fluid={data.file.childImageSharp.fluid} alt="Caitlin Tibbetts" />
      <p>{data.site.siteMetadata.description}</p>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    file(relativePath: { eq: "caitlintibbetts.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
