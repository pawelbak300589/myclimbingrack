'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.RefreshToken, {
        foreignKey: 'userId',
      });
      this.hasMany(models.Gear, {
        foreignKey: 'userId',
      });
      this.hasMany(models.Set, {
        foreignKey: 'userId',
      });
      this.hasMany(models.List, {
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      passwordHash: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      acceptTerms: { type: DataTypes.BOOLEAN },
      role: { type: DataTypes.STRING, allowNull: false },
      verificationToken: { type: DataTypes.STRING },
      verified: { type: DataTypes.DATE },
      resetToken: { type: DataTypes.STRING },
      resetTokenExpires: { type: DataTypes.DATE },
      passwordReset: { type: DataTypes.DATE },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated: { type: DataTypes.DATE },
      isVerified: {
        type: DataTypes.VIRTUAL,
        get() {
          return !!(this.verified || this.passwordReset);
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: false,
      defaultScope: {
        // exclude password hash by default
        attributes: { exclude: ['passwordHash'] },
      },
      scopes: {
        // include hash with this scope
        withHash: { attributes: {} },
      },
    }
  );
  return User;
};
