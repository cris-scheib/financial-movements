'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestMovementSchema extends Schema {
  up () {
    this.create('test_movements', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('test_movements')
  }
}

module.exports = TestMovementSchema
