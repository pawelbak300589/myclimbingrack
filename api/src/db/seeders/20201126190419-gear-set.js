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
      'Gear_Sets',
      [
        {
          gearId: 1,
          setId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 2,
          setId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 1,
          setId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 3,
          setId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gearId: 4,
          setId: 2,
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
    await queryInterface.bulkDelete('Gear_Sets', null, {});
  },
};
