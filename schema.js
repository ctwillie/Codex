const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    id: ID!
    title: String!
    techs: [Tech!]!
  }

  type Tech {
    id: ID!
    title: String!
    description: String!
    links: [Link!]!
  }

  type Link {
    id: ID!
    title: String!
    description: String!
    url: String!
  }

  type Query {
    categories: [Category!]!
    techs: [Tech!]!
    links: [Link!]!
  }
`;

module.exports.typeDefs = typeDefs;
