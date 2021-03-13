'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovementSchema extends Schema {
  up() {
    this.create('movements', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.decimal('value').notNullable();
      table.integer('movements_type_id').unsigned()
      table.foreign('movements_type_id').references('movements_types.id')
      table.timestamps()
    })
  }

  down() {
    this.drop('movements')
  }
}

module.exports = MovementSchema
