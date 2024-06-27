import { resolve } from 'node:path'
import { createFilePath } from 'gatsby-source-filesystem'

export const onCreateNode = async ({
  node,
  loadNodeContent,
  actions: { createNodeField },
  getNode,
}) => {
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: 'slug',
      value: `${slug}`,
    })
  }

  if (node.ext === '.scss') {
    const nodeContent = await loadNodeContent(node)
    createNodeField({
      node,
      name: `content`,
      value: nodeContent,
    })
  }
}

export const createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
  reporter,
}) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
          tableOfContents(maxDepth: 3)
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.nodes

  if (posts.length > 0) {
    posts.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: `${resolve(`./src/templates/MdxLayout.tsx`)}?__contentFilePath=${
          node.internal.contentFilePath
        }`,
        context: { id: node.id },
      })
    })
    createRedirect({
      fromPath: `/`,
      toPath: `/getting-started/introduction/`,
      redirectInBrowser: true,
      isPermanent: true,
    })
    createRedirect({
      fromPath: '/components/-Button/',
      toPath: '/components/button/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/-Grid/',
      toPath: '/layout/grid/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/-Input/',
      toPath: '/forms/overview/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/-Layout/',
      toPath: '/components/sidebar/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/-Widget/',
      toPath: '/components/widgets/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/buttons/',
      toPath: '/components/button/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CAlert/',
      toPath: '/components/alert/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CBadge/',
      toPath: '/components/badge/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CBreadcrumb/',
      toPath: '/components/breadcrumb/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CCallout/',
      toPath: '/components/callout/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CCard/',
      toPath: '/components/card/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CCollapse/',
      toPath: '/components/carousel/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CCollapse/',
      toPath: '/components/collapse/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CCreateElement/',
      toPath: '/3.3/components/CCreateElement/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CDataTable/',
      toPath: '/components/smart-table/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CDropdown/',
      toPath: '/components/dropdown/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CElementCover/',
      toPath: '/3.3/components/CElementCover/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CEmbed/',
      toPath: '/3.3/components/CEmbed/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CFade/',
      toPath: '/3.3/components/CFade/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CForm/',
      toPath: '/forms/overview/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CIcon/',
      toPath: '/components/icon/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CImg/',
      toPath: '/components/image/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CJumbotron/',
      toPath: '/3.3/components/CJumbotron/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CListGroup/',
      toPath: '/components/list-group/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CMedia/',
      toPath: '/3.3/components/CMedia/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CModal/',
      toPath: '/components/modal/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CNav/',
      toPath: '/components/navs-tabs/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CNavbar/',
      toPath: '/components/navbar/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CPagination/',
      toPath: '/components/pagination/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CPopover/',
      toPath: '/components/popover/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CProgress/',
      toPath: '/components/progress/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CSpinner/',
      toPath: '/components/spinner/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CSwitch/',
      toPath: '/forms/checks-radios/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CTabs/',
      toPath: '/components/navs-tabs/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CToggler/',
      toPath: '/3.3/components/CToggler/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/CTooltip/',
      toPath: '/components/tooltip/',
      redirectInBrowser: true,
      statusCode: 301,
    })
    createRedirect({
      fromPath: '/components/nav/',
      toPath: '/components/navs-tabs/',
      redirectInBrowser: true,
      statusCode: 301,
    })
  }
}
