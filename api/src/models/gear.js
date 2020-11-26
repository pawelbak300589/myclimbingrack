'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      this.belongsToMany(models.Set, {
        foreignKey: 'gearId',
        through: 'Gear_Set',
        as: 'Set',
      });
      this.belongsToMany(models.List, {
        foreignKey: 'gearId',
        through: 'Gear_List',
        as: 'List',
      });
    }
  }
  Gear.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          as: 'userId',
        },
      },
    },
    {
      sequelize,
      modelName: 'Gear',
    }
  );
  return Gear;
};
