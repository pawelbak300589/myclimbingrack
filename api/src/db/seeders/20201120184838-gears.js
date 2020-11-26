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
      'Gears',
      [
        {
          name: 'BD Camelot C4',
          description: 'This is the Black Diamond C4',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BD Camelot C4',
          description: 'This is the Black Diamond C1',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Wild Country Yellow Friend',
          description: 'This is the Wild Country Yellow Friend',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Wild Country Blue Friend',
          description: 'This is the Wild Country blue friend',
          userId: 2,
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
    await queryInterface.bulkDelete('Gears', null, {});
  },
};
