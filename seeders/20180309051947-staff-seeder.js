'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Staffs', [
        {
        first_name: 'Johnny',
        last_name: 'Bravo',
        phone_number: '5555763427',
        email: 'jbravo@school.edu',
        username: 'jbravo',
        password: '12345',
        // isAdmin: false,
        // isTeacher: false,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
        {
        first_name: 'Patty',
        last_name: 'Cake',
        phone_number: '3411433414',
        email: 'pcake@school.edu',
        username: 'pcake',
        password: '12345',
        // isAdmin: false,
        // isTeacher: false,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
        {
        first_name: 'Rocky',
        last_name: 'Balboa',
        phone_number: '808543278',
        email: 'stallion@school.edu',
        username: 'stallion',
        password: '12345',
        // isAdmin: false,
        // isTeacher: false,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
        {
        first_name: 'Tony',
        last_name: 'Stark',
        phone_number: '4145647889',
        email: 'ironman@school.edu',
        username: 'ironman',
        password: '12345',
        // isAdmin: false,
        // isTeacher: false,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
        {
        first_name: 'Lavar',
        last_name: 'Ball',
        phone_number: '9095443217',
        email: 'bbb@school.edu',
        username: 'bbb',
        password: '12345',
        // isAdmin: false,
        // isTeacher: false,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
        {
        first_name: 'Tom',
        last_name: 'Brady',
        phone_number: '3237564326',
        email: 'goat@school.edu',
        username: 'goat',
        password: '12345',
        // isAdmin: false,
        // isTeacher: false,
        // createdAt: new Date(),
        // updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
