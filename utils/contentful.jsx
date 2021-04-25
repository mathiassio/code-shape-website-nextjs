import { GraphQLClient, gql } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

//Articles Queries

export async function getArticles() {
  const articlesQuery = gql`
    {
      articleCollection {
        items {
          title
          slug
          excerpt
          date
          contentfulMetadata {
            tags {
              name
              id
            }
          }
          featuredImage {
            title
            url
            width
            height
          }
        }
      }
    }
  `;
  return graphQLClient.request(articlesQuery);
}

export async function getArticle(slug) {
  const articlesQuery = gql`
    query getArticle($slug: String!) {
      articleCollection(where: { slug: $slug }) {
        items {
          title
          slug
          excerpt
          date
          contentfulMetadata {
            tags {
              name
              id
            }
          }
          featuredImage {
            title
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
  `;

  return graphQLClient.request(articlesQuery, {
    slug,
  });
}

//Authors Queries

export async function getAuthors() {
  const authorsQuery = gql`
    {
      authorCollection {
        items {
          name
          photo {
            title
            url
            width
            height
          }
          title
          biography
          twitterLink
          linkedinLink
        }
      }
    }
  `;
  return graphQLClient.request(authorsQuery);
}

export async function getAuthor(slug) {
  const authorQuery = gql`
    query getAuthor($slug: String!) {
      authorCollection(where: { slug: $slug }) {
        items {
          name
          slug
          photo {
            title
            url
            width
            height
          }
          title
          biography
          twitterLink
          linkedinLink
        }
      }
    }
  `;

  return graphQLClient.request(authorQuery, {
    slug,
  });
}

//Pages Queries

export async function getPages() {
  const pagesQuery = gql`
    {
      pageCollection {
        items {
          title
          slug
          subtitle
          content {
            json
          }
        }
      }
    }
  `;
  return graphQLClient.request(pagesQuery);
}

export async function getPage(slug) {
  const pageQuery = gql`
    query getPage($slug: String!) {
      pageCollection(where: { slug: $slug }) {
        items {
          title
          slug
          subtitle
          content {
            json
          }
        }
      }
    }
  `;

  return graphQLClient.request(pageQuery, {
    slug,
  });
}

//Projects Queries

export async function getProjects() {
  const projectsQuery = gql`
    {
      projectCollection {
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
          contentfulMetadata {
            tags {
              name
              id
            }
          }
        }
      }
    }
  `;
  return graphQLClient.request(projectsQuery);
}

export async function getProject(slug) {
  const projectQuery = gql`
    query getProject($slug: String!) {
      projectCollection(where: { slug: $slug }) {
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
          content {
            json
          }
          contentfulMetadata {
            tags {
              name
              id
            }
          }
        }
      }
    }
  `;

  return graphQLClient.request(projectQuery, {
    slug,
  });
}
