'use strict'

const Movement = use('App/Models/Movement')

class MovementController {

  async create({ request, response }) {
    try {
      const movement = await Movement.create(request.all())
      return response.status(200).json(movement);
    } catch (error) {
      return response.status(500).json({ message: 'Error to create the movement', error })
    }
  }

  async update({ params, response, request }) {
    try {
      let movement = await Movement.find(params.id)
      const data = request.only(['name', 'value', 'movement_type_id', 'user_id'])
      movement.merge(data)
      await movement.save()
      return response.status(200).json(movement);
    } catch (error) {
      return response.status(500).json({ message: 'Error to update the movement', error })
    }
  }

  async get({ response, auth, params }) {
    try {
      const user = await auth.getUser()
      let movements = (params.id === null) ? await Movement.query().where('user_id', user.id).fetch() : await Movement.find(params.id)
      return response.status(200).json(movements)
    } catch (error) {
      return response.status(500).json({ message: 'Error to get the movements' })
    }
  }

  async delete({ params, response }) {
    try {
      let movement = await Movement.find(params.id)
      await movement.delete()
      return response.status(200).json({ message: 'Movement deleted' })
    } catch (error) {
      return response.status(500).json({ message: 'Error to delete the movement', error })
    }
  }

}

module.exports = MovementController
