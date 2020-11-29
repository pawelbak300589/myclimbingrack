'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
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
    }
  }
  RefreshToken.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          as: 'userId',
        },
      },
      token: { type: DataTypes.STRING },
      expires: { type: DataTypes.DATE },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdByIp: { type: DataTypes.STRING },
      revoked: { type: DataTypes.DATE },
      revokedByIp: { type: DataTypes.STRING },
      replacedByToken: { type: DataTypes.STRING },
      isExpired: {
        type: DataTypes.VIRTUAL,
        get() {
          return Date.now() >= this.expires;
        },
      },
      isActive: {
        type: DataTypes.VIRTUAL,
        get() {
          return !this.revoked && !this.isExpired;
        },
      },
    },
    {
      sequelize,
      modelName: 'RefreshToken',
      timestamps: false,
    }
  );
  return RefreshToken;
};
