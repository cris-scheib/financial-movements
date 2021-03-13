'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovementSchema extends Schema {
  up () {
    this.table('movements', (table) => {
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
    })
  }

  down () {
    this.table('movements', (table) => {
     table.dropColumn('user_id')
    })
  }
}

module.exports = MovementSchema
