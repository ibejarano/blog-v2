const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      coverUrl: String
      coverAlt: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  getNode,
  actions,
  cache,
  store,
  createNodeId,
}) => {
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    const { createNodeField, createNode } = actions
    const section = slug.split("/", 2)[1]
    let tags = []
    const { keywords, date, coverUrl } = node.frontmatter
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
    if (coverUrl) {
      let fileNode = await createRemoteFileNode({
        url: node.frontmatter.coverUrl,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      })
      if (fileNode) {
        node.featuredImg___NODE = fileNode.id
      }
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
              tags
            }
          }
        }
      }
      allDirectory(filter: { name: { nin: ["content", "cover"] } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  const { createPage } = actions
  result.data.allMdx.edges.forEach(({ node }) => {
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
    if (node.name != "imgs") {
      console.log(node.name)
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
