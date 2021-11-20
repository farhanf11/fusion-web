'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      packet: { type: Sequelize.STRING, allowNull: false },
      date: { type: Sequelize.DATE, allowNull: false },
      address: { type: Sequelize.STRING, allowNull: false },
      bankAccount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total: {
        type: Sequelize.INTEGER,
        defaultValue: 50000,
      },
      uploadTransaction: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: { type: Sequelize.INTEGER, allowNull: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders')
  },
}
