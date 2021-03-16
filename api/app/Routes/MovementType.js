'use strict'

const Route = use('Route')

module.exports = () => {
    Route.post('/', 'MovementTypeController.create').validator('movement_type/Create')
    Route.get('/:id?', 'MovementTypeController.get')
    Route.put('/:id', 'MovementTypeController.update')
    Route.delete('/:id', 'MovementTypeController.delete')
}