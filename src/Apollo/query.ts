import { gql } from "@apollo/client";

export const GET_BLOG = gql(`
query MyQuery {
  blogs {
    id
  }
}
`);