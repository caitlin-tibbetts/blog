const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: "pages/articles" });
    createNodeField({ node, value: slug, name: "slug" });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  let allTags = [];

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("src/templates/post.js"),
        context: { slug: node.fields.slug },
      });
      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach((tag) => {
          if (!allTags.includes(tag)) {
            allTags.push(tag);
            createPage({
              path: "/tags/" + tag + "/",
              component: path.resolve("src/templates/tag.js"),
              context: { tag: tag },
            });
          }
        });
      }
    });
  });
};
