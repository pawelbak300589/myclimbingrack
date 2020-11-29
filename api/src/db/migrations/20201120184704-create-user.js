'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: { type: Sequelize.STRING, allowNull: false },
      passwordHash: { type: Sequelize.STRING, allowNull: false },
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING, allowNull: false },
      acceptTerms: { type: Sequelize.BOOLEAN },
      role: { type: Sequelize.STRING, allowNull: false },
      verificationToken: { type: Sequelize.STRING },
      verified: { type: Sequelize.DATE },
      resetToken: { type: Sequelize.STRING },
      resetTokenExpires: { type: Sequelize.DATE },
      passwordReset: { type: Sequelize.DATE },
      created: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
