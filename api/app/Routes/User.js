'use strict'

const Route = use('Route')

module.exports = () => {
    Route.get('/me/', 'UserController.user').middleware('auth')
    Route.put('/password/', 'UserController.password')
}