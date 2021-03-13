'use strict'
const Factory = use('Factory')

class UserSeeder {
    async run() {
        await Factory.model('App/Models/User').createMany(2, [
            {
                username: 'cristine',
                email: 'cris.scheib@hotmail.com',
                password: 'teste123'
            },
            {
                username: 'teste',
                email: 'teste@teste.com',
                password: 'teste123'
            },
        ])
    }
}

module.exports = UserSeeder