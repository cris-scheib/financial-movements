'use strict'

const Route = use('Route')

module.exports = () => {
    Route.get('movements', 'ReportController.movements').middleware('auth')
    Route.get('history', 'ReportController.history').middleware('auth')
    Route.get('balance', 'ReportController.balance').middleware('auth')
    Route.get('cash-flow', 'ReportController.cashFlow').middleware('auth')
    Route.get('users', 'ReportController.users').middleware('auth')
}