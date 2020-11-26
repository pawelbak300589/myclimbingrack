'use strict';

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
          firstName: 'Pawel',
          lastName: 'Bak',
          email: 'pawelbak300589@gmail.com',
          password: '123456789',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Emilia',
          lastName: 'Mlak',
          email: 'emiliamlak@gmail.com',
          password: '123456789',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Ula',
          lastName: 'Stopka',
          email: 'ulastopka@test.com',
          password: '123456789',
          createdAt: new Date(),
          updatedAt: new Date(),
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
