'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GearSet extends Model {
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
      this.belongsTo(models.Set, {
        foreignKey: 'setId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  GearSet.init(
    {
      gearId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Gear',
          key: 'id',
          as: 'gearId',
        },
      },
      setId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Set',
          key: 'id',
          as: 'setId',
        },
      },
    },
    {
      sequelize,
      modelName: 'GearSet',
    }
  );
  return GearSet;
};
