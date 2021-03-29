'use strict'

const MovementType = use('App/Models/MovementType')
const Movement = use('App/Models/Movement')

class MovementTypeController {

    async create({ request, response }) {
        try {
            const type = await MovementType.create(request.all())
            return response.status(200).json(type)
        } catch (error) {
            return response.status(500).json({ message: 'Error to create the movement type', error })
        }
    }

    async update({ params, response, request }) {
        try {
            let type = await MovementType.find(params.id)
            const data = request.only(['name', 'action', 'status'])
            type.merge(data)
            await type.save()
            return response.status(200).json(type)
        } catch (error) {
            return response.status(500).json({ message: 'Error to update the movement type', error })
        }
    }

    async get({ response, params }) {
        try {
            let types = (params.id === null) ? await MovementType.all() : await MovementType.find(params.id)
            return response.status(200).json(types)
        } catch (error) {
            return response.status(500).json({ message: 'Error to get the movement type' })
        }
    }

    async delete({ params, response }) {
        try {
            let movements = await Movement.query().where('movement_type_id', params.id).getCount()
            if (movements > 0) {
                return response.status(409).json({ message: 'Impossible to delete types that have movement' })
            } else {
                let type = await MovementType.find(params.id)
                await type.delete()
                return response.status(200).json({ message: 'Movement type deleted' })
            }
        } catch (error) {
            return response.status(500).json({ message: 'Error to delete the movement type', error })
        }
    }

}

module.exports = MovementTypeController