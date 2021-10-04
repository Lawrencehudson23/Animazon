const { v4 } = require("uuid");

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, slug, stock, onSale, category },
    { animals }
  ) => {
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },

  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((animal) => animal.id === id);

    animals.splice(index, 1);
    return true;
  },
};

module.exports = Mutation;
