import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://posts.pocforum.org/stories';

export const graphQLClient = new GraphQLClient(endpoint);

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