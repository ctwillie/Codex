const Category = require("./models/category");
const Tech = require("./models/tech");
const Link = require("./models/link");

const resolvers = {
  Query: {
    categories: () => Category.find({}),
    category: (_, { id }) => Category.findById(id),
    techs: () => Tech.find({}),
    tech: (_, { id }) => Tech.findById(id),
    links: () => Link.find({}),
    link: (_, { id }) => Link.findById(id),
  },
  Mutation: {
    // Category
    storeCategory: (_, args) => {
      let category = new Category({ title: args.title });
      return category.save();
    },
    updateCategory: async (_, { id, title }) => {
      return await Category.findByIdAndUpdate(id, { title }, { new: true });
    },
    destroyCategory: async (_, { id }) => {
      return await Category.findByIdAndDelete(id);
    },
    // Tech
    storeTech: (_, { title, description, categoryId }) => {
      let tech = new Tech({ title, description, categoryId });
      return tech.save();
    },
    updateTech: async (_, { id, title, description, categoryId }) => {
      return await Tech.findByIdAndUpdate(
        id,
        { title, description, categoryId },
        { new: true }
      );
    },
    destroyTech: async (_, { id }) => {
      // delete all related links first
      await Link.deleteMany({ techId: id });
      return await Tech.findByIdAndDelete(id);
    },
    // Link
    storeLink: (_, { title, description, url, techId }) => {
      let link = new Link({ title, description, url, techId });
      return link.save();
    },
    updateLink: async (_, { id, title, description, url, techId }) => {
      return await Link.findByIdAndUpdate(
        id,
        {
          title,
          description,
          url,
          techId,
        },
        { new: true }
      );
    },
    destroyLink: async (_, { id }) => {
      return await Link.findByIdAndDelete(id);
    },
  },
  Category: {
    techs: (parent) => {
      return Tech.find({ categoryId: parent.id });
    },
  },
  Tech: {
    links: (parent) => {
      return Link.find({ techId: parent.id });
    },
  },
};

module.exports.resolvers = resolvers;
