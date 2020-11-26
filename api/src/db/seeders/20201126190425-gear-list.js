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
      'Gear_Lists',
      [
        {
          gearId: 1,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 2,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 1,
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 3,
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 4,
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 1,
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 2,
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 3,
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 4,
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 4,
          listId: 3,
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
    await queryInterface.bulkDelete('Gear_Lists', null, {});
  }
};
