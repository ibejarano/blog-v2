const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    const { createNodeField } = actions
    const section = slug.split("/", 2)[1]
    let tags = []
    const { keywords, date } = node.frontmatter
    const yearAndMonth = date.slice(0, 7)
    if (keywords) {
      tags = keywords.split(",")
    }
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
    createNodeField({
      node,
      name: `tags`,
      value: tags,
    })
    createNodeField({
      node,
      name: `yearAndMonth`,
      value: yearAndMonth,
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
              tags
            }
          }
        }
      }
      allDirectory(filter: { name: { ne: "content" } }) {
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
        tags: node.fields.tags,
      },
    })
  })

  result.data.allDirectory.edges.forEach(({ node }) => {
    console.log(node.name)
    if (node.name != "imgs") {
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
