'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set extends Model {
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
      this.belongsToMany(models.Gear, {
        foreignKey: 'setId',
        through: 'Gear_Set',
        as: 'Gear',
      });
    }
  };
  Set.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    order: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      },
    },
  }, {
    sequelize,
    modelName: 'Set',
  });
  return Set;
};