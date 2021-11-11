const _ = require('lodash');
const { dateFormat, relPath } = require('../modules/util');

module.exports = (sequelize, { DataTypes, Op }) => {
  const CateProduct = sequelize.define(
    'CateProduct',
    {
      prd_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      cate_id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      tableName: 'cate_product',
      paranoid: true,
    }
  );

  CateProduct.associate = (models) => {
    CateProduct.belongsTo(models.Cate, {
      foreignKey: {
        name: 'cate_id',
        allowNull: false,
      },
      sourceKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    CateProduct.belongsTo(models.Product, {
      foreignKey: {
        name: 'prd_id',
        allowNull: false,
      },
      sourceKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return CateProduct;
};
