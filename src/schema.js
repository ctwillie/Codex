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
    category(id: ID!): Category
    techs: [Tech!]!
    tech(id: ID!): Tech
    links: [Link!]!
    link(id: ID!): Link
  }
`;

module.exports.typeDefs = typeDefs;
