const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    let animal = animals.find((animal) => animal.slug === args.slug);
    return animal;
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    let category = categories.find((category) => category.slug === args.slug);
    return category;
  },
};

module.exports = Query;
