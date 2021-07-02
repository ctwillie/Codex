const L = require("lodash");

const categories = [
  { id: "1", title: "Frameworks" },
  { id: "2", title: "Languages" },
];

const techs = [
  {
    id: "1",
    title: "React",
    description: "A javascript UI component library.",
    categoryId: "1",
  },
  {
    id: "2",
    title: "GraphQL",
    description: "A declarative API query language.",
    categoryId: "1",
  },
  {
    id: "3",
    title: "Javascript",
    description: "A front-end programming language for the web.",
    categoryId: "2",
  },
];

const links = [
  {
    id: "1",
    title: "React Router Dom",
    description:
      "React Router Dom is an npm package for using react router navigational components that compose declaratively with your application in your browser.",
    url: "https://npmjs.com/package/react-router-dom",
    techId: "1",
  },
  {
    id: "2",
    title: "React Library",
    description: "A Javascript library for building user interfaces.",
    url: "https://reactjs.org",
    techId: "1",
  },
  {
    id: "3",
    title: "GraphQL",
    description: "All of the data you need, in one request.",
    url: "https://www.graphql.com/",
    techId: "2",
  },
  {
    id: "4",
    title: "Apollo",
    description: "The Apollo data graph platform.",
    url: "https://www.apollographql.com/",
    techId: "2",
  },
  {
    id: "5",
    title: "Javascript",
    description:
      "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    techId: "3",
  },
  {
    id: "6",
    title: "Javascript Cheetsheet",
    description: "A advanced javascript concepts cheatsheet.",
    url: "https://assets.ctfassets.net/aq13lwl6616q/5kpq6rZSjWZUo5r3ihXFov/d490a8fa569889332ff82c1d3c2675f7/Javascript_Cheatsheet_Zero_To_Mastery_V7.pdf",
    techId: "3",
  },
];

const resolvers = {
  Query: {
    categories: () => categories,
    category: (_, { id }) => L.find(categories, { id }),
    techs: () => techs,
    tech: (_, { id }) => L.find(techs, { id }),
    links: () => links,
    link: (_, { id }) => L.find(links, { id }),
  },
  Category: {
    techs: (parent) => techs.filter((tech) => tech.categoryId === parent.id),
  },
  Tech: {
    links: (parent) => links.filter((link) => link.techId === parent.id),
  },
};

module.exports.resolvers = resolvers;
