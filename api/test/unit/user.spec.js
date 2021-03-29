'use strict'

const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')

test('Register a user', async({ client }) => {
    const response = await client.post('api/auth/register/').send({
        username: 'test',
        email: 'test@test.com',
        password: 'test123'
    }).end()

    response.assertStatus(201)
})
test('Get the authenticated user', async({ client }) => {
    const user = await User.first()

    const response = await client.get('api/user/me/')
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})