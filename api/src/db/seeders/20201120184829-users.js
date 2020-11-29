'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'pawelbak300589@gmail.com',
          passwordHash: await bcrypt.hash('123456789', 10),
          firstName: 'Pawel',
          lastName: 'Bak',
          acceptTerms: true,
          role: 'Admin',
          verified: new Date(),
          created: new Date(),
          updated: new Date(),
        },
        {
          email: 'emiliamlak@gmail.com',
          passwordHash: await bcrypt.hash('123456789', 10),
          firstName: 'Emilia',
          lastName: 'Mlak',
          acceptTerms: true,
          role: 'Admin',
          verified: new Date(),
          created: new Date(),
          updated: new Date(),
        },
        {
          email: 'ulastopka@test.com',
          passwordHash: await bcrypt.hash('123456789', 10),
          firstName: 'Ula',
          lastName: 'Stopka',
          acceptTerms: true,
          role: 'User',
          verified: new Date(),
          created: new Date(),
          updated: new Date(),
        },
        {
          email: 'radekkowalczyk@test.com',
          passwordHash: await bcrypt.hash('123456789', 10),
          firstName: 'Radek',
          lastName: 'Kowalczyk',
          acceptTerms: true,
          role: 'User',
          verified: new Date(),
          created: new Date(),
          updated: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
