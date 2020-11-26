'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GearList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Gear, {
        foreignKey: 'gearId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsTo(models.List, {
        foreignKey: 'listId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  };
  GearList.init({
    gearId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Gear',
        key: 'id',
        as: 'gearId',
      },
    },
    listId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'List',
        key: 'id',
        as: 'listId',
      },
    },
  }, {
    sequelize,
    modelName: 'GearList',
  });
  return GearList;
};