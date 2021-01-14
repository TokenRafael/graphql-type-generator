import { gql } from 'apollo-server';
export const type = gql`
  input <%%>Input {
    
  }
  type <%%> {
    id: ID!
    
  }
  extend type Query {
    <%%>s: [<%%>]
    <%%>(id: String!): <%%>
  }
  extend type Mutation {
    create<%%>(payload: <%%>Input!): <%%>
    update<%%>(id: String!, payload: <%%>Input!): <%%>
    delete<%%>(id: String!): <%%>
  }
`;