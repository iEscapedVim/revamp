import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://posts.pocforum.org/stories';

export const graphQLClient = new GraphQLClient(endpoint, {
  timeout: 30000, // 30 second timeout
  retry: {
    retries: 3,
    initialDelay: 1000
  }
});

export async function getPosts() {
  const query = `
    query GetPosts {
      posts {
        nodes {
          id
          title
          date
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query);
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug: string) {
  const query = `
    query GetPost($slug: String!) {
      postBy(slug: $slug) {
        id
        title
        content
        date
        modified
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query, { slug });
    return data.postBy;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getCategories() {
  const query = `
    query GetCategories {
      categories {
        nodes {
          name
          count
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query);
    return data.categories.nodes;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getTags() {
  const query = `
    query GetTags {
      tags {
        nodes {
          name
          count
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query);
    return data.tags.nodes;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}