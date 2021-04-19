import { GraphQLClient, gql } from 'graphql-request'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
    },
})

export async function getListings() {

  const listingsQuery = gql`
  {
    articlePostCollection {
      items {
        title
        slug
        excerpt
        date
        featuredImage {
         title
         url
         width
         height
        }
      }
    }
  }
`
return graphQLClient.request(listingsQuery)
}

export async function getListing(slug) {

 const listingsQuery = gql`
    query getListing($slug: String!) {
        articlePostCollection(where: {slug: $slug}) {
        items {
            title
            slug
            excerpt
            date
            featuredImage {
             url
             width
             height
            }
            content {
             json
            }
        }
      }
    }
  `

 return graphQLClient.request(listingsQuery, {
     slug
 })
}