const { Product } = require('../models');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 1; i <= 1000; i++) {
      let star = Number((Math.random() * 3 + 2).toFixed(1));
      await Product.update({ star: star }, { where: { id: i } });
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('section_product', null, {});
  },
};
