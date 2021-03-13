'use strict'

const Route = use('Route')

module.exports = () => {
  Route.post('/', 'MovementTypeController.create').validator('movement_type/Create').middleware('auth')
  Route.get('/:id?', 'MovementTypeController.get').middleware('auth')
  Route.put('/:id', 'MovementTypeController.update').middleware('auth')
  Route.delete('/:id', 'MovementTypeController.delete').middleware('auth')
}