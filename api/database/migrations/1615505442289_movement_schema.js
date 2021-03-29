'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovementSchema extends Schema {
    up() {
        this.create('movements', (table) => {
            table.increments()
            table.string('name', 80).notNullable()
            table.decimal('value').notNullable();
            table.integer('movement_type_id').unsigned()
            table.foreign('movement_type_id').references('movement_types.id')
            table.timestamps()
        })
    }

    down() {
        this.drop('movements')
    }
}

module.exports = MovementSchema