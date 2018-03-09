'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Parents', [
      {
        first_name: 'Kobe',
        last_name: 'Bryant',
        phone_number: '4087659877',
        parentMedConsent: true,
      },
      {
        first_name: 'Lebron',
        last_name: 'James',
        phone_number: '6509234561',
        parentMedConsent: false,
      },
      {
        first_name: 'Steph',
        last_name: 'Curry',
        phone_number: '3109877885',
        parentMedConsent: false,
      },
      {
        first_name: 'Kevin',
        last_name: 'Durant',
        phone_number: '4154439928',
        parentMedConsent: true,
      },
      {
        first_name: 'Kevin',
        last_name: 'Hart',
        phone_number: '7652109887',
        parentMedConsent: false,
      },
      {
        first_name: 'Draymond',
        last_name: 'Green',
        phone_number: '6895432167',
        parentMedConsent: false,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
      {
        first_name: 'Klay',
        last_name: 'Thompson',
        phone_number: '8285432098',
        parentMedConsent: true,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
      {
        first_name: 'Lonzo',
        last_name: 'Ball',
        phone_number: '2129076342',
        parentMedConsent: true,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
      {
        first_name: 'Serena',
        last_name: 'Williams',
        phone_number: '6198777390',
        parentMedConsent: false,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
      {
        first_name: 'Kate',
        last_name: 'Middleton',
        phone_number: '7279017543',
        parentMedConsent: false,
        // createdAt: new Date(),
        // updatedAt: new Date()
      }
      ]);
  },

  // down: (queryInterface, Sequelize) => {
  //   /*
  //     Add reverting commands here.
  //     Return a promise to correctly handle asynchronicity.

  //     Example:
  //     return queryInterface.bulkDelete('Person', null, {});
  //   */
  // }
};
