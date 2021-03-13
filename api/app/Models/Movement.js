'use strict'
const Model = use('Model')

class Movement extends Model {
  static boot() {
    super.boot()
  }
  user() {
    return this.hasOne('App/Models/User')
  }
  type() {
    return this.hasOne('App/Models/MovementType')
  }
}

module.exports = Movement
