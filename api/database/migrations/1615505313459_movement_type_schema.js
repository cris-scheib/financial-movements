'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovementTypeSchema extends Schema {
  up() {
    this.create('movement_types', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.boolean('action').notNullable()
      table.boolean('status').notNullable().default(1)
      table.timestamps()
    })
  }

  down() {
    this.drop('movement_types')
  }
}

module.exports = MovementTypeSchema
