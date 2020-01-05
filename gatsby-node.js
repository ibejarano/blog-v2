const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    const { createNodeField } = actions
    const section = slug.split("/", 2)[1]
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `section`,
      value: section,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allDirectory(filter: { name: { ne: "posts" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  const { createPage } = actions
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.allDirectory.edges.forEach(({ node }) => {
    if(node.name != 'imgs'){
    createPage({
      path: node.name,
      component: path.resolve(`./src/templates/section-page.js`),
      context: {
        sectionName: node.name,
      },
    })
    } 
  })
}
