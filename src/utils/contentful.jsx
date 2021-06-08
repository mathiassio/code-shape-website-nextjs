import { GraphQLClient, gql } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

//Articles Queries

export async function getPaginatedArticles() {
  const articlesQuery = gql`
    {
      articleCollection(order: date_DESC, limit: 9) {
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
          author {
            name
            photo {
              fileName
              url
              width
              height
            }
            title
            twitterProfile
            linkedInProfile
            slug
          }
        }
      }
    }
  `;
  return graphQLClient.request(articlesQuery);
}

export async function getArticles() {
  const articlesQuery = gql`
    {
      articleCollection(order: date_DESC) {
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
          author {
            name
            photo {
              fileName
              url
              width
              height
            }
            title
            twitterProfile
            linkedInProfile
            slug
          }
        }
      }
    }
  `;
  return graphQLClient.request(articlesQuery);
}

export async function getArticle(slug) {
  const articleQuery = gql`
    query getArticle($slug: String!) {
      articleCollection(limit: 1, where: { slug: $slug }) {
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
          author {
            name
            photo {
              fileName
              url
              width
              height
            }
            title
            twitterProfile
            linkedInProfile
            slug
          }
          content {
            json
            links {
              entries {
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `;

  return graphQLClient.request(articleQuery, {
    slug,
  });
}

//Authors Queries

export async function getAuthors() {
  const authorsQuery = gql`
    {
      authorCollection(order: name_ASC) {
        items {
          name
          photo {
            title
            url
            width
            height
          }
          biography
          title
          twitterProfile
          linkedInProfile
          slug
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
          photo {
            title
            url
            width
            height
          }
          title
          biography
          twitterProfile
          linkedInProfile
          slug
        }
      }
    }
  `;

  return graphQLClient.request(authorQuery, {
    slug,
  });
}

// Courses Queries

export async function getCourses() {
  const coursesQuery = gql`
    {
      courseCollection {
        items {
          title
          subtitle
          slug
          featuredImage {
            fileName
            url
            width
            height
          }
          icon {
            fileName
            url
            width
            height
          }
          description
          content {
            json
          }
          instructor {
            name
            title
            photo {
              fileName
              url
              width
              height
            }
          }
        }
      }
    }
  `;
  return graphQLClient.request(coursesQuery);
}

export async function getCourse(slug) {
  const courseQuery = gql`
    query getCourse($slug: String!) {
      courseCollection(limit: 1, where: { slug: $slug }) {
        items {
          title
          subtitle
          slug
          featuredImage {
            fileName
            url
            width
            height
          }
          icon {
            fileName
            url
            width
            height
          }
          description
          content {
            json
            links {
              entries {
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                }
              }
            }
          }
          instructor {
            name
            title
            photo {
              fileName
              url
              width
              height
            }
          }
        }
      }
    }
  `;

  return graphQLClient.request(courseQuery, {
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
          date
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
      pageCollection(limit: 1, where: { slug: $slug }) {
        items {
          title
          slug
          date
          content {
            json
            links {
              entries {
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `;

  return graphQLClient.request(pageQuery, {
    slug,
  });
}

//Cases Queries

export async function getPaginatedCases() {
  const casesQuery = gql`
    {
      caseCollection(order: date_DESC, limit: 9) {
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
          author {
            name
            photo {
              fileName
              url
              width
              height
            }
            title
            twitterProfile
            linkedInProfile
            slug
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
  return graphQLClient.request(casesQuery);
}

export async function getCases() {
  const casesQuery = gql`
    {
      caseCollection(order: date_DESC) {
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
          author {
            name
            photo {
              fileName
              url
              width
              height
            }
            title
            twitterProfile
            linkedInProfile
            slug
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
  return graphQLClient.request(casesQuery);
}

export async function getCase(slug) {
  const caseQuery = gql`
    query getCase($slug: String!) {
      caseCollection(limit: 1, where: { slug: $slug }) {
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
          author {
            name
            photo {
              fileName
              url
              width
              height
            }
            title
            twitterProfile
            linkedInProfile
            slug
          }
          content {
            json
            links {
              entries {
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                }
              }
            }
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

  return graphQLClient.request(caseQuery, {
    slug,
  });
}

//Instructors Queries

export async function getInstructors() {
  const instructorsQuery = gql`
    {
      instructorCollection {
        items {
          name
          title
          photo {
            fileName
            url
            width
            height
          }
          biography
        }
      }
    }
  `;
  return graphQLClient.request(instructorsQuery);
}

export async function getInstructor(slug) {
  const instructorQuery = gql`
    query getInstructor($slug: String!) {
      instructorCollection(where: { slug: $slug }) {
        items {
          name
          title
          photo {
            fileName
            url
            width
            height
          }
          biography
        }
      }
    }
  `;

  return graphQLClient.request(instructorQuery, {
    slug,
  });
}

//Showcases Queries

export async function getShowcases() {
  const showcasesQuery = gql`
    {
      showcaseCollection(order: date_DESC) {
        items {
          title
          slug
          url
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
          author {
            name
            photo {
              fileName
              url
              width
              height
            }
            title
            twitterProfile
            linkedInProfile
            slug
          }
        }
      }
    }
  `;
  return graphQLClient.request(showcasesQuery);
}

export async function getShowcase(slug) {
  const showcaseQuery = gql`
    query getShowcase($slug: String!) {
      showcaseCollection(limit: 1, where: { slug: $slug }) {
        items {
          title
          slug
          url
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
          author {
            name
            photo {
              fileName
              url
              width
              height
            }
            title
            twitterProfile
            linkedInProfile
            slug
          }
          content {
            json
            links {
              entries {
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `;

  return graphQLClient.request(showcaseQuery, {
    slug,
  });
}

export async function getLimitedShowcases() {
  const limitedShowcasesQuery = gql`
    {
      showcaseCollection(order: date_DESC, limit: 6) {
        items {
          title
          slug
          url
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
          author {
            name
            photo {
              fileName
              url
              width
              height
            }
            title
            twitterProfile
            linkedInProfile
            slug
          }
        }
      }
    }
  `;
  return graphQLClient.request(limitedShowcasesQuery);
}

//Update Queries

export async function getUpdates() {
  const updatesQuery = gql`
    {
      updateCollection(order: date_DESC) {
        items {
          title
          slug
          url
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
        }
      }
    }
  `;
  return graphQLClient.request(updatesQuery);
}

export async function getUpdate(slug) {
  const updateQuery = gql`
    query getUpdate($slug: String!) {
      updateCollection(limit: 1, where: { slug: $slug }) {
        items {
          title
          slug
          url
          date
          featuredImage {
            title
            url
            width
            height
          }
          content {
            json
            links {
              entries {
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `;

  return graphQLClient.request(updateQuery, {
    slug,
  });
}
