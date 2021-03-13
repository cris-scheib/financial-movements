'use strict'

const Route = use('Route')

module.exports = () => {
  Route.post('/', 'MovementController.create').validator('movement/Create').middleware('auth')
  Route.get('/:id?', 'MovementController.get').middleware('auth')
  Route.put('/:id', 'MovementController.update').middleware('auth')
  Route.delete('/:id', 'MovementController.delete').middleware('auth')
}