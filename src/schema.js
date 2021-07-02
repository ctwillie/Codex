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
    categoryId: ID!
  }

  type Link {
    id: ID!
    title: String!
    description: String!
    url: String!
    techId: ID!
  }

  type Query {
    categories: [Category!]!
    category(id: ID!): Category
    techs: [Tech!]!
    tech(id: ID!): Tech
    links: [Link!]!
    link(id: ID!): Link
  }

  type Mutation {
    # Category
    storeCategory(title: String!): Category
    updateCategory(id: ID!, title: String!): Category
    destroyCategory(id: ID!): Category

    # Tech
    storeTech(title: String!, description: String!, categoryId: ID!): Tech
    updateTech(
      id: ID!
      title: String
      description: String
      categoryId: ID
    ): Tech
    destroyTech(id: ID!): Tech

    # Link
    storeLink(
      title: String!
      description: String!
      url: String!
      techId: ID!
    ): Link
    updateLink(
      id: ID!
      title: String
      description: String
      url: String
      techId: ID!
    ): Link
    destroyLink(id: ID!): Link
  }
`;

module.exports.typeDefs = typeDefs;
